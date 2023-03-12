import { mnemonicToSeed } from 'bip39';
import { hdkey } from 'ethereumjs-wallet';
import { JsonRpcProvider } from '@ethersproject/providers';
import { Wallet as EthWallet } from '@ethersproject/wallet';
import { formatEther } from '@ethersproject/units';
import equals from 'ramda/src/equals';

import {
  DEFAULT_HD_PATH,
  DERIVE_CHILD_INDEX,
  URL_PROVIDES,
  SIGN_WALLET,
} from '@core/constants/wallet';
import SecureStorage from '@storage/secure-storage';
import Encryptor from '@core/encryptor';

class Wallet {
  create() {}

  async getPrivateKeyByMnemonic(mnemonic: string) {
    const seed = await mnemonicToSeed(mnemonic);
    const hdWallet = hdkey.fromMasterSeed(seed);
    const root = hdWallet.derivePath(DEFAULT_HD_PATH);
    const child = root.deriveChild(DERIVE_CHILD_INDEX);
    const wallet = child.getWallet();
    return wallet.getPrivateKeyString();
  }

  async restore(mnemonic: string, hashedPassword: string) {
    const privateKey = await this.getPrivateKeyByMnemonic(mnemonic);

    const enc = await Encryptor.encrypt(hashedPassword, privateKey);

    await SecureStorage.setPassword(hashedPassword);

    await SecureStorage.setValue(SIGN_WALLET, enc);

    return true;
  }

  async getWalletInfo(hashedPassword = '') {
    const pass = await SecureStorage.getValue(SIGN_WALLET);

    const privateKey = await Encryptor.decrypt(hashedPassword, pass);

    const provider = new JsonRpcProvider(URL_PROVIDES);
    const wallet = new EthWallet(privateKey, provider);
    const balance = await wallet.getBalance();

    return {
      currentBalance: formatEther(balance),
      publicAddress: wallet.address,
    };
  }

  async verifyAndHashedPassword(password: string) {
    try {
      const passw = await SecureStorage.getPassword();
      const hashedPassword = await Encryptor.sha256(password);
      const isValidPassword = equals(passw, hashedPassword);

      return {
        hashedPassword,
        isValidPassword,
      };
    } catch (error) {
      return {
        hashedPassword: '',
        isValidPassword: false,
      };
    }
  }
}

export default new Wallet();
