import React from 'react';
import {useHistory} from 'react-router-dom';
import {connect} from "react-redux";
import {ACTIONS} from "../actions";

const Header = (props) => {
    let history = useHistory();

    const onNewBookBtnClick = () => {
        history.push("/add-new");
    };

    const navigateToLanding = () => {
        history.push('/landing');
    };
    return <div className={'app-header'}>

        <div className={'logo'} onClick={navigateToLanding}>
            Logo
        </div>
        <div className={'search-bar'}>
            <input type='text' placeholder={'Search library'} value={props.searchText}
                   onChange={(e) => props.onSearchText(e.target.value)}/>
        </div>
        <div className={'add-book-btn'}>
            <button onClick={onNewBookBtnClick}>+New</button>
        </div>

    </div>
};

const mapStateToProps = (state) => {
    return {
        searchText: state.books.searchText
    };
};


const onSearchText = (text) => {
    return {
        type: ACTIONS.SEARCH_BAR_TEXT,
        payload: text
    }
};

const actionCreators = {
    onSearchText
};


let HeaderContainer = connect(mapStateToProps, actionCreators)(Header);
export default HeaderContainer;
