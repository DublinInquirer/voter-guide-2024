export function getCandidateFullName({
  firstname,
  lastname,
}: {
  firstname: string;
  lastname: string;
}) {
  return `${firstname} ${lastname}`;
}
