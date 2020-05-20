import React, { Component } from 'react';

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <div>
        <h1>Welcome to Trips Manager</h1>
        <p>Use this manager to manage your trips!</p>
            <ul>
                <li>Add a New Trip</li>
                <li>Update a Trip</li>
                <li>Delete a Trip</li>
                <li>Show All Trips</li>

            </ul>
      </div>
    );
  }
}
