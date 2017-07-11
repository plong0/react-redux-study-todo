import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {addTodo} from './TodoActions';

class AddTodo extends React.Component {
  constructor() {
    super();
    this.state = {
      description: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({[name]: value});
  }
  render() {
    const addTodo = e => {
      e.preventDefault();
      this.props.addTodo(this.state.description);
      this.setState({description: ''});
    };

    return (
      <div className="add-todo">
        <input type="text" name="description" value={this.state.description} onChange={this.handleInputChange} placeholder="Enter a new Todo" />
        <button type="button" onClick={addTodo}>Add Todo</button>
      </div>
    );
  }
}

// export for testing
export {AddTodo};

// connect to Redux Store
function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    addTodo,
  }, dispatch);
}

// no mapStateToProps needed, this component does not have any props
export default connect(null, mapDispatchToProps)(AddTodo);
