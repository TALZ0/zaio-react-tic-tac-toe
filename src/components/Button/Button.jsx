import { StyledButton } from './Button.styled';

const Button = ({ children, variant = 'primary', onClick, disabled }) => {
  return (
    <StyledButton $variant={variant} onClick={onClick} disabled={disabled}>
      {children}
    </StyledButton>
  );
};

export default Button;
