import React from 'react';
import { Quotes } from './features/quotes/Quotes';
import './App.css';

function App() {
  return (
    <div className="container-fluid min-vw-100 min-vh-100 bg-black m-0">

      {/* Header */}

      <div className="row text-bg-dark pt-2 fixed-top">
        <div>
          <h1 className="mx-auto text-center mb-0" id="title">RandQuotes&nbsp;
            <span className="h6 h-auto text-secondary" id="subtitle">
              by Jephthah M. Orobia
              <span className="contact-links ">
                <a href="emailto:jephthah@gmail.com " target="_blank" rel="noreferrer"><i className="fa-solid fa-paper-plane "></i></a>
                <a href="https://github.com/jephthah-orobia " target="_blank" rel="noreferrer"><i className="fa-brands fa-github "></i></a>
                <a href="https://www.linkedin.com/in/jephthah-orobia/ " target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin "></i></a>
                <a href="https://www.linkedin.com/in/jephthah-orobia/ " target="_blank" rel="noreferrer"><i className="fa-brands fa-free-code-camp"></i></a>
              </span>
            </span>
          </h1>

          <p className="text text-secondary text-center mb-2">
            A sample project written for&nbsp;
            <a className="text text-secondary" href="https://www.freecodecamp.org/" target="_blank" rel="noreferrer">freeCodeCamp.org</a>&nbsp;
            as a partial requirement to complete the certification for&nbsp;
            <em>Front End Development Libraries</em>.</p>
        </div>
      </div>

      {/* Quote-Box Container 
      
      <div className="row min-vw-100 vh-100 align-content-center justify-content-center">
        <blockquotes id="quote-box" className="card rounded-4 col-xxl-5 col-xl-6 col-lg-7 col-md-8 col-sm-9 col-10 py-3 px-4 shadow-lg">
          <div className="text h3 row p-3" id="text">
            Some sample quote goes here...
          </div>
          <div className="text h4 p-3 text-end" id="author">
            -author's name
          </div>
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
              <button id="new-quote" className="btn btn-primary fw-bold">New Quote</button>
            </span>
          </div>
        </blockquotes>
      </div>
      */}
      <Quotes />


      {/* Footer */}
      <div className="row text-bg-dark fixed-bottom pe-4 pb-3">
        <ul className="tech-stacks text text-secondary my-2">
          <li>Powered by: </li>
          <li>
            <a href="https://getbootstrap.com/" target="_blank" rel="noreferrer"><i className="fa-brands fa-bootstrap"></i><span className="sm"> Bootstrap</span></a>
          </li>
          <li>
            <a href="https://fontawesome.com/" target="_blank" rel="noreferrer"><i className="fa-brands fa-font-awesome"></i><span> FontAwesome </span></a>
          </li>
          <li>
            <a href="https://reactjs.org/" target="_blank" rel="noreferrer"><i className="fa-brands fa-react"></i><span> React</span></a>
          </li>
          <li>
            <a href="https://redux.js.org/" target="_blank" rel="noreferrer"><img className="redux-logo" src=" https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg" alt="Redux Logo" /><span> Redux</span></a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
