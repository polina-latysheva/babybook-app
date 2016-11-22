import React, {Component, PropTypes} from 'react';

export default class EventLink extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.selectEvent(this.props.event);
  }

  render() {
    const {event} = this.props;
    return (
      <li onClick={this.handleClick}>
        <a>{event.name}</a>
      </li>
    );
  }
}

EventLink.propTypes = {
  event: PropTypes.object.isRequired,
  selectEvent: PropTypes.func.isRequired
};
