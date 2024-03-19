import airtable from 'airtable'
export const airtableClient = new airtable({apiKey: import.meta.env.AIRTABLE_API_KEY}).base('appv26VnG13fZRP15');