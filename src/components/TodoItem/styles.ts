import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  background-color: #fff;
  margin: 6px 4px;
  height: 40px;
  border-radius: 12px;

  > p {
    flex: 1;
  }

  .done {
    text-decoration: line-through;
  }
`;
