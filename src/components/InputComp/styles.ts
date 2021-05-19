import styled from "styled-components";

export const Wrapper = styled.div`
  height: 50px;
  width: 80%;
  border-radius: 12px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;

  input {
    background-color: none;
    border: none;
    margin-left: 12px;
    flex: 1;

    &:focus {
      outline: none;
    }
  }

  button {
    margin-right: 8px;
    background-color: rgb(214, 213, 213);
    border: none;
    border-radius: 10px;
    height: 30px;
    width: 50px;
  }
`;
