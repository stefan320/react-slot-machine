import React from "react";
import RenderCountries from "./RenderCountries";

class Countries extends React.Component {
  constructor() {
    super();
    this.state = {
      countries: [],
      searchRes: [],
    };
  }

  componentDidMount() {
    const connect = async () => {
      let getCountries = await fetch("https://restcountries.eu/rest/v2/all");
      let allCountries = await getCountries.json();
      return allCountries;
    };
    connect().then((allCountries) => {
      this.setState({
        countries: allCountries,
      });
    });
  }

  handleChange = (event) => {
    const search = event.target.value.toLowerCase();
    const filteredCountries = this.state.countries.filter((country) => {
      return country.name.toLowerCase().match(search);
    });
    this.setState({ searchRes: filteredCountries });
  };

  render() {
    return (
      <div>
        <label htmlFor="search">Search Country</label>
        <input id="search" type="text" onChange={this.handleChange} />
        {/* Check if Api Call is ready  */}
        {this.state.countries.length ? (
          <RenderCountries
            countries={
              this.state.searchRes.length > 0
                ? this.state.searchRes
                : this.state.countries
            }
          />
        ) : null}
      </div>
    );
  }
}

export default Countries;
