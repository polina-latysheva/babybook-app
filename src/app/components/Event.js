import React, {Component, PropTypes} from 'react';

export default class Event extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  renderImage(selectedEvent) {
    console.log('selectedEvent', selectedEvent);
    return (
      <div className="img">
        <img src={selectedEvent}/>
      </div>
    );
  }

  render() {
    const {selectedEvent} = this.props;
    console.log('this in Event', this);
    return (
      <div className="event-gallery">
        {this.renderImage(selectedEvent)}
      </div>
    );
  }
}

Event.propTypes = {
  selectedEvent: PropTypes.object.isRequired
};
