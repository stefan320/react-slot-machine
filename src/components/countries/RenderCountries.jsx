import React from "react";

const renderCountries = (props) => {
  return props.countries.map((country) => {
    return <p key={country.alpha3Code}>{country.name}</p>;
  });
};

export default renderCountries;
