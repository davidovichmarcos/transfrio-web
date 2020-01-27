import * as actionTypes from '../actions/types';

export const initialState = {
    currentPage: 0,
    isDealing: false,
    showBookingSection: false,
    goToBookingSection: false,
    user: { id: '', bookings: [], name: '' },
    activeBookings: []
};

export const reducer = (state, action) => {
    switch (action.type) {
        case actionTypes.USER_LOGGED_IN:
            const user = action.payload;
            return {
              ...state,
              user
            }
        case actionTypes.CHANGE_PAGE:
            return {
                ...state,
                currentPage: action.payload,
                goToBookingSection: action.payload === 3 ? false : false
            };
      default:
        return state;
    }
  };