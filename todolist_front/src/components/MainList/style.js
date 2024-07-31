import { css } from "@emotion/react";

export const container = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    width: 500px;
    height: 750px;
    background-color: white;

    .input-box {
        display: flex;
        align-items: center;
        margin-bottom: 10px;
        width: 100%;
        height: 40px;
    }

    .input-box > input {
        box-sizing: border-box;
        margin-right: 10px;
        border: 1px solid black;
        border-radius: 3px;
        padding: 0 10px;
        width: 100%;
        height: 100%;
        cursor: pointer;
    }

    .input-box button {
        box-sizing: border-box;
        border: 1px solid black;
        border-radius: 3px;
        width: 50px;
        height: 100%;
        background-color: #fafafa;
        cursor: pointer;

        &:hover {
          background-color: #eeeeee;
        }

        &:active {
          background-color: #dbdbdb;
        }
    }

    .mini-box {
        box-sizing: border-box;
        border: 1px solid #dbdbdb;
        padding: 20px;
        width: 100%;
        height: 100%;
        overflow: auto;
    }

    .mini-box ::-webkit-scrollbar {
      display: none;
    }

    .card {
        display: flex;
        flex-direction: column;
        border: 1px solid #dbdbdb;
        padding: 10px;
        width: auto;
        height: 150px;
        margin-bottom: 10px;
    }

    .info {
        display: flex;
        position: relative;
        align-items: center;
    }

    .info > p {
        display: inline-block;
        margin: 0;
    }

    .info > input[type=checkbox] {
      height: 20px;
      width: 20px;
      margin-right: 5px;
    }

    .buttons > button {
      box-sizing: border-box;
      border: none;
      text-decoration: underline;
      background-color: white;
      color:#818181;
      border-radius: 3px;
      margin-right: 10px;
      cursor: pointer;

      &:hover {
          font-weight: 600;
        }

        &:active {
          color: #2be15e;
          font-weight: 600;
        }
    }

    .card > p {
      display: flex;
      justify-content: center;
      font-size: 20px;
    }

    .buttons {
      position: absolute;
      right: 0;
    }

`;

export const modal = css`
    display: flex;
    justify-content: center;
    position: relative;
    box-sizing: border-box;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    padding: 20px;
    width: 400px;
    height: 400px;
    background-color: aliceblue;
`;

export const modfiy = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  input {
    width: 200px;
    height: 50px;
  }
  
  button {
    width: 100px;
  }
  `;

