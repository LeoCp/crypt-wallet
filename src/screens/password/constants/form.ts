import { zodResolver } from '@hookform/resolvers/zod';

import { passwordSchema } from '@utils/schema';

export const PASSWORD_FORM_PARAMS = {
  defaultValues: { password: '' },
  resolver: zodResolver(passwordSchema),
};
