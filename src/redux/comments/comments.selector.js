import { createSelector } from "reselect";

const selectComment = state => state.comments

export const selectCommentsSections = createSelector(
    [selectComment],
    comments => comments.comments
)