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

    };
  }

  componentDidMount(){
    console.log(this.props);
  }

  render(){
    return (
      <AppStyle>
        <Route path="/" exact component={Calendar}/>
        {/* <Button><button onClick={() => {this.props.history.push('/addingevent');}}><GrAdd size="20"/></button></Button> */}
        <Route path="/addingevent" component={AddingEvent}/>
      </AppStyle>
    );
  }
}

// ※==================================style==================================※

const AppStyle = styled.div`
  background-color: rgb(234, 244, 250);
  height: 100vh;
  /* overflow: hidden; */
`;

// const Button = styled.div`
//   position: absolute;
//   bottom: 5vh;
//   right: 5vw;
//   & button {
//     width: 45px;
//     height: 45px;
//     border-radius: 45px;
//     border: none;
//     box-shadow: 1px 1px 3px gray;
//     cursor: pointer;
//     :hover{

//     }
//   }
// `;

export default withRouter(App);
