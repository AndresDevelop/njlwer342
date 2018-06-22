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

  HandleKey(e) {
    if (e.key === "Enter") {
      e.preventDefault();
      this.setState({
        newTask: " "
      })
      this.setState({
        task: this.state.task.concat(this.state.newTask)
      });
    }
  }

  render() {
    return (
      <div className="wrapper">
        <div className="list">
          <h3>Por hacer:</h3>
          <ul className="todo">
            {this.state.task.map((tasks, index) => (
              <li key={index}>{tasks}</li>
            ))}
          </ul>
          <form>
            <input
              type="text"
              id="new-task"
              value={this.state.newTask}
              placeholder="Ingresa una tarea y oprime Enter"
              onChange={this.HandleInput}
              onKeyPress={this.HandleKey}
            />
          </form>
        </div>
      </div>
    );
  }
}

export default App;
