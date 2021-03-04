import React from 'react';
import {connect} from "react-redux";
import axios from "axios";
import {useHistory} from 'react-router-dom';
import {ACTIONS} from "../../actions";

export const LandingPage = (props) => {

    const history = useHistory();

    const goToDetails = (book) => {
        history.push({pathname: `/edit-book/${book.id}`, book: book});
    };

    if (!props.loaded) {
        props.dispatch(fetchBooks());
    }
    let searchText = props.searchText;
    return <div className={'landing-container'}>
        <div className={'book-list-container'}>
            {
                props.books
                    .filter((book) =>
                        !searchText || book.name.includes(searchText) || book.author.includes(searchText) || book.description.includes(searchText)
                    )
                    .map((book, index) =>
                        <div onClick={() => goToDetails(book)} to={`/edit-book/${book.id}`} className={'book-card'}
                             key={index}>
                            <div className={'book-title'}>{book.name}</div>
                            <div className={'book-description'}>{book.description}</div>
                            <div className={'book-author'}><i>{book.author}</i></div>
                        </div>
                    )
            }
        </div>

    </div>
};

const mapStateToProps = (state) => {
    return {
        books: state.books.books,
        loaded: state.books.loaded,
        searchText: state.books.searchText
    }
};


function fetchBooks() {
    return dispatch => {
        return axios.get("http://localhost:3000/books")
            .then(json => {
                dispatch({
                    type: ACTIONS.GET_BOOK_RESPONSE,
                    payload: json.data.books
                });
                return json;
            });
    };
}

const LandingPageContainer = connect(mapStateToProps)(LandingPage);

export default LandingPageContainer;
