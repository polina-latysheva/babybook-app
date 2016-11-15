import React, {Component, PropTypes} from 'react';

export default class EventsListSection extends Component {

  handleClick(event) {
    this.props.selectEvent(event);
  }

  render() {
    return (
      <div>
        <h1>User Events</h1>
        <div className="events-box">
          <ul className="events-list">
            {this.props.events.map((event, i) => <li key={i} onClick={this.handleClick.bind(this, event)}><a href="#">{event.name}</a></li>)}
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
