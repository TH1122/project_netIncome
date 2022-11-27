import styled from "styled-components";
const OptionYearContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 2%;
`;

const OptionYear = () => {
  return (
    <>
      <OptionYearContainer>
        <span>기준연도</span>
        <div>
          <button>2022년</button>
          <button>2023년</button>
        </div>
      </OptionYearContainer>
    </>
  );
};

export default OptionYear;
