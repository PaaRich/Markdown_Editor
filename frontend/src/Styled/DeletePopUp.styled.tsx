import styled, { keyframes } from "styled-components";

const DelBtnDrop = keyframes`
  0% {
    top: 0;
    opacity: 0;
  }
  33% {
    top: 60%;
    opacity: 0.8;
  }
  66% {
    top: 45%;
    opacity: 0.9;
  }
  100% {
    top: 50%;
    opacity: 1;
  }
`;

export const Container = styled.div<{
  $toggleBg: boolean;
  $toggleDel: boolean;
}>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 3px;
  display: ${(props) => (props.$toggleDel ? "block" : "none")};
  z-index: 1000;
  opacity: 0.5;
  background-color: ${(props) =>
    props.$toggleBg
      ? props.theme.backgroundColors.nav
      : props.theme.backgroundColors.lightBg};
  //color: ${(props) => (props.$toggleBg ? "white" : "black")};

  font-size: small;
  width: 300px;
  box-shadow: 3px 5px 15px #0000004f;
  transition-duration: 0.5s;
  animation: ${DelBtnDrop} 2s ease-out forwards;

  & p:first-of-type {
    font-weight: 700;
    font-size: 1rem;
    margin-bottom: 1rem;
    font-family: "Roboto Slab", sans-serif;
    color: ${(props) => (props.$toggleBg ? "white" : "black")};
  }
  & p:nth-of-type(2) {
    margin-bottom: 1rem;
    line-height: 21px;
    font-family: "Roboto Slab", sans-serif;
    color: ${(props) => (props.$toggleBg ? "#C1C4CB" : "#35393F")};
  }
  & p:nth-of-type(2) span {
    color: ${(props) => (props.$toggleBg ? "white" : "black")};
    font-weight: 700;
  }
  & > div {
    padding: 1.5rem;
  }
  & button {
    border: none;
    border-radius: 3px;
    background-color: ${(props) => props.theme.backgroundColors.brickRed};
    transition-duration: 0.5s;
    width: 100%;
    padding: 0.5rem 0;
    cursor: pointer;
    color: white;
  }
  & button:hover,
  & button:active {
    background-color: ${(props) => props.theme.backgroundColors.lightBrickRed};
  }
  & button:focus {
    outline: none;
  }
`;
export const CloseBtn = styled.div<{ $toggleBg: boolean }>`
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  color: ${(props) => (props.$toggleBg ? "#ffffff86" : "#0000007d")};
  transition-duration: 0.3s;

  &:hover {
    color: white;
    background-color: ${(props) => props.theme.backgroundColors.brickRed};
  }
`;
