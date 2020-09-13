import React, { Component } from 'react';
import Header from './Header';
import './App.css';

class App extends Component {

  render() {
    let subscribers = [
      {
        id:1,
        name: "Ravi Atmakuri",
        phone: "111111111"

      },
      {
        id:2,
        name: "Surabhi Atmakuri",
        phone: "111345677"

      }
    ]
    return (
      <div className="component-body-container">
        <Header />
        <button className="custom-btn add-btn"> Add </button>
        <div className="grid-container heading-container">
          <span className="grid-item name-heading"> Name </span>
          <span className="grid-item phone-heading"> Phone </span>
        </div>

        {
          subscribers.map(sub => {
            return <div key={sub.id}  className="grid-container">
              <span className="grid-item">{sub.name}</span>
              <span className="grid-item">{sub.phone}</span>
            </div>
          })
        }
      
       </div>

    );
  }
}

export default App;
