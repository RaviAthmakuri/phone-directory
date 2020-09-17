import React, { Component } from 'react';
import AddSubscriber from './AddSubscriber';
import ShowSubscribers from './ShowSubscribers';

class PhoneDirectory extends Component {
    constructor() {
        super();
        this.state={
            subscriberList:[{
                id:1,
                name:'Ravi Atmakuri',
                Phone:'111111111'
            },{
                id:2,
                name:'Surabhi',
                Phone:'00000000',
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
        console.log(this.state.subscriberList);
    }
    render() {
        return (
            // <AddSubscriber addSubscriberHandler={this.addSubscriberHandler}></AddSubscriber>
            <ShowSubscribers subscriberList={this.state.subscriberList}></ShowSubscribers>
        )
    }
}

export default PhoneDirectory;