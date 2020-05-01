import React from "react";

const renderCountries = (props) => {
  if (props.countries) {
    return props.countries.map((country) => {
      return (
        <div className={"country"} key={country.alpha3Code}>
          <img className={"country--flag"} src={country.flag} alt={`${country.name} flag`} />
          <p className={"country--name"}>{country.name}</p>
        </div>
      )
    });
  } else {
    return <p>No Countries Found</p>
  }
};

export default renderCountries;
