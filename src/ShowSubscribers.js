import React, { Component } from 'react';
import Header from './Header';
import './ShowSubscribers.css';
import './common/common.css';





class ShowSubscribers extends Component {

  clickHandler(message){
    alert(message);
  }

  render() {
    return (
      <div className="component-body-container">
        <Header heading ="Phone Directory" />
        <button className="custom-btn add-btn"> Add </button>
        <div className="grid-container heading-container">
          <span className="grid-item name-heading"> Name </span>
          <span className="grid-item phone-heading"> Phone </span>
        </div>

        {
          this.props.subscriberList.map(sub => {
            return <div key={sub.id}  className="grid-container">
              <span className="grid-item">{sub.name}</span>
              <span className="grid-item">{sub.phone}</span>
              <button className="delete-btn" onClick={this.clickHandler.bind(this,"Delete Clicked")}>DELETE</button>
            </div>
          })
        }
      
       </div>

    );
  }
}

export default ShowSubscribers;
