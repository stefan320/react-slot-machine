import ActionTypes from "./countries.types";

export const countries = countries => ({
    type: ActionTypes.FILTER_COUNTRIES,
    payload: countries
})