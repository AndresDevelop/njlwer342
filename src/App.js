import React, { Component } from "react";

/// Modifica el componente para que se puedan agregar tareas

class App extends Component {
  state = {
    task: ["Sacar la ropa", "Hacer la cama", "Leer un rato"],
    newTask: []
  };

  HandleInput = this.HandleInput.bind(this);
  HandleKey = this.HandleKey.bind(this);

  HandleInput(e) {
    this.setState({
      newTask: e.target.value
    });
  }

  HandleKey(ev) {
    ev.preventDefault();
    this.setState({
      task: this.state.task.concat(this.state.newTask),
      newTask: ""
    });
  }

  render() {
    return (
      <div className="wrapper">
        <div className="list">
          <h3>Por hacer:</h3>
          <h2>Cosas</h2>
          <ul className="todo">
            {this.state.task.map((tasks, index) => (
              <li key={index}>{tasks}</li>
            ))}
          </ul>
          <form onSubmit={this.HandleKey}>
            <input
              type="text"
              id="new-task"
              value={this.state.newTask}
              placeholder="Ingresa una tarea y Globant"
              onChange={this.HandleInput}
            />
          </form>
        </div>
      </div>
    );
  }
}

export default App;
