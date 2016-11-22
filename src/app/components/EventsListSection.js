import React, {Component, PropTypes} from 'react';
import EventLink from '../components/EventLink.js';

export default class EventsListSection extends Component {
  render() {
    return (
      <div>
        <h1>User Events</h1>
        <div className="events-box">
          <ul className="events-list">
            {this.props.events.map(event => <EventLink key={event.id} event={event} selectEvent={this.props.selectEvent}/>)}
          </ul>
        </div>
      </div>
    );
  }
}

EventsListSection.propTypes = {
  events: PropTypes.array.isRequired,
  selectEvent: PropTypes.func.isRequired
};
