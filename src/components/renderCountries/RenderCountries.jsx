import React from "react";
import "./country.styles.scss"

const renderCountries = (props) => {
  if (props.countries) {
    return props.countries.map((country) => {
      return (
        <div className={"country"} key={country.alpha3Code} >
          <img className={"country--flag"} src={country.flag} alt={`${country.name} flag`} />
          <p className={"country--name"}>{country.name}</p>
        </div >
      )
    });
  } else {
    return <div className={"country"}><h3 className={"country--null"}>No Countries Found</h3></div>
  }
};

export default renderCountries;
