import styled from "styled-components";

export const Container = styled.div<{ $isOpen?: boolean }>`
  width: 240px;
  z-index: 999;
  position: fixed;
  top: 0;
  //background-color: rgb(43, 45, 49);
  background-color: ${(props) => props.theme.backgroundColors.nav};
  height: 100vh;
  color: white;
  text-align: left;
  transition-duration: 0.5s;
  left: ${(props) => (props.$isOpen ? "0" : "-100%")};
  opacity: ${(props) => (props.$isOpen ? "1" : "0")};
  & .header {
    padding: 1rem 0;
  }
  & .header p {
    letter-spacing: 2px;
  }
  & .phone_header {
    display: none;
  }

  p {
    font-size: 14px;
    // color: rgba(255, 255, 255, 0.591);
    color: "#C1C4CB";
    padding: 0.5rem 0;
    margin: 0;
  }

  & > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0 auto;
    max-width: 85%;
    height: 100%;
  }
  & > div div:nth-child(2) p:first-of-type {
    color: rgba(255, 255, 255, 0.591);
  }
  @media (max-width: 576px) {
    & .header {
      padding-top: 0;
    }
    & .phone_header {
      display: block;
      letter-spacing: 5px;
      font-size: 15px;
      font-weight: 700;
      padding: 1.5rem 0 0.5rem 0;
    }
  }
`;
export const Button = styled.button`
  border: none;
  //width: 90%;
  width: 202px;
  height: 40px;
  transition-duration: 0.5s;
  border-radius: 3px;
  padding: 0.5rem 1rem;
  color: white;
  font-size: 15px;
  background-color: ${(props) => props.theme.backgroundColors.brickRed};
  cursor: pointer;

  & > span {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  & > span svg {
    margin-right: 2px;
  }
  &:focus {
    outline: none;
  }
  &:hover,
  &:active {
    background-color: ${(props) => props.theme.backgroundColors.lightBrickRed};
  }
`;
export const ItemStyled = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.5rem;
  padding: 1rem;
  border-radius: 2px;
  transition-duration: 0.5s;
  width: 100%;
  cursor: pointer;

  div {
    margin-left: 8px;
  }
  p {
    margin: 0;
    padding: 0;
  }
  &:hover,
  &:active {
    background-color: rgba(255, 255, 255, 0.109);
  }
  p:nth-of-type(2) {
    color: white;
    font-size: 15px;
  }
  &:hover p:nth-child(2) {
    color: rgb(243, 151, 101);
  }
`;
export const ItemList = styled.div`
  height: 70dvh;
  width: 95%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  overflow-y: scroll;
  overflow-x: hidden;
  -ms-overflow-style: none;
  //border-bottom: 1px solid wheat;

  &::-webkit-scrollbar {
    display: none;
  }
`;
export const NotFound = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: inherit;
  // margin: 50% auto 0 auto;

  h2 {
    font-size: 45px;
    font-weight: normal;
  }
`;
export const BackgroundToggle = styled.div<{ $toggleBg: boolean }>`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;

  & > div {
    position: relative;
    border-radius: 50px;
    padding: 6px;
    height: 16px;
    width: 28px;
    margin: 0 8px;
    background-color: rgba(255, 255, 255, 0.434);
    cursor: pointer;
  }
  & > div > div {
    position: absolute;
    top: 50%;
    left: ${(props) => (props.$toggleBg ? "20%" : "60%")};
    transform: ${(props) =>
      props.$toggleBg ? "translate(-20%, -50%)" : "translate(-70%, -50%)"};
    background-color: white;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    right: 13%;
    transform: translate(-13%, -50%);
    background-color: #ffffffc1;
  }
  & svg:first-of-type {
    color: ${(props) => (props.$toggleBg ? "white" : "#ffffff67")};
  }
  & svg:nth-of-type(2) {
    color: ${(props) => (props.$toggleBg ? "#ffffff67" : "white")};
  }
`;
export const CloseBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  right: -18.5%;
  width: 45px;
  height: 58px;
  transition: 0.5s;
  cursor: pointer;
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
  background-color: ${(props) => props.theme.backgroundColors.nav};

  &:hover {
    opacity: 0.7;
  }
`;
