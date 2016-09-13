import React, {Component} from 'react';

export default class Events extends Component {
  render() {
    const eventsList = ['First step', 'First smile', 'First word'];
    return (
      <div>
        <div>
          <h1>BabyBook</h1>
        </div>
        <div>
          <h3>Events</h3>
          <ul>
            {eventsList.map((event, i) => <li key={i}>{event}</li>)}
          </ul>
        </div>
      </div>
    );
  }
}
