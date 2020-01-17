import React, {useState} from 'react';
import ReactDom from "react-dom";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";
import {Route} from "react-router-dom";

import SavedList from './Movies/SavedList';

const App = () => {

  return (
    <div>
      <SavedList list={savedList} />
      <div>
        <Route exact path="/" component={MovieList} />
        <Route path ="/movies/:id" render={props => 
        <Movie {...props} addToSavedList={addToSavedList} />}
        />
      </div>
    </div>
  );
};

export default App;
