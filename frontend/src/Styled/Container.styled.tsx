import styled from "styled-components";

export const Container = styled.div`
  /* width: 50%; */
  transition-duration: 0.5s;
  //border-right: 2px solid rgba(0, 0, 0, 0.266);
`;
export const MarkPreContainer = styled.div`
  display: flex;
`;
export const Home = styled.div<{ $isOpen: boolean; $toggleDel: boolean }>`
  transition-duration: 0.5s;
  opacity: ${(props) => (props.$isOpen || props.$toggleDel ? "0.8" : "1")};
  pointer-events: ${(props) =>
    props.$isOpen || props.$toggleDel ? "none" : "auto"};
`;
