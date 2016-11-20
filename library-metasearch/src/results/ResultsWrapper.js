import React from 'react';
import './Results.css';

export default class ResultsWrapper extends React.Component {
  render() {
    return (
      <div className="results-wrapper">
        <div>
          <h3>
            {this.props.api} Results: {this.props.term}
          </h3>
          {this.props.children}
        </div>
        <button className="close-btn" onClick={this.props.onClose}>x</button>
      </div>
    );
  }
}
