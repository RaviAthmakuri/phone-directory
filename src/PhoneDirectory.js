import React, { Component } from 'react';
import AddSubscriber from './AddSubscriber';
import ShowSubscribers from './ShowSubscribers';
import {BrowserRouter as Router,Route} from 'react-router-dom';

class PhoneDirectory extends Component {
    constructor() {
        super();
        this.state={
            subscriberList:[{
                id:1,
                name:'Ravi Atmakuri',
                phone:'111111111'
            },{
                id:2,
                name:'Surabhi',
                phone:'00000000',
            }]
        }
        // this.addSubscriberHandler = this.addSubscriberHandler.bind(this);

    }

    addSubscriberHandler=(newSubscriber) => {
        let subscriberList = this.state.subscriberList;
        if(subscriberList.length > 0){
            newSubscriber.id = subscriberList[subscriberList.length-1].id + 1 ;

        }else{
            newSubscriber.id=1;
        }
    
        subscriberList.push(newSubscriber);
        this.setState(this.state.subscriberList);
        // console.log(this.state.subscriberList);
    }

    deleteSubscriberHandler=(subscriberId)=>{
        let subscriberList = this.state.subscriberList;
        let subscriberIndex = 0;
        subscriberList.forEach(function(subscriber,index) {
                if(subscriber.id == subscriberId){
                    subscriberIndex = index;
                }
        },this);

        // let newSubscribers = subscriberList;
        subscriberList.splice(subscriberIndex,1);
        this.setState(this.state);
    }
    render() {
        return (
            // <AddSubscriber addSubscriberHandler={this.addSubscriberHandler}></AddSubscriber>
            // <ShowSubscribers subscriberList={this.state.subscriberList}></ShowSubscribers>
            <Router>
                <Route exact path ='/' render={(props) => <ShowSubscribers {...props} subscriberList={this.state.subscriberList} deleteSubscriberHandler={this.deleteSubscriberHandler} />}></Route>
                <Route exact path ='/add' render={({history},props) => <AddSubscriber history={history} {...props} addSubscriberHandler={this.addSubscriberHandler} />}></Route>
            </Router>
        )
    }
}

export default PhoneDirectory;