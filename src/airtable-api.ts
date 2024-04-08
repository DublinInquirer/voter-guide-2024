import airtable, { type Record, type FieldSet } from "airtable";
import { z } from "zod";

export const airtableClient = new airtable({
  apiKey: import.meta.env.AIRTABLE_API_KEY,
}).base("appv26VnG13fZRP15");

export function getLookupFieldValue(
  record: Record<FieldSet>,
  fieldName: string
) {
  return z.array(z.string()).parse(record.get(fieldName))[0];
}

export function getStringFieldValue(
  record: Record<FieldSet>,
  fieldName: string
) {
  return z.string().parse(record.get(fieldName));
}

export function getOptionalStringFieldValue(
  record: Record<FieldSet>,
  fieldName: string
) {
  return z.string().optional().parse(record.get(fieldName));
}
