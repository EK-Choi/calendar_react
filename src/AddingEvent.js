import React from "react";
import moment from "moment";
import styled from "styled-components";

const AddingEvent = (props) => {
  const eventname = React.createRef(null);
  const eventdate = React.createRef(null);
  console.log(eventname, eventdate);

  const writeTodo = () => {
    
    let _new_todo = {
      todo_id: 'temp_id',
      datetime: moment(eventdate.current.value).format("YYYY-MM-DD hh:mm:ss"),
      contents: eventname.current.value,
      completed: false
    }
    console.log(_new_todo);

    props.history.replace("/");
  }

  return (
    <div>
      <Contents>
        <h2>일정 추가</h2>
        <input type="text" placeholder="일정 내용을 입력해주세요" ref={eventname}/>
        <h2>날짜</h2>
        <input type="datetime-local"ref={eventdate}/>
        <Button>
          <button onClick={()=>{props.history.goBack();}}>작성취소</button>
          <button onClick={writeTodo}>일정 추가</button>
        </Button>
      </Contents>
    </div>
  );
}

// ※==================================style==================================※

const Contents = styled.div`
  margin: 0px auto;
  width: 100vw;
  padding-top: 20px;
  text-align: center;

  & h2 {
    color: gray;
  }

  & input {
    font-size: 15px;
    width: 70vw;
    text-align: center;
    border-radius: 50px;
    padding: 10px;
    border: none;
  }
`;

const Button = styled.div`
  width: 100vw;
  margin: 50px auto;
  & button {
    font-weight: bold;
    width: 80px;
    background-color: rgb(200, 200, 200);
    color: #F8F8FF;
    border: none;
    border-radius: 15px;
    padding: 5px 10px;\
    margin: 0 3px 0 3px;
    cursor: pointer;
    :hover{
      background-color: black;
    }
  }
`;

export default AddingEvent;