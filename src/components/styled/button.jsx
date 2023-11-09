import StyledButton from "../../styles/button";

const Button = (props) => {
  const { onclick, text, disabled, size, title } = props;
  return (
    <StyledButton
      onClick={onclick}
      disabled={disabled}
      size={size}
      title={title}
    >
      {text}
    </StyledButton>
  );
};

export default Button;
