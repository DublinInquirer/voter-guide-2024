# 2024 Local Elections Voter Guide

Voter Guide for 2024 Irish Local Elections in Dublin City Council and Fingal County Council

## Getting started

This project uses the [Astro web framework](https://astro.build/). Node.js v20.3.0 or higher is recommended.

The code requires an [Airtable](https://airtable.com) base as a data source. Contact us to get a template of the data structure.

```
git clone https://github.com/DublinInquirer/voter-guide-2024
cd voter-guide-2024
npm install
```

### Environment variables

Create a `.env` file with the environment variables below.

- **AIRTABLE_API_KEY** - An API key for retrieving data from Airtable.
- **GOOGLE_TAG_ID** - (Optional) A Google tag ID for Google Analytics.

## Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
