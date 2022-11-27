import styled from "styled-components";
const YearPerMonthContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 2%;
`;

const YearPerMonth = () => {
  return (
    <>
      <YearPerMonthContainer>
        <span>기준 개월수</span>
        <div>
          <input type="number"></input>
          <span>개월</span>
        </div>
      </YearPerMonthContainer>
    </>
  );
};

export default YearPerMonth;
