import React from "react";
import Calendar from "./Calendar";
import AddingEvent from "./AddingEvent";
import styled from "styled-components";
import { GrAdd } from "react-icons/gr";
import {Switch, withRouter} from "react-router";
import { Route, Link, } from "react-router-dom";

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      list: ["react project", "algorithm", "meeting"]
    };
  }

  componentDidMount(){
    console.log(this.props);
  }
  
  render(){
    return (
      <AppStyle>
        <Route path="/" exact render={()=><Calendar list={this.state.list}/>}/>    
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