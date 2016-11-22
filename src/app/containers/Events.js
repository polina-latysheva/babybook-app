import React, {Component, PropTypes} from 'react';
import EventsListSection from '../components/EventsListSection.js';
import Event from '../components/Event.js';
import {selectEvent} from '../actions/eventActions.js';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class Events extends Component {
  render() {
    const {events, selectedEvent, actions} = this.props;
    return (
      <div>
        <Event
          selectedEvent={selectedEvent}
          />
        <EventsListSection
          events={events}
          selectEvent={actions.selectEvent}
          />
      </div>
    );
  }
}

Events.propTypes = {
  events: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  selectedEvent: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    events: state.events.events,
    selectedEvent: state.events.selectedEvent
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({selectEvent}, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Events);
