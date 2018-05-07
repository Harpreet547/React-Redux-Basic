import React, { Component } from "react";
import uuidvl from 'uuid';

import { addArticle } from '../redux/actions/article'

class AddArticleForm extends Component {

    constructor() {
        super();
        this.state = {
            title: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleSubmit(event) {
        event.preventDefault();
        const { title } = this.state;
        const id = uuidvl();
        this.props.addArticle({ title, id });
        this.setState({
            title: ''
        });
    }

    handleChange(event) {
        this.setState({ [event.target.id]: event.target.value });
    }

    render() {
        const { title } = this.state;
        return (
            
            <form onSubmit={ this.handleSubmit }>
                <div>
                    <label htmlFor='title'>Title</label>
                    <input 
                        type='text'
                        id='title'
                        value={ title }
                        onChange={ this.handleChange }/>
                </div>
                <button type='submit'>Save</button>
            </form>
            
        );
    }
}

export default AddArticleForm;