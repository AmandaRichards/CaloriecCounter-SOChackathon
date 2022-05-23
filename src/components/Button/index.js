import styled from "styled-components"
function Button({ handleClick, index }) {
  return <StyledButton onClick={() => handleClick(index)}>+</StyledButton>;
}

export default Button;

const StyledButton = styled.button`
background-color: #f4a261;
justify-content: center;
flex: 50%;
box-sizing: border-box;
margin: 3vh`