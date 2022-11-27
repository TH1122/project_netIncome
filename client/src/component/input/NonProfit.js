import styled from "styled-components";
const NonProfitContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 2%;
`;

const NonProfit = () => {
  return (
    <>
      <NonProfitContainer>
        <span>비과세액</span>
        <div>
          <input type="number" placeholder="100000"></input>
          <span>원</span>
        </div>
      </NonProfitContainer>
    </>
  );
};

export default NonProfit;
