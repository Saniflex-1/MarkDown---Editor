import styled, { css } from "styled-components";
import { parseMarkdown } from "../utils/helper";
import ContentBar from "../ui/ContentBar";
import useGetScreen from "../hooks/useGetScreen";
import PreviewScreenIcons from "../ui/PreviewScreenIcons";
import { useDarkModeContext } from "../Context/DarkModeContext";

const fullScreenStyles = css`
  width: 100%;
  display: flex;
`;

const EditorSection = styled.div`
  width: 50%;
  height: calc(100vh - 60px); /* Adjust height based on navbar height */
`;

