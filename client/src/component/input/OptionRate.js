import styled from "styled-components";
const OptionRateContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 2%;
`;

const OptionRate = () => {
  return (
    <>
      <OptionRateContainer>
        <span>원천세율</span>
        <div>
          <button>80%</button>
          <button>100%</button>
          <button>120%</button>
        </div>
      </OptionRateContainer>
    </>
  );
};

export default OptionRate;
