import { useQuery } from '@tanstack/react-query';

import Wallet from '@core/wallet';

export function useWalletInfo(hashedPassword: string) {
  return useQuery({
    queryKey: ['walletInfo'],
    queryFn: () => Wallet.getWalletInfo(hashedPassword),
  });
}
