import React from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import styled from "styled-components";
import {useState} from 'react';
import moment from 'moment';

const Calendar = (props) => {
  const [getMoment, setMoment]=useState(moment());     
  const today = getMoment;

  const firstWeek = today.clone().startOf('month').week();
  const lastWeek = today.clone().endOf('month').week() === 1 ? 53 : today.clone().endOf('month').week();

  const calendarArr=()=>{

    let result = [];
    let week = firstWeek;
    for ( week; week <= lastWeek; week++) {
      result = result.concat(
        <tr key={week}>
          {
            Array(7).fill(0).map((data, index) => {
              let days = today.clone().startOf('year').week(week).startOf('week').add(index, 'day');

              return(
                  <td key={index}>
                    <span>{days.format('D')}</span>
                  </td>
              );
            })
          }
        </tr>);
    }
    return result;
  }

  return (
    <AppStyle>
      <Head>
        <button onClick={()=>{ setMoment(getMoment.clone().subtract(1, 'month')) }}><FiChevronLeft/></button>
        <h2>{today.format('MMM YYYY')}</h2>
        <button onClick={()=>{ setMoment(getMoment.clone().add(1, 'month')) }}><FiChevronRight/></button>
      </Head>
      <Body>
        <Weekdays>
          <div>SUN</div>
          <div>MON</div>
          <div>TUE</div>
          <div>WED</div>
          <div>THU</div>
          <div>FRI</div>
          <div>SAT</div>
        </Weekdays>
        
        <table>
          <tbody>
            {calendarArr()}
          </tbody>
        </table>
      </Body>

    </AppStyle>
  )
};

const AppStyle = styled.div`
  background-color: rgb(234, 244, 250);
  padding-bottom: 1px;
  height: 100vh;
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
    cursor: pointer;
    :hover{
      background-color: rgb(200, 200, 200);
      color: white;
    }
  }
`;

const Body = styled.div`
  margin: 4%;
  background-color: rgb(255, 255, 253);

  & table{
    width: 100%;
    height: 75vh;
  }
  
`;

const Weekdays = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  & div {
    width: 20%;
    text-align: center;
    font-weight: bold;
    color: gray;

    :first-child, :last-child{
      color: rgb(238, 123, 123);
    }
  }

`;

const Dates = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default Calendar;