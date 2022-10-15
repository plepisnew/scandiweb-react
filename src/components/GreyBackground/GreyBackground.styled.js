import styled from "styled-components";

export default styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  min-height: calc(100vh - 80px);
  background: black;
  visibility: ${(props) => (props.active ? "visible" : "hidden")};
  opacity: ${(props) => (props.active ? 0.22 : 0)};
  transition: opacity 300ms;
`;
