import styled from "styled-components";

export const Container = styled.div<{
  $isOpen: boolean;
  $toggleDel: boolean;
}>`
  background-color: ${(props) => props.theme.backgroundColors.titleBar};
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  padding-right: 1rem;
  font-family: "Roboto", sans-serif;
  pointer-events: ${(props) =>
    props.$isOpen || props.$toggleDel ? "none" : "auto"};
  & div {
    display: flex;
    align-items: center;
  }
  & h4 {
    border-right: 1px solid rgba(255, 255, 255, 0.274);
    letter-spacing: 5px;
    font-weight: bold;
    margin: 0 1rem;
    padding: 0.5rem 2rem 0.5rem 1rem;
  }
  @media (max-width: 576px) {
    & h4 {
      display: none;
    }
  }
`;
export const Menu = styled.div`
  transition-duration: 0.5s;
  background-color: rgba(255, 255, 255, 0.108);
  cursor: pointer;
  position: relative;

  & svg {
    margin: 1rem 0.5rem;
  }
  &:hover,
  &:active {
    background-color: ${(props) => props.theme.backgroundColors.lightBrickRed};
  }
`;
export const FileName = styled.div`
  display: flex;
  align-items: center;
  width: 10rem;
  transition-duration: 0.5s;
  & svg {
    margin: 0 0.5rem 0 1rem;
  }
  & span {
    font-size: 15px;
    color: rgb(124, 129, 139);
  }
  & input {
    color: white;
    width: 15rem;
    margin: 0;
    padding: 0;
    border: none;
    background-color: transparent;
    font-size: 16px;
  }

  & input:hover,
  & input:active {
    border-bottom: 1px solid white;
  }

  & input:focus {
    outline: none;
  }
  @media (max-width: 576px) {
    & span {
      display: none;
    }
    & input {
      width: 100%;
    }
  }
`;
export const DelBtn = styled.div<{ $positive?: boolean; $isLoading: boolean }>`
  cursor: pointer;
  transition-duration: 0.5s;
  color: rgb(124, 129, 139);
  pointer-events: ${(props) =>
    (!props.$positive || props.$isLoading) && "none"};

  &:hover {
    color: ${(props) => props.theme.backgroundColors.lightBrickRed};
  }
`;
export const SaveBtn = styled.button<{
  $positive: boolean;
  $isLoading: boolean;
}>`
  display: flex;
  align-items: center;
  border: none;
  color: white;
  border-radius: 3px;
  background-color: ${(props) =>
    props.$positive
      ? props.theme.backgroundColors.brickRed
      : "rgba(255, 255, 255, 0.165)"};
  transition-duration: 0.5s;
  padding: 0.5rem 0.5rem;
  margin-left: 1rem;
  //font-weight: 500;
  overflow-wrap: nowrap;
  cursor: pointer;
  pointer-events: ${(props) =>
    (!props.$positive || props.$isLoading) && "none"};

  & span {
    font-size: 16px;
    font-weight: 600;
  }

  &:hover,
  &:active {
    background-color: ${(props) => props.theme.backgroundColors.lightBrickRed};
  }

  & svg {
    margin-right: 0.5rem;
  }

  @media (max-width: 576px) {
    & svg {
      margin: 0;
    }
    & span {
      display: none;
    }
  }
`;
