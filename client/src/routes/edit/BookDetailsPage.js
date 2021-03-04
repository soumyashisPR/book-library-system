import React, {useState} from 'react';
import axios from "axios";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";


export const EditBookPage = (props) => {
    let [book, setBook] = useState(props.location.book);

    if (!book) {
        return <Redirect to={'/'}></Redirect>
    }
    return <div className={'edit-book-container'}>
        Edit book details:
        <br/>
        <br/>

        <div className={'form-input'}>
            <div className={'label'}> Name:<span style={{color: 'red'}}>&#42;</span></div>
            <input type="text" value={book.name} onChange={(e) => setBook({...book, name: e.target.value})}/>
        </div>

        <div className={'form-input'}>
            <div className={'label'}> Author:<span style={{color: 'red'}}>&#42;</span></div>
            <input type="text" value={book.author} onChange={(e) => setBook({...book, author: e.target.value})}/>
        </div>


        <div className={'form-input'}>
            <div className={'label'}> Description:<span style={{color: 'red'}}>&#42;</span></div>
            <textarea name="name" value={book.description}
                      onChange={(e) => setBook({...book, description: e.target.value})}/>
        </div>

        <div className={'form-input'}>
            <button disabled={!book.name || !book.author || !book.description}
                    onClick={() => props.dispatch(editBook(book))}>Save
            </button>
        </div>
    </div>

};

function editBook(book) {
    return dispatch => {
        axios.put("http://localhost:3000/book/", book).then(() => {
            alert('book details saved');
            dispatch({
                type: 'BOOKS_MODIFIED'
            });
        });
    };
}

const EditBookPageContainer = connect()(EditBookPage);

export default EditBookPageContainer;
