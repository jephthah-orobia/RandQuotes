import React from 'react';
import { useSelector, useDispatch } from 'react-redux';


import {
    selectAuthor,
    selectText,
    getNext
} from './quotesSlice';


export function Quotes() {
    const author = useSelector(selectAuthor);
    const text = useSelector(selectText);
    const dispatch = useDispatch();
    return (
        <div className="row min-vw-100 vh-100 align-content-center justify-content-center">
            <div id="quote-box" className="card rounded-4 col-xxl-5 col-xl-6 col-lg-7 col-md-8 col-sm-9 col-10 py-3 px-4 shadow-lg">
                <div className="text text-center h3 row p-3" id="text">{text}</div>
                <div className="text h4 p-3 text-end" id="author">&mdash;&nbsp;{author}</div>
                <div className="row py-3">
                    <span className="col-6">
                        <a className="btn btn-secondary" href={`https://www.facebook.com/sharer/sharer.php?u=` + window.location} target="_blank" rel="noreferrer">
                            <i className="fa-brands fa-facebook-f"></i>
                        </a>&nbsp;
                        <a className="btn btn-secondary" id="tweet-quote" href="twitter.com/intent/tweet" target="_blank" rel="noreferrer">
                            <i className="fa-brands fa-twitter"></i>
                        </a>&nbsp;
                        <a className="btn btn-secondary" href="https://www.tumblr.com/share">
                            <i className="fa-brands fa-tumblr"></i>
                        </a>
                    </span>
                    <span className="col-6 text-end">
                        <button
                            id="new-quote"
                            onClick={() => {
                                dispatch(getNext());
                            }}
                            className="btn btn-primary fw-bold">New Quote</button>
                    </span>
                </div>
            </div>
        </div>
    );
}