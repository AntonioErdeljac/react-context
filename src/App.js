import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const MyContext = React.createContext();

class MyProvider extends React.Component {
  state = {
    name: 'Antonio',
    surname: 'Erdeljac',
    age: 17,
  }
  render() {
    return (
      <MyContext.Provider
        value={{
          ...this.state,
          incrementAge: () => {
            this.setState({
              age: this.state.age + 1,
            });
          },
        }}>
        {this.props.children}
      </MyContext.Provider>
    )
  }
}

const Family = (props) => (
  <div>
    <Person />
  </div>
)

class Person extends Component {
  render() {
    return (
      <div>
        <MyContext.Consumer>
          {(context) => (
            <React.Fragment>
            <p>I am {context.name}, {context.age} years old</p>
            <button onClick={context.incrementAge} >Increase age by 1</button>
            </React.Fragment>
          )}
        </MyContext.Consumer>
      </div>
    )
  }
}

class App extends Component {

  render() {
    return (
      <MyProvider>
        <div>
          <p>
            I am an app
          </p>
          <Family />
        </div>
      </MyProvider>
    );
  }
}

export default App;
