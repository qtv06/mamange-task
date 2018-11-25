import React, {Component} from 'react';

class TaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: '',
      status: "close"
    };
    this.onChangeValue = this.onChangeValue.bind(this);
    this.sendTask = this.sendTask.bind(this);
  }
  sendTask(event) {
    event.preventDefault();
    this.props.getValue(this.state);
  }
  onChangeValue(event){
    var target = event.target;
    var name = target.name;
    this.setState({
      [name] : target.value 
    });
  }
  render() {
    return(
      <div className="panel panel-info">
        <div className="panel-heading">
          <h3 className="panel-title">Add Task</h3>
          <i className="fa fa-close fr-10" onClick={this.props.onCloseForm}></i>
        </div>
        <div className="panel-body">
          <form onSubmit={this.sendTask} method="POST">
            <div className="form-group">
              <label>Name: </label>
              <input type="text" name="name" onChange={this.onChangeValue} className="form-control" name="name" placeholder="Input field" />
            </div>
            <div className="form-group">
              <label>Status: </label>
              <select value={this.state.status} name="status" onChange={this.onChangeValue} className="form-control" required="required">
                <option value="">Select status..</option>
                <option value="active">Active</option>
                <option value="close">Close</option>
              </select>
            </div>
            <button type="submit" className="btn btn-info"><i className="fa fa-plus"></i>  Save</button>
            <button type="submit" className="btn btn-warning"><i className="fa fa-close"></i>  Abort</button>
          </form>
        </div>
      </div>
    );
  }
}

export default TaskForm;