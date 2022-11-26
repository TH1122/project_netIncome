import styled from "styled-components";

// css 가안 - 수정필요
const MenuBarContainer = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  border: solid black;
`;

const MenuBar = () => {
  return (
    <>
      <MenuBarContainer>
        <span>HR_Calculator</span>
      </MenuBarContainer>
    </>
  );
};

export default MenuBar;
