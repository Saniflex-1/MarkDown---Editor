import styled from "styled-components";
import Icon from "./Icon";
import DocumentInput from "./DocumentInput";
import Button from "./Button";
import { ChangeEvent } from "react";
import useGetScreen from "../hooks/useGetScreen";
import { RiDeleteBinLine } from "react-icons/ri";
// navbar
const StyledNavbar = styled.nav.withConfig({
  shouldForwardProp: (prop) => prop !== "shifted",
})<{ shifted: boolean }>`
  background-color: var(--color-dark-200);
  display: flex;
  padding-right: 10px;
  justify-content: space-between;
  align-items: center;
  transition: margin-left 0.3s ease;
  width: 100vw;
  margin-left: ${({ shifted }) => (shifted ? "250px" : "0")};
`;

// image tag for the icons
const OpenCloseIcon = styled.img<{ open?: boolean }>`
  width: ${({ open }) => (open ? "30px" : "25px")};
  &:hover {
    background-color: var(--color-orange-0);
  }
  @media screen and (max-width: 700px) {
    width: ${({ open }) => (open ? "25px" : "20px")};
  }
`;

