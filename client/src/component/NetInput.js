import styled from "styled-components";
import MonthYear from "./input/MonthYear";
import NonProfit from "./input/NonProfit";
import OptionChild from "./input/OptionChild";
import OptionFamily from "./input/OptionFamily";
import OptionYear from "./input/OptionYear";
import OptionRate from "./input/OptionRate";
import Salary from "./input/Salary";
import YearPerMonth from "./input/YearPerMonth";

// css 가안 - 수정필요
const NetInputContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  border: solid red 2px;
`;

const NetInputWrapper = styled.div`
  display: flex;
  width: 100%;
  border: solid green;
`;

const NetInput = ({ setOutput }) => {
  return (
    <>
      <NetInputContainer>
        <NetInputWrapper>
          <MonthYear></MonthYear>
          <Salary></Salary>
        </NetInputWrapper>
        <NetInputWrapper>
          <YearPerMonth></YearPerMonth>
          <NonProfit></NonProfit>
        </NetInputWrapper>
        <NetInputWrapper>
          <OptionYear></OptionYear>
          <OptionRate></OptionRate>
        </NetInputWrapper>
        <NetInputWrapper>
          <OptionFamily></OptionFamily>
          <OptionChild></OptionChild>
        </NetInputWrapper>
      </NetInputContainer>
    </>
  );
};

export default NetInput;
