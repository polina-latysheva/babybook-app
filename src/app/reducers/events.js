const eventArray = [
  {id: 1, name: 'First step', url: 'https://drscdn.500px.org/photo/72502475/q%3D80_m%3D2000/105d196c17efd0b2c748c53d2a6e653c', title: 'Title One'},
  {id: 2, name: 'Secons step', url: 'https://drscdn.500px.org/photo/64551663/q%3D80_m%3D2000/e0a5bdeea4230348cb4bb18e347fb524', title: 'Title Two'},
  {id: 3, name: 'Third step', url: 'https://drscdn.500px.org/photo/147949435/q%3D80_m%3D2000/c1bf437f4b590fdaa5a84adddc1893df', title: 'Title Three'}
];

const initialState = {
  events: eventArray,
  selectedEvent: eventArray[0]
};

export default function events(state = initialState, action) {
  switch (action.type) {
    case 'SELECT_EVENT':
      return {
        events: state.events,
        selectedEvent: action.event
      };

    default: {
      console.log("default");
      console.log(state);
      return state;
    }
  }
}
