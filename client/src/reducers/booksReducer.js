import {ACTIONS} from "../actions";

const booksReducer = (state = {loaded: false, books: []}, action) => {
    switch (action.type) {
        case ACTIONS.GET_BOOK_RESPONSE:
            return {...state, loaded: true, books: action.payload};
        case ACTIONS.BOOKS_MODIFIED:
            return {...state, loaded: false, searchText: ""};
        case ACTIONS.SEARCH_BAR_TEXT:
            return {...state, searchText: action.payload};
        default:
            return state;
    }
};

export default booksReducer;
