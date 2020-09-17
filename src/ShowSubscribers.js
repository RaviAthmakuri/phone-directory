import React, { Component } from 'react';
import Header from './Header';
import './ShowSubscribers.css';
import './common/common.css';
import {Link} from 'react-router-dom';





class ShowSubscribers extends Component {

  clickHandler(message){
    alert(message);
  }

  render() {
    return (
      <div className="component-body-container">
        <Header heading ="Phone Directory" />
        <Link to="/add"><button className="custom-btn add-btn" > Add </button></Link>
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
