import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super()
    this.state = {
      todos: [],
      inputan: '',
      updatean:'',
      select: 0
    }
  }
  hapusTodo = (i) => {
    let filter = this.state.todos.filter((data,index) => index!==i)
    this.setState({
      todos: filter
    })
  }
  inputHandler = (event) => {
    this.setState({
      inputan: event.target.value
    })
    console.log(event.target.value)
  }
  buttonInput = () => {
    if(this.state.inputan === ''){
      alert('Diisi dlu woy')
    }else{
      const newTodos = [...this.state.todos,{label: this.state.inputan}]
      this.setState({
        todos:newTodos,
        inputan: ''
      })
    }
  }
  componentDidMount(){
    this.getDataFromAPI()
  }
  getDataFromAPI = () =>{
    let dataDariAPI = [
      { label: 'irpan' },
      { label: 'kejer anjing' },
      { label: 'kejer joni' }
    ]
    this.setState({
      todos:dataDariAPI
    })
  }
  

  selectFunction = (event) => {
    let todoSelection = Number(event.target.value)
    this.setState({
      select: todoSelection
    })
  }
  inputUpdateTodo = (event) => {
    console.log(event.target.value)
    this.setState({
      updatean: event.target.value
    })
  }
  UpdateTodo = () => {
    
    if(this.state.updatean===''){
      alert('Mau diupdate apa ?')
    }else{
      let newTodos = this.state.todos
      newTodos[this.state.select].label = this.state.updatean
      console.log(newTodos)
      this.setState({
        todos: newTodos,
        updatean: ''
      })
    }
  }
  render() {
    return (
      <div>
        {this.state.todos.map((a,i) => (
          <div key={i}>
            <p>{a.label}</p>
            <button onClick={() => this.hapusTodo(i)}>Hapus</button>
          </div>
        ))}
        <input type="text" value={this.state.inputan} onChange={(event) => this.inputHandler(event)} placeholder="Input"/>
        <button onClick={() => this.buttonInput()}>Tambah Todo</button>
          <br />
        <select onChange={(event) => this.selectFunction(event)}>
          {this.state.todos.map((data,i)=>
            <option key={i} value={i}>todos ke - {i}</option>
          )}
        </select>
        <input type="text" value={this.state.updatean} onChange={(event) => this.inputUpdateTodo(event)} placeholder="Update"/>
        <button onClick={() => this.UpdateTodo()}>Edit</button>
      </div>
    );
  }
}

export default App;
