import styled from "styled-components";
const OptionChildContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 2%;
`;

const OptionChild = () => {
  return (
    <>
      <OptionChildContainer>
        <span>20세이하 자녀수</span>
        <div>
          <input type="number"></input>
          <span>명</span>
        </div>
      </OptionChildContainer>
    </>
  );
};

export default OptionChild;
