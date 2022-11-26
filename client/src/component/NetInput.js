import styled from "styled-components";

// css 가안 - 수정필요
const NetInputContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 200px;
  border: solid red 2px;
`;

const NetInput = ({ setOutput }) => {
  return (
    <>
      <NetInputContainer></NetInputContainer>
    </>
  );
};

export default NetInput;
