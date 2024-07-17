import styled from "styled-components";

const BlockParagraph = styled.p<{ type?: string; $isDark?: boolean }>`
  eight: ${({ type }) => (type === "bordered" ? 700 : 300)};
`;
export default BlockParagraph;
