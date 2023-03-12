import { zodResolver } from '@hookform/resolvers/zod';

import { passwordSchema } from '@utils/schema';

export const PASSWORD_FORM_PARAMS = {
  defaultValues: { password: '', confirmPassword: '' },
  resolver: zodResolver(
    passwordSchema
      .extend({
        confirmPassword: passwordSchema.shape.password,
      })
      .refine(data => data.password === data.confirmPassword, {
        message: 'Both password and confirmation must match',
        path: ['confirmPassword'],
      }),
  ),
};
