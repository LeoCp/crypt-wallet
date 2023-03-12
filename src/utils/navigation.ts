import { TRoutes } from '@routes/types/routes';

export function resetNavigationToHome(params: { hashedPassword: string }) {
  return {
    index: 0,
    routes: [
      {
        name: TRoutes.HOME,
        params,
      },
    ],
  };
}
