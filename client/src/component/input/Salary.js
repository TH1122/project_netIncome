import styled from "styled-components";
const SalaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 2%;
`;

const Salary = () => {
  return (
    <>
      <SalaryContainer>
        <span>금액</span>
        <div>
          <input type="number"></input>
          <span>원</span>
        </div>
      </SalaryContainer>
    </>
  );
};

export default Salary;
