import styled from "styled-components";

export const Container = styled.div<{ $toggleBg: boolean; $toggle: boolean }>`
  width: 50%;
  transition-duration: 0.5s;
  border-right: 2px solid rgba(0, 0, 0, 0.266);

  textarea {
    resize: none;
    width: 100%;
    height: 100dvh;
    outline: none;
    border: none;
    padding: 1rem 1.2rem;
    transition-duration: 0.5s;
    overflow-y: auto;
    -ms-overflow-style: none;
    font-family: "Roboto Mono", sans-serif;
    font-size: 14px;
    line-height: 24px;
    background-color: ${(props) =>
      props.$toggleBg
        ? props.theme.backgroundColors.markdown_preview
        : props.theme.backgroundColors.lightBg};
    color: ${(props) => (props.$toggleBg ? "#C1C4CB" : "#35393F")};
  }
  textarea::-webkit-scrollbar {
    display: none;
  }
  @media (max-width: 576px) {
    & {
      position: absolute;
      transition-duration: 0.8s;
      opacity: ${(props) => (props.$toggle ? "0" : "1")};
      width: 100%;
      left: 0;
      border-right: 0px;
    }
  }
`;
export const Header = styled.div<{ $toggleBg: boolean; $toggle: boolean }>`
  //position: sticky;
  display: flex;
  justify-content: space-between;
  align-items: center;
  letter-spacing: 3px;
  font-weight: 500;
  transition-duration: 0.5s;
  background-color: ${(props) =>
    props.$toggleBg
      ? props.theme.backgroundColors.header
      : props.theme.backgroundColors.dimBg};
  color: ${(props) => (props.$toggleBg ? "#C1C4CB" : "#7C8187")};
  padding: 1rem;

  & svg {
    display: none;
  }
  &:nth-child(2) {
    padding: 0;
    margin: 0;
    transition-duration: 0.5s;
    cursor: pointer;
  }
  &:nth-child(2):hover,
  &:nth-child(2):active {
    color: red;
  }
  @media (max-width: 576px) {
    & svg {
      display: block;
    }
  }
`;
