import { z } from 'zod';

export const requiredFieldSchema = z
  .string()
  .nonempty({ message: 'Fill the field' });

export const passwordSchema = z.object({
  password: requiredFieldSchema,
});
