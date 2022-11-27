import styled from "styled-components";
const OptionFamilyContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 2%;
`;

const OptionFamily = () => {
  return (
    <>
      <OptionFamilyContainer>
        <span>부양가족수</span>
        <div>
          <input type="number"></input>
          <span>명</span>
        </div>
      </OptionFamilyContainer>
    </>
  );
};

export default OptionFamily;
