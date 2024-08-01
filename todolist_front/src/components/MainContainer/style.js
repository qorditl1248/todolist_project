import { css } from "@emotion/react";

export const layout = css`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const container = css`
  display: flex;
  box-sizing: border-box;
  margin: 0px auto;
  border-radius: 3px;

p {
  position: absolute;
  right: 30px;
}

input {
  cursor: pointer;
}

`;