import React from "react";
import Calendar from "./Calendar";
import AddingEvent from "./AddingEvent";
import styled from "styled-components";
import { withRouter} from "react-router";
import { Route } from "react-router-dom";

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      "2021-03-01": [
        {
          todo_id: 11,
          datetime: "2021-03-01 10:10:00",
          contents: "산책가기1",
          completed: false,
        },
        {
          todo_id: 155555,
          datetime: "2021-03-01 10:15:00",
          contents: "산책가기2",
          completed: true,
        },
      ],
      "2021-03-21": [
        {
          todo_id: 8,
          datetime: "2021-03-21 10:00:00",
          contents: "산책가기3",
          completed: false,
        },
        {
          todo_id: 4,
          datetime: "2021-03-21 10:10:00",
          contents: "산책가기4",
          completed: false,
        },
      ],
    };
  }

  componentDidMount(){
    console.log(this.props);
  }
  
  render(){
    return (
      <AppStyle>
        <Route path="/" exact render={()=><Calendar list={this.state}/>}/>    
        <Route path="/addingevent" component={AddingEvent}/>
      </AppStyle>
    );
  }
}

// ※==================================style==================================※

const AppStyle = styled.div`
  background-color: rgb(234, 244, 250);
  height: 100vh;
`;

export default withRouter(App);