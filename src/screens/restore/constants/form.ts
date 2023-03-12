import { isValidMnemonic } from '@ethersproject/hdnode';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { requiredFieldSchema } from '@utils/schema';

export const PHRASE_FORM_PARAMS = {
  defaultValues: { phrase: '' },
  resolver: zodResolver(
    z.object({
      phrase: requiredFieldSchema.refine(isValidMnemonic, 'Invalid phrase'),
    }),
  ),
};
