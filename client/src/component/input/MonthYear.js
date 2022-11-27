import styled from "styled-components";
const MonthYearContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 2%;
`;

const MonthYear = () => {
  return (
    <>
      <MonthYearContainer>
        <span>기준금액 설정</span>
        <div>
          <button>월급</button>
          <button>연봉</button>
        </div>
      </MonthYearContainer>
    </>
  );
};

export default MonthYear;
