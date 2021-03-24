import React from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import styled from "styled-components";
import {useState} from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

const Calendar = (props) => {
  console.log(props);
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

                if(moment().format('YYYYMMDD') === days.format('YYYYMMDD')){
                  return(
                      <td key={index}>
                        <span style={{backgroundColor:"royalblue", color:"white", padding: "2px 5px", borderRadius: "15px"}}>{days.format('D')}</span>
                      </td>
                  );
                }else if(days.format('MM') !== today.format('MM')){
                  return(
                      <td key={index}>
                        <span style={{opacity:"20%"}}>{days.format('D')}</span>
                      </td>
                  );
                }else{
                  return(
                      <td key={index}  >
                        <span>{days.format('D')}</span>
                      </td>
                  );
                }
              })
            }
        </tr>);
    }
    return result;
  }

  return (
    <div>
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
      <Button>
        <button className="completed">완료된 일정 보기</button>
        <Link to="/addingevent"><button className="adding">+</button></Link>
      </Button>
    </div>
  )
};

// ※==================================style==================================※

const Head = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40vw;
  margin: 0 auto;
  height: 10vh;
  padding-top: 5px;

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
  margin: 20px;
  background-color: rgb(255, 255, 253);
  height: 82vh;
  box-shadow: 1px 1px 8px gray;

  & table{
    width: 100%;
    height: 93%;

    > tbody > tr > td {
        padding: 5px;
        vertical-align: text-top;
        > span {
          font-size: 2vh;
        }
        :first-child, :last-child{
        color: rgb(238, 123, 123);
      }
    }
  }
`;

const Weekdays = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 7%;
  min-height: 50px;
  
  & div {
    width: 100%;
    text-align: center;
    font-weight: bold;
    color: gray;

    :first-child, :last-child{
      color: rgb(238, 123, 123);
    }
  }
`;

const Button = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 5vh;
  right: 5vw;
  align-items: center;
  & .completed{
    font-size: 13px;
    background-color: rgb(200, 200, 200);
    color: #F8F8FF;
    border: none;
    padding: 5px;
    border-radius: 10px;
    box-shadow: 1px 1px 3px gray;
    margin-bottom: 10px;
    cursor: pointer;
    :hover{
      background-color: black;
    }
  }
  & .adding {
    width: 45px;
    height: 45px;
    border-radius: 45px;
    border: none;
    box-shadow: 1px 1px 3px gray;
    background-color: rgb(200, 200, 200);
    color: #F8F8FF;
    font-size: 35px;
    cursor: pointer;
    :hover{
      background-color: black;
    }
  }
`;

export default Calendar;