import React, { Component } from 'react';

class Articles extends Component {
    render () {
        return (
            <div>
                <h1>Articles</h1>
                <ul>
                    {
                        this.props.articles.map(el => (
                            <li key={el.id}>
                                { el.title }
                            </li>
                        ))
                    }
                </ul>
                { 
                    console.log(this.props.articles)

                }
            </div>
        );
    }
}

export default Articles;