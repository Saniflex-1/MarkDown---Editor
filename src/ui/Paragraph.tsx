import styled, { css } from "styled-components";

interface ParagraphType {
  type?: "normal" | "numberPoint" | "point";
  content?: string;
  $isDark?: boolean;
}

