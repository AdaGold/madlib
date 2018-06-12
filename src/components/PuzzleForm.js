import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './PuzzleForm.css';


class PuzzleForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
    puzzleThings: this.props.puzzleWords
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  static propTypes = {
    fillBlanks: PropTypes.func.isRequired,
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {

    const formRenderage = this.state.puzzleThings.map((thing) => {
        console.log(`${thing.label}`)
        return (
          <div key={thing.key} >
            <label htmlFor={thing.label} >{thing.label}: </label>
            <input
              name={thing.key}
              />
          </div>
       );
     });

    return (
      <div>
        <form
          onSubmit={ this.handleSubmit }
          className="the-puzzle-form"
          >
          {formRenderage}
          <input
            className="button complete"
            type="submit"
            value="Here are my words, make me a story!"
            />
        </form>
      </div>


    );
  }
}

export default PuzzleForm;
