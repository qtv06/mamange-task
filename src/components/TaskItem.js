import React, {Component} from 'react';

class TaskItem extends Component {
  onUpdateStatus(id) {
    this.props.updateStatus(id);
  }
  render() {
    var { task, index } = this.props;
    return(
      <tr>
        <td className="task-id">{task.id}</td>
        <td>{index + 1}</td>
        <td>{task.name}</td>
        <td className="text-center">
          <span 
            className={task.status === "active" ? "label label-success" : "label label-danger"}
            onClick={() => this.onUpdateStatus(task.id)}
          >
            {task.status === "active" ? "Active" : "Close"}
          </span>
        </td>
        <td className="text-center">
          <button type="button" className="btn btn-info">
          <span className="glyphicon glyphicon-edit mr-5" aria-hidden="true"></span>
            </button>
          <button type="button" className="btn btn-danger">
          <span className="glyphicon glyphicon-trash" aria-hidden="true"></span>
            </button>
        </td>
      </tr>
    );
  }
}

export default TaskItem;