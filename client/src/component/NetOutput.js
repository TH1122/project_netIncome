import styled from "styled-components";

// css 가안 - 수정필요
const NetOutputContainer = styled.div`
  display: flex;
  flex-direction: column;

  > .OutputDataWrapper {
    display: flex;
    height: 30px;
    border: solid pink;
  }
  > .OutputDataWrapper > .OutputData {
    border: solid yellow;
    width: 15px;
    height: 15px;
    padding: 2px;
    margin: 2px;
  }
`;

const NetOutput = ({ output }) => {
  return (
    <>
      <NetOutputContainer>
        <div className="OutputDataWrapper">
          {output &&
            output.map((el, idx) => {
              return <div className="OutputData">{idx + 1}</div>;
            })}
        </div>
      </NetOutputContainer>
    </>
  );
};

export default NetOutput;
