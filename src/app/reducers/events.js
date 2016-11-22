export default function events(state = {events: [], selectedEvent: {}}, action) {
  switch (action.type) {
    case 'SELECT_EVENT':
      return {
        events: state.events,
        selectedEvent: action.event
      };

    default: {
      console.log("default");
      console.log('state', state);
      return state;
    }
  }
}
