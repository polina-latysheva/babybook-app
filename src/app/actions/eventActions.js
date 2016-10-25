export function selectEvent(event) {
  console.log('event in selectEvent', event);
  return {type: 'SELECT_EVENT', event};
}
