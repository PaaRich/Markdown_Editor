import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  /* width: 50%; */
  transition-duration: 0.5s;
  //border-right: 2px solid rgba(0, 0, 0, 0.266);
`;
export const MarkPreContainer = styled.div`
  display: flex;
`;
export const Home = styled.div<{
  $isOpen: boolean;
  $toggleDel: boolean;
  $isLoading: boolean;
}>`
  transition-duration: 0.5s;
  opacity: ${(props) =>
    props.$isOpen || props.$toggleDel || props.$isLoading ? "0.8" : "1"};
  pointer-events: ${(props) =>
    props.$isOpen || props.$toggleDel || props.$isLoading ? "none" : "auto"};
`;
const LoaderAnim = keyframes` 
0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;
export const Loader = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  //external styles
  --d: 22px;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  color: #686d6c;
  box-shadow: calc(1 * var(--d)) calc(0 * var(--d)) 0 0,
    calc(0.707 * var(--d)) calc(0.707 * var(--d)) 0 1px,
    calc(0 * var(--d)) calc(1 * var(--d)) 0 2px,
    calc(-0.707 * var(--d)) calc(0.707 * var(--d)) 0 3px,
    calc(-1 * var(--d)) calc(0 * var(--d)) 0 4px,
    calc(-0.707 * var(--d)) calc(-0.707 * var(--d)) 0 5px,
    calc(0 * var(--d)) calc(-1 * var(--d)) 0 6px;
  animation: ${LoaderAnim} 1s infinite steps(8);
`;
const SuccessAnim = keyframes`
  0%{
    left:0;
  }
  33%{
    left: 55%;
  }
  66%{
    left: 45%;
  }
  100%{
    left: 50%;
  }
`;
export const FeedbackContainer = styled.div`
  position: absolute;
  top: 1%;
  left: 50%;
  transform: translate(-50%, 1%);
  width: 250px;
  height: 40px;
  background-color: #f5f5f5a6;
  border-radius: 5px;
  display: flex;
  border: none;
  animation: ${SuccessAnim} 1s ease-out forwards;

  & > div {
    margin: 0 auto;
    display: flex;
    align-items: center;
  }
  & > div > p {
    padding-left: 0.7rem;
  }
  &::before {
    content: " ";
    background-color: green;
    height: inherit;
    width: 10px;
    position: absolute;
    left: 0;
    border-bottom-left-radius: 5px;
    border-top-left-radius: 5px;
  }
`;
