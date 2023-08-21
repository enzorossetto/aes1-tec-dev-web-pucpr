import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      displayMessage: false,
      isValidCredentials: false,
    };

    this.changeEmail = this.changeEmail.bind(this);
    this.changePassword = this.changePassword.bind(this);
    this.validateCredentials = this.validateCredentials.bind(this);
  }

  changeEmail(event) {
    const state = this.state;
    state.email = event.target.value;
    this.setState(state);
  }

  changePassword(event) {
    const state = this.state;
    state.password = event.target.value;
    this.setState(state);
  }

  validateCredentials() {
    const state = this.state;
    const { email, password } = state;
    state.displayMessage = true;
    state.isValidCredentials =
      email === 'eduardo.lino@pucpr.br' && password === '123456';
    this.setState(state);
  }

  render() {
    return (
      <div className='App'>
        <div className='wrapper'>
          <h3>Login</h3>
          <input
            type='text'
            name='login'
            placeholder='e-mail'
            onChange={(e) => this.changeEmail(e)}
          />
          <input
            type='password'
            name='password'
            placeholder='senha'
            onChange={(e) => this.changePassword(e)}
          />
          <button
            type='button'
            id='validation-button'
            onClick={this.validateCredentials}
          >
            Acessar
          </button>

          {this.state.displayMessage ? (
            this.state.isValidCredentials ? (
              <label for='validation-button'>Acessado com sucesso!</label>
            ) : (
              <label for='validation-button'>
                Usuário ou senha incorretos!
              </label>
            )
          ) : (
            <></>
          )}
        </div>
      </div>
    );
  }
}

export default App;
