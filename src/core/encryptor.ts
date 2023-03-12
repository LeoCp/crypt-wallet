import { NativeModules } from 'react-native';
const AesEncryption = NativeModules.Aes;

class Encryptor {
  generateSalt(byteCount = 32) {
    const view = new Uint8Array(byteCount);

    // @ts-ignore
    global.crypto.getRandomValues(view);

    // @ts-ignore
    const b64encoded = btoa(String.fromCharCode.apply(null, view));
    return b64encoded;
  }

  generateKey(password: string, salt: string) {
    return AesEncryption.pbkdf2(password, salt);
  }

  encryptWithKey(text: any, keyBase64: string) {
    const ivBase64 = this.generateSalt(32);
    return AesEncryption.encrypt(text, keyBase64, ivBase64).then(
      (cipher: any) => ({
        cipher,
        iv: ivBase64,
      }),
    );
  }

  async encrypt(password: string, value: string) {
    const salt = this.generateSalt(16);
    const key = await this.generateKey(password, salt);
    const result = await this.encryptWithKey(value, key);
    result.salt = salt;
    return JSON.stringify(result);
  }

  async decrypt(password: string, encryptedString: string) {
    const encryptedData = JSON.parse(encryptedString);
    const key = await this.generateKey(password, encryptedData.salt);
    const data = await AesEncryption.decrypt(
      encryptedData.cipher,
      key,
      encryptedData.iv,
    );
    return data;
  }

  sha256(value?: string): Promise<string> {
    return AesEncryption.sha256(value);
  }
}

export default new Encryptor();
