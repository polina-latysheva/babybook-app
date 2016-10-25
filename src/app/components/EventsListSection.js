import React, {Component, PropTypes} from 'react';

export default class EventsListSection extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log('hello');
    // this.props.actions.selectEvent(this.props.events.selectedEvent);
  }

  render() {
    // const {selectEvent, events} = this.props;
    // const {event} = this.props;
    return (
      <div>
        <h1>User Events</h1>
        <div className="events-box">
          <ul className="events-list">
            {this.props.events.map((event, i) => <li key={i} onClick={this.handleClick()}><a href="#">{event.name}</a></li>)}
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
