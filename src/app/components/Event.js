import React, {Component, PropTypes} from 'react';

export default class Event extends Component {

  renderImage(selectedEvent) {
    return (
      <div className="img">
        <img src={selectedEvent.url}/>
      </div>
    );
  }

  render() {
    const {selectedEvent} = this.props;
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
