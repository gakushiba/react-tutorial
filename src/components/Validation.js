// Validation.js
import * as z from 'zod';

export const inspectionNumberSchema = z.string().min(1, '検針票番号は必須です');
export const officeSchema = z.string().min(1, '担当営業所は必須です');

export const formSchema = z.object({
  inspectionNumber: inspectionNumberSchema,
  office: officeSchema,
});
