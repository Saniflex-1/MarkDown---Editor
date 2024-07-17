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

const PreviewSection = styled(EditorSection).withConfig({
  shouldForwardProp: (prop) => prop !== "isfullscreen",
})<{ isfullscreen: boolean; $isDark?: boolean }>`
  align-items: center;
  flex-direction: column;

  /* state styles */
  /*border color change  */
  border-left: 1px solid
    ${({ $isDark }) =>
      $isDark ? "var(--color-grey-0)" : "var(--color-grey-300)"};

  /* style change based on whether the preview is fullscreen */
  ${({ isfullscreen }) => (isfullscreen ? fullScreenStyles : "")}
  /* background color change */
  background-color: ${({ $isDark }) =>
    $isDark ? "var(--color-dark-0)" : "var(--color-white-0)"};
`;

const PreviewWrapper = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "isfullscreen",
})<{ isfullscreen: boolean; $isDark: boolean }>`
  display: flex;
  background-color: ${({ $isDark }) =>
    $isDark ? "var(--color-white-d-0)" : "var(--color-white-0)"};
  flex-direction: column;
  overflow-y: auto;
  align-items: center;
  width: ${({ isfullscreen }) => (isfullscreen ? "50%" : "100%")};
  height: 100%;
  padding-bottom: 20px;
  @media screen and (max-width: 1000px) {
    width: 100%;
  }
`;

const StyledPreview = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`;

interface PreviewProps {
  input: string;
  fullPreview: boolean;
  setFullPreview: (parameter: boolean) => void;
}
export default function Preview({
  input,
  fullPreview,
  setFullPreview,
}: PreviewProps) {
  const { isMobile } = useGetScreen();
  const { isDarkMode } = useDarkModeContext();
  return isMobile && !fullPreview ? (
    ""
  ) : (
    <PreviewSection $isDark={isDarkMode} isfullscreen={fullPreview}>
      <ContentBar $isDark={isDarkMode}>
        <span>preview</span>
        <PreviewScreenIcons state={fullPreview} setState={setFullPreview} />
      </ContentBar>
      <PreviewWrapper $isDark={isDarkMode} isfullscreen={fullPreview}>
        <StyledPreview>{parseMarkdown(input, isDarkMode)}</StyledPreview>
      </PreviewWrapper>
    </PreviewSection>
  );
}
