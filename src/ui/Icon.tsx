import styled from "styled-components";

interface IconProps {
  type?: string | null;
  hoverBackground?: string | null;
}

// const hoverStyle = css`
//   fill: var(--color-orange-0);
//   color: var(--color-orange-0);
// `;

const Icon = styled.img<IconProps>`
  
`;

export default Icon;
