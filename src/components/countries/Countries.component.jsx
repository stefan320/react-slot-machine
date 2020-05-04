import React from "react";
import RenderCountries from "../renderCountries/RenderCountries";

import "./countries.styles.scss";

class Countries extends React.Component {
  constructor() {
    super();
    this.state = {
      countries: [],
      searchRes: [],
      inputLength: 0
    };
  }

  componentDidMount() {
    const connect = async () => {
      let getCountries = await fetch("https://restcountries.eu/rest/v2/all");
      let allCountries = await getCountries.json();
      return allCountries.map(country => {
        return {
          name: country.name,
          alpha3Code: country.alpha3Code,
          flag: country.flag
        }
      }
      );
    }
    connect().then((countries) => {
      this.setState({ countries });
    }
    );
  };

  handleChange = (event) => {
    const inputValue = event.target.value;
    const inputLength = inputValue.length;
    const search = inputValue.toLowerCase();

    const filteredCountries = this.state.countries.filter((country) => {
      const foundCountries = country.name.toLowerCase().match(search);
      return foundCountries;
    });
    this.setState({
      searchRes: filteredCountries,
      inputLength: inputLength
    });
  };

  render() {
    return (
      <div className={"countries"}>
        <div className={"countries__search"}>
          <label className={"label"} htmlFor="search">Search Country</label>
          <input className={"input"} id="search" type="text" onChange={this.handleChange} />
        </div>

        {/* Check if Api Call is ready  */}
        {this.state.countries.length > 0 ? (
          <RenderCountries
            countries={
              this.state.searchRes.length > 0 ?
                this.state.searchRes
                : this.state.inputLength === 0 ? this.state.countries
                  : null
            }
          />
        ) : null}
      </div>
    );
  }
}

export default Countries;
