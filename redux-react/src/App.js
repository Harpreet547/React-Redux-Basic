import React, { Component } from 'react';
import logo from './logo.svg';
import ArticleList from './redux/connections/articles';
import AddArticle from './redux/connections/addArticle';

class App extends Component {
  render() {
    return (
      <div className="App">
              <ArticleList/>
              <AddArticle/>
      </div>
    );
  }
}

export default App;
