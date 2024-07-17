import styled from "styled-components";

const ContentBar = styled.div<{ $isDark?: boolean }>`
  width: 100%;
  height: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  
`;
export default ContentBar;
