import styled from "styled-components";

const BlockParagraph = styled.p<{ type?: string; $isDark?: boolean }>`
  padding: var(--line-height);
  min-height: fit-content;
  border-radius: 5px;
  word-wrap: break-word;

  
`;
export default BlockParagraph;
