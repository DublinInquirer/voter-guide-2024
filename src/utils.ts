import type { Records, FieldSet } from "airtable";

import { getLookupFieldValue, getStringFieldValue } from "./airtable-api";

export function getCandidateFullName({
  firstname,
  lastname,
}: {
  firstname: string;
  lastname: string;
}) {
  return `${firstname} ${lastname}`;
}

export function getAreasByLocalAuthority(electoralAreas: Records<FieldSet>) {
  const dccElectoralAreaNames = electoralAreas
    .filter((electoralArea) => {
      const localAuthorityName = getLookupFieldValue(
        electoralArea,
        "Local Authority Name"
      );

      return localAuthorityName === "Dublin City Council";
    })
    .map((record) => getStringFieldValue(record, "Name"));

  const fingalElectoralAreaNames = electoralAreas
    .filter((electoralArea) => {
      const localAuthorityName = getLookupFieldValue(
        electoralArea,
        "Local Authority Name"
      );

      return localAuthorityName === "Fingal County Council";
    })
    .map((record) => getStringFieldValue(record, "Name"));

  return { dccElectoralAreaNames, fingalElectoralAreaNames };
}
