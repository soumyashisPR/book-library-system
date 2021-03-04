import React, {useState} from 'react';
import axios from "axios";
import {connect} from "react-redux";


export const AddBookPage = (props) => {

    let [book, setBook] = useState({});

    return <div className={'add-book-container'}>
        Enter details of new book:
        <br/>
        <br/>

        <div className={'form-input'}>
            <div className={'label'}> Name:<span style={{color:'red'}}>&#42;</span></div>
            <input type="text" value={book.name} onChange={(e) => setBook({...book, name: e.target.value})}/>
        </div>

        <div className={'form-input'}>
            <div className={'label'}> Author:<span style={{color:'red'}}>&#42;</span></div>
            <input type="text" value={book.author} onChange={(e) => setBook({...book, author: e.target.value})}/>
        </div>


        <div className={'form-input'}>
            <div className={'label'}> Description:<span style={{color:'red'}}>&#42;</span></div>
            <textarea name="name" value={book.description}
                      onChange={(e) => setBook({...book, description: e.target.value})}/>
        </div>

        <div className={'form-input'}>
            <button disabled={!book.name || !book.author || !book.description}
                    onClick={() => props.dispatch(createBook(book))}>Create
            </button>
        </div>
    </div>

};

function createBook(book) {
    return dispatch => {
        axios.post("http://localhost:3000/book", book).then(() => {
            alert("Book saved");
            dispatch({
                type: 'BOOKS_MODIFIED'
            });
        });
    };
}


const AddBookPageContainer = connect()(AddBookPage);

export default AddBookPageContainer;
