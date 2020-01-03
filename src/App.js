import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super()
    this.state = {
      schedules: [
        {
          title: 'Schedule 1',
          todos: [
            { label: 'todo 1' },
            { label: 'todo 2' },
            { label: 'todo 3' },
            { label: 'todo 4' },
          ]
        },
        {
          title: 'Schedule 2',
          todos: [
            { label: 'todo 1' },
            { label: 'todo 2' },
          ]
        },
        {
          title: 'Schedule 3',
          todos: [
            { label: 'todo 1' },
            { label: 'todo 2' },
            { label: 'todo 3' },
            { label: 'todo 4' },
            { label: 'todo 5' },
          ]
        }
      ],
      schedulesInput:['','',''],
      input: '',
      inputanKanan: ''
    }
  }

  inputHandler = (event,scheduleIndex) =>{
    let {schedulesInput} = this.state
    schedulesInput[scheduleIndex] = event.target.value
    this.setState({
      schedulesInput
    })
    console.log(schedulesInput)
  }

  buttonInputTodo = (scheduleIndex) =>{
    const {schedulesInput} = this.state
    if(schedulesInput[scheduleIndex] === ''){
      alert('Form should not be empty')
    }else{
      // let filter = this.state.schedules.filter((data,i) => i!==scheduleIndex)
      //let newTodos = this.state.schedules[scheduleIndex].todos = [...this.state.schedules[scheduleIndex].todos,{label: this.state.input}]
      const newTodos = [this.state.schedules[scheduleIndex].todos.push({label: schedulesInput[scheduleIndex]})]
      schedulesInput[scheduleIndex] = ''
      this.setState({
        schedule:newTodos,
        schedulesInput
      })
    }
  }

  deleteTodo = (scheduleIndex,todoIndex) => {
    console.log(scheduleIndex,todoIndex)
    let {schedules} = this.state
    let todosFilter = schedules[scheduleIndex].todos.filter((todo,i)=> i !== todoIndex)
    schedules[scheduleIndex].todos = todosFilter
    console.log(schedules)
    this.setState({
      schedules
    })
  }

  inputHandlerKanan = (event) => {
    this.setState({
      inputanKanan: event.target.value
    })
    console.log(event.target.value)
  }

  buttonInputKanan = () =>{
    if(this.state.inputanKanan === ''){
      alert('Form should not be empty')
    }else{
      const newSchedule = this.state.schedules.push({title: this.state.inputanKanan,todos:[]})
      const {schedulesInput} = this.state
      schedulesInput.push('')
      this.setState({
        schedule: newSchedule,
        inputanKanan: '',
        schedulesInput
      })
      console.log(newSchedule)
    }
  }

  render() {
    return (
      <div style={styles.container}>
        {this.state.schedules.map((schedule, scheduleIndex) =>
          <div key={scheduleIndex} style={styles.box}>
            <span>{schedule.title}</span>
            <ul>
              {schedule.todos.length > 0 ?
              schedule.todos.map((todo, todoIndex) =>
                <div key={todoIndex}>
                  <li>{todo.label}</li>
                  <button onClick={() => this.deleteTodo(scheduleIndex,todoIndex)}>delete</button>
                </div>
              )
              :
              'No Data'
              }
            </ul>
            <input type="text" placeholder="Add New Todo" style={styles.inputPadding} key={scheduleIndex} value={this.state.schedulesInput[scheduleIndex]} onChange={(event) => { this.inputHandler(event,scheduleIndex) }} />
            <button style={styles.inputPadding} onClick={() => this.buttonInputTodo(scheduleIndex)}>+Add</button>
          </div>
        )}
        <div style={styles.box}>
          <input type="text" placeholder="Add New Schedule" style={styles.inputPadding} value={this.state.inputanKanan} onChange={(event) => {this.inputHandlerKanan(event)}}/>
          <button style={styles.inputPadding} onClick={() => this.buttonInputKanan()}>+Add</button>
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    overflow: 'auto',
    whiteSpace: 'nowrap',
    verticalAlign: 'top',
    padding: '15px',
  },
  box: {
    boxShadow: 'rgba(0, 0, 0, 0.15) 0px 0.5rem 1rem',
    whiteSpace: 'normal',
    display: 'inline-block',
    margin: '15px',
    padding: '15px',
    borderRadius: '15px',
  },
  inputPadding: {
    padding: '10px'
  }
}

export default App;
