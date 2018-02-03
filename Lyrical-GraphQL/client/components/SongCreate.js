import React, { Component } from 'react';
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';

class SongCreate extends Component {
  constructor(props) {
    super(props);

    this.state = { title: '' };

  }

  onSubmit(event) {
    event.preventDefault();
    
  }

  render() {
    return (
      <div>
        <h3>Create a new song</h3>
        <form onSubmit={this.OnSubmit.bind(this)}>
          <label />
          <input
            value={this.state.title}
            onChange={(e) => this.setState({ title: e.target.value })}
          />
        </form>
      </div>
    );
  }
}

const mutation = gql`
  mutation AddSong($title: String){
    addSong(title: $title ){
      title
    }
  }
`;

export default graphql(mutation)(SongCreate);
