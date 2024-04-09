import type { Records, FieldSet } from "airtable";

import { getLookupFieldValue, getStringFieldValue } from "./airtable-api";

export const LOCAL_AUTHORITY = {
  DUBLIN_CITY_COUNCIL: "Dublin City Council",
  FINGAL_COUNTY_COUNCIL: "Fingal County Council",
};

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

      return localAuthorityName === LOCAL_AUTHORITY.DUBLIN_CITY_COUNCIL;
    })
    .map((record) => getStringFieldValue(record, "Name"));

  const fingalElectoralAreaNames = electoralAreas
    .filter((electoralArea) => {
      const localAuthorityName = getLookupFieldValue(
        electoralArea,
        "Local Authority Name"
      );

      return localAuthorityName === LOCAL_AUTHORITY.FINGAL_COUNTY_COUNCIL;
    })
    .map((record) => getStringFieldValue(record, "Name"));

  return { dccElectoralAreaNames, fingalElectoralAreaNames };
}
