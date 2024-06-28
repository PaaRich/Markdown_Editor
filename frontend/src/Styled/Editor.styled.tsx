import styled from "styled-components";
export const PreviewContainer = styled.div<{ $toggle?: boolean }>`
  width: ${(props) => (props.$toggle ? "100%" : "50%")};
  position: absolute;
  right: 0;
  transition-duration: 0.5s;

  @media (max-width: 576px) {
    & {
      width: 100%;
      left: ${(props) => (props.$toggle ? "0" : "-100%")};
    }
  }
`;
export const Container = styled.div<{ $toggle?: boolean; $toggleBg?: boolean }>`
  width: 100%;
  height: 100dvh;
  word-wrap: break-word;
  overflow: auto;
  transition-duration: 0.5s;
  overflow-y: auto;
  -ms-overflow-style: none;
  background-color: ${(props) =>
    props.$toggleBg
      ? props.theme.backgroundColors.markdown_preview
      : props.theme.backgroundColors.lightBg};
  /* scrollbar-width: none; */

  & p,
  & li {
    font-family: "Roboto Slab", sans-serif;
    font-size: 14px;
    line-height: 24px;
    color: ${(props) => (props.$toggleBg ? "#C1C4CB" : "#35393F")};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Roboto Slab", sans-serif;
    color: ${(props) => (props.$toggleBg ? "white" : "black")};
  }
  &::-webkit-scrollbar {
    display: none;
  }
  & > div {
    width: ${(props) => (props.$toggle ? "50%" : "100%")};
    margin: 0 auto;
    transition-duration: 0.5s;
    padding: 1rem 2rem;
  }
  @media (max-width: 768px) {
    & > div {
      width: 100%;
    }
  }
`;
export const Header = styled.div<{ $toggleBg: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  letter-spacing: 3px;
  transition-duration: 0.5s;
  padding: 1rem;
  color: white;
  background-color: ${(props) =>
    props.$toggleBg
      ? props.theme.backgroundColors.header
      : props.theme.backgroundColors.dimBg};
  color: ${(props) => (props.$toggleBg ? "#C1C4CB" : "#7C8187")};

  & svg {
    cursor: pointer;
    transition-duration: 0.5s;
  }
  & svg:hover {
    color: ${(props) => props.theme.backgroundColors.brickRed};
  }
`;
