import countries from "world-countries";

// Map countries into a usable format for dropdown
export const countryOptions = countries.map((country) => ({
    label: ` ${country.name.common} (${country.idd.root}${
      country.idd.suffixes[0] || ""
    })`,
    flag: `${country.flag}`,
    value: country.cca2,
    code: `${country.idd.root}${country.idd.suffixes[0] || "+"}`, // Country dialing code
  }));