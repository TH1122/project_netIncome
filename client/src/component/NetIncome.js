import styled from "styled-components";
import NetInput from "./NetInput";
import NetOutput from "./NetOutput";
import { useState } from "react";

// css 가안 - 수정필요
const NetIncomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  border: solid green;
  width: 100%;
  > .title {
    font-size: 20px;
    padding: 10px;
    margin: 2px;
  }
`;

const NetIncome = () => {
  const [output, setOutput] = useState([]);
  return (
    <>
      <NetIncomeContainer>
        <span className="title">실수령액 계산기</span>
        <NetOutput output={output}></NetOutput>
        <NetInput setOutput={setOutput}></NetInput>
      </NetIncomeContainer>
    </>
  );
};

export default NetIncome;
