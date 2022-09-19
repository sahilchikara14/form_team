import { ActionTypes } from "../constants/ActionTypes"

const initialState = {
    members: []
}

export const MemberReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_MEMBERS:
            return { ...state, members: payload }
        case ActionTypes.SEARCH_MEMBERS:
            return { ...state, members: payload }
        default:
            return state;
    }
}