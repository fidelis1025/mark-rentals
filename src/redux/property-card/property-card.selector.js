import { createSelector } from "reselect";

const selectProperty = state => state.property

export const selectPropertySections = createSelector(
    [selectProperty],
    property => property.property
)
