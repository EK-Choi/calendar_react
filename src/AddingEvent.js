import React from "react";
import styled from "styled-components";

const AddingEvent = (props) => {
  const EventName = React.createRef();
  const EventDate = React.createRef();
  console.log(EventName, EventDate);
  return (
    <div>
      <h2>일정내용</h2>
      <input type="text" placeholder="일정 내용을 입력해" ref={EventName}/>
      <h2>일시</h2>
      <input type="text" placeholder="yyyy-mm-dd" ref={EventDate}/>
      <button onClick={()=>{props.history.goBack();}}>작성취소</button>
      <button>작성완료</button>
    </div>
  );
}

export default AddingEvent;