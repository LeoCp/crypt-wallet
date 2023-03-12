export function onFormatWalletBalance(value: string) {
  if (value === '0.0') {
    return 0;
  }

  return parseFloat(value).toPrecision(9);
}
