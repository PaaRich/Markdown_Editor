import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  /* width: 50%; */
  transition-duration: 0.5s;
  //border-right: 2px solid rgba(0, 0, 0, 0.266);
`;
export const MarkPreContainer = styled.section`
  display: flex;
  margin-top: 58px;
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
    props.$toggleDel || props.$isLoading ? "none" : "auto"};
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
  color: rgba(228, 102, 67, 0.664);
  box-shadow: calc(1 * var(--d)) calc(0 * var(--d)) 0 0,
    calc(0.707 * var(--d)) calc(0.707 * var(--d)) 0 1px,
    calc(0 * var(--d)) calc(1 * var(--d)) 0 2px,
    calc(-0.707 * var(--d)) calc(0.707 * var(--d)) 0 3px,
    calc(-1 * var(--d)) calc(0 * var(--d)) 0 4px,
    calc(-0.707 * var(--d)) calc(-0.707 * var(--d)) 0 5px,
    calc(0 * var(--d)) calc(-1 * var(--d)) 0 6px;
  animation: ${LoaderAnim} 1s infinite steps(8);
  z-index: 1000;
`;
