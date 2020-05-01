import CountriesActionTypes from "./countries.types";

const INITIAL_STATE = {
    searchRes: []
}

const countriesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CountriesActionTypes.FILTER_COUNTRIES:
            return {
                ...state,
                searchRes: action.payload
            }

            default:
                return state;
    }
}

export default countriesReducer;