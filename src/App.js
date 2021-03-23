import React from "react";
import Calendar from "./Calendar";
import styled from "styled-components";
import { GrAdd } from "react-icons/gr";

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={

    };
  }

  render(){
    return (
      <AppStyle>
        <Calendar/>
        <Button><button><GrAdd size="20"/></button></Button>
      </AppStyle>
    );
  }
}

const AppStyle = styled.div`
  background-color: rgb(234, 244, 250);
  height: 100vh;
  /* overflow: hidden; */
`;

const Button = styled.div`
  position: absolute;
  bottom: 5vh;
  right: 5vw;
  & button {
    width: 45px;
    height: 45px;
    border-radius: 45px;
    border: none;
    box-shadow: 1px 1px 3px gray;
    cursor: pointer;
    :hover{

    }
  }
`;

export default App;
