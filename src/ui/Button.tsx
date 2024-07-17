import styled, { css } from "styled-components";

interface ButtonProps {
  large?: boolean;
  $ismobile?: boolean;
}

const largeButton = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;



export default Button;
