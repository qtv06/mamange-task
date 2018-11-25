import React, { Component } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import Control from './components/Control';
import ListTask from './components/ListTask';
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      tasks: [],
      isDisplayForm : false
    };
  }
  componentWillMount(){
    if(localStorage && localStorage.getItem('tasks')){
      this.setState({
        tasks: JSON.parse(localStorage.getItem('tasks'))
      });
    }
  }
  generateTask = () => {
    var tasks = [
      {
        id: this.generateId(),
        name: 'Go Home',
        status: "active"
      },
      {
        id: this.generateId(),
        name: 'Learn React',
        status: "active"
      },
      {
        id: this.generateId(),
        name: 'Sleep',
        status: "close  "
      }
    ];
    this.setState({
      tasks: tasks
    });
    this.storageTask(tasks);
  }
  storageTask(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
  s4() {
    return (((1 + Math.random()) * 0x10000)|0).toString(16).substring(1);
  }

  generateId() {
    return this.s4() + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + this.s4();
  }

  addTask = (task) => {
    var {tasks} = this.state;
    var id = this.generateId();
    task.id = id;
    tasks.push(task);
    this.setState({
      tasks: tasks
    });
    this.storageTask(tasks);
  }

  changeViewForm = () => {
    var value = !this.state.isDisplayForm
    this.changeDisplayForm(value);
  }

  changeDisplayForm = (value) => {
    this.setState({
      isDisplayForm : value
    });
  }

  onCloseForm = () => {
    this.changeDisplayForm(false);
  }

  changeStatus = (id, tasks) => {
    let newTasks = tasks.map((item) => {
      if(item.id === id){
        switch(item.status) {
          case "active":
            item.status = "close";
            break;
          default:
            item.status = "active";
            break; 
        }
      }
      return item;
    });
    return newTasks;
  }

  onUpdate = (itemId) => {
    var {tasks} = this.state;
    var newTasks = this.changeStatus(itemId, tasks);
    this.setState({
      tasks: newTasks
    });
    this.storageTask(newTasks);
  }

  render() {
    var {tasks, isDisplayForm} = this.state;
    var taskForm = isDisplayForm ? <TaskForm onCloseForm={this.onCloseForm} getValue={this.addTask}></TaskForm> : '';
    return (
      <div className="main">
        <div className="row">
          <h1 className="text-center">Task Manager</h1>
          <hr/>
          <div className={ isDisplayForm ? "col-xs-4 col-sm-4 col-md-4 col-lg-4" : ''}>
            <div className="right-content">
              {taskForm}
            </div>
          </div>
          <div className={isDisplayForm ? "col-xs-8 col-sm-8 col-md-8 col-lg-8" : "col-xs-12 col-sm-12 col-md-12 col-lg-12"}>
            <div className="left-content">
              <button type="button" onClick={this.changeViewForm} className="btn btn-primary mb-15"><i className="fa fa-plus-circle"></i> Add Task</button>
              <button type="button" className="btn btn-primary mb-15"
                onClick={this.generateTask}  
              >
                <i className="fa fa-plus-circle"></i> Generate Task
              </button>
              <br/>
              <Control></Control>
              <ListTask tasks={tasks} onUpdate={this.onUpdate}></ListTask>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
