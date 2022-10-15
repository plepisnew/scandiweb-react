import styled from "styled-components";

export default styled.div`
  position: absolute;
  top: 80px;
  right: 0;
  left: 0;
  width: 100vw;
  ${"" /* height: 100%; */}
  background: black;
  visibility: ${(props) => (props.active ? "visible" : "hidden")};
  opacity: ${(props) => (props.active ? 0.22 : 0)};
  transition: opacity 300ms;
`;
