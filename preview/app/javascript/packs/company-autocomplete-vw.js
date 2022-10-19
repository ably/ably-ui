import CompanyAutocomplete from "@ably/ui/core/CompanyAutocomplete/component";

document.addEventListener("DOMContentLoaded", () => {
  const input = document.querySelector("input");
  CompanyAutocomplete(input, "/api/companies");

  document.body.classList.add("bg-light-grey", "m-32");
});
