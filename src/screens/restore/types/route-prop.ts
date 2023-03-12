import type { RouteProp } from '@react-navigation/native';

import { TRoutes } from '@routes/types/routes';
import { TRootStackParamList } from '@routes/types/param-list';

export type TRestoreWalletRouteProp = RouteProp<
  TRootStackParamList,
  TRoutes.RESTORE_WALLET
>;
