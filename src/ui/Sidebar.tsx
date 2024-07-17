import styled from "styled-components";
import Button from "./Button";
import DocumentInput from "./DocumentInput";
import LightDark from "./LightDark";

const StyledSidebar = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "visible",
})<{ visible: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 250px;
  height: 100%;
  background-color: var(--color-dark-100);
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 1.5rem;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  transform: ${({ visible }) =>
    visible ? "translateX(0)" : "translateX(-250px)"};
  transition: transform 0.3s ease;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 25px;
  z-index: 1000;
`;

