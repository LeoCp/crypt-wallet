export function formatToShortAddress(publicAddress: string) {
  return `${publicAddress.substring(0, 6)}...${publicAddress.slice(-6)}`;
}
