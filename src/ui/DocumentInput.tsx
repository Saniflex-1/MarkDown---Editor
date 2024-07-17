import styled, { css } from "styled-components";
import Icon from "./Icon";
import { ChangeEvent } from "react";
import useGetScreen from "../hooks/useGetScreen";

const listStyles = css`
  cursor: pointer;
`;

const StyledContainer = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "islist",
})<{ islist?: boolean }>`
  ${({ islist }) => (islist ? listStyles : "")}
  display: flex;
  align-items: center;
  gap: 1rem;
  border-left: ${({ islist }) =>
    islist ? "transparent" : "solid var(--color-grey-0) 1.5px"};
  padding-left: ${({ islist }) => (islist ? "0" : "10px")};
  transition: color 300ms;
  &:hover .documentName {
    color: var(--color-orange-0);
  }
  @media screen and (max-width: 700px) {
    border-left: transparent;
    padding-left: 0;
    gap: ${({ islist }) => (islist ? "1rem" : "0.5rem")};
  }
`;
const StyledInputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledName = styled.span`
  border: transparent;
  background-color: transparent;
  font-size: var(--font-size-medium);
  color: var(--color-white-100);
  padding: 5px 0px;
  outline: none;
  min-width: 15rem;
  transition: border-bottom 0.2s ease;
`;

const StyledInput = styled.input<{ $ismobile?: boolean }>`
  border: transparent;
  background-color: transparent;
  font-size: var(--font-size-medium);
  color: var(--color-white-100);
  padding: 5px 0px;
  outline: none;
  width: ${({ $ismobile }) => ($ismobile ? "10rem" : "15rem")};
  transition: border-bottom 0.2s ease;
  &::placeholder {
    font-size: var(--font-size-medium);
    color: var(--color-white-100);
  }
  &:hover,
  &:focus {
    border-bottom: solid var(--color-white-0) 1.5px;
  }
`;

