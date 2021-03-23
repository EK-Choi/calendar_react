import React from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import styled from "styled-components";

const Calendar = (props) => {
  return (
    <AppStyle>
      <Head>
        <button><FiChevronLeft/></button>
        <h2>March 2021</h2>
        <button><FiChevronRight/></button>
      </Head>
      <div className="body">
        <div>MON</div>
        <div>TUE</div>
        <div>WED</div>
        <div>THU</div>
        <div>FRI</div>
        <div>SAT</div>
        <div>SUN</div>
      </div>

      </AppStyle>
  )
};

const AppStyle = styled.div`
  background-color: rgb(234, 244, 250);
`;

const Head = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40vw;
  margin: 0 auto;

  & h2 {
    margin:20px 40px;
    color: gray;
    text-align: center;
  }

  & button {
    background-color: white;
    border: none;
    width: 30px;
    height: 30px;
    border-radius: 30px;
    padding-top: 4px;
    color: gray;
    :hover{
      background-color: rgb(200, 200, 200);
      color: white;
    }
  }
`;

export default Calendar;