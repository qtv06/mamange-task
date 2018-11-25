import React, {Component} from 'react';
import TaskItem from './TaskItem';

class ListTask extends Component {
  constructor(props){
    super(props);
  }

  onUpdateStatus = (id) => {
    this.props.onUpdate(id);
  }
  render(){
    var {tasks} = this.props;
    var taskItems = tasks.map((task, index) => {
      return <TaskItem
        key={task.id}
        index={index}
        task={task}
        updateStatus={this.onUpdateStatus}
      ></TaskItem>
    })
    return(
      <table className="table table-hover table-bordered">
        <thead>
          <tr>
            <th className="text-center">ID</th>
            <th className="text-center">STT</th>
            <th className="text-center">Name</th>
            <th className="text-center">Status</th>
            <th className="text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td>
              <input type="text" name="" className="form-control" />
            </td>
            <td>
              <select name="" className="form-control" required="required">
                <option value="">Active</option>
                <option value="">Close</option>
              </select>
            </td>
            <td></td>
          </tr>
          {taskItems}
        </tbody>
      </table>
    );
  }
}

export default ListTask;