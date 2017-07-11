import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import TODO from './TodoConstants';
import {toggleTodo} from './TodoActions';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      complete: props.status === TODO.STATUS.COMPLETE 
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({[name]: value});
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.complete !== prevState.complete) {
      // update the status in the redux store when local state.complete changes
      this.props.toggleTodo(this.props.id, this.state.complete ? TODO.STATUS.COMPLETE : TODO.STATUS.INCOMPLETE);
    }
  }
  render() {
    const description = this.props.description;
    var todoClass = classNames({
      'todo': true,
      'status-complete': this.props.status === TODO.STATUS.COMPLETE,
      'status-incomplete': this.props.status === TODO.STATUS.INCOMPLETE,
    });
    const toggleTodo = e => {
      e.preventDefault();
      this.setState({complete: !this.state.complete});
    };
    return (
      <div className={todoClass}>
        <input type="checkbox" name="complete" checked={this.state.complete} onChange={this.handleInputChange} />
        <a href="#toggleTodo" onClick={toggleTodo} className="description">{description}</a>
      </div>
    );
  }
}

Todo.propTypes = {
  id: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  status: PropTypes.oneOf(Object.values(TODO.STATUS)),
};

Todo.defaultProps = {
  status: TODO.STATUS.INCOMPLETE
};

// export for testing
export {Todo};

// connect to Redux Store
function mapStateToProps(state, ownProps) {
  // this component only receives input from its props, not from Redux Store
  return ownProps;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    toggleTodo,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
