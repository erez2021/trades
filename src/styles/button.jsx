import styled from "styled-components";

const StyledButton = styled.button`
  padding: 5px 2px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  width: ${(props) => (props.size === "small" ? "40px" : "100px")};
  margin: ${(props) =>
    props.size === "small" ? "20px 20px 20px 0px" : "20px"};
  cursor: ${(props) => (props.disabled ? "text" : "pointer")};
  &:hover {
    opacity: 0.8;
  }
`;

export default StyledButton;
