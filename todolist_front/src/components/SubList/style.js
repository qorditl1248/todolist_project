import { css } from "@emotion/react";

export const container = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  width: 500px;
  height: 750px;
  background-color: #fafafa;

    .icon {
      position: relative;
      display: flex;
      margin-bottom: 10px;
      box-sizing: border-box;
      width: 500px;
      height: 40px;
      border-radius: 3px;
      background-color: #9cf07a;
    }

    .move {
      position: absolute;
      border-radius: 3px;
      top: 0;
      left: 0;
      width: 50%;
      height: 100%;
      background-color: #cff0c2;
      transition: 200ms ease-in-out;
    }

    .right {
      left: 50%;
    }

    .status {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50%;
      height: 100%;
      border-radius: 3px;
      z-index: 10;
      background-color: transparent;
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

    .info > input [type=checkbox] {
      height: 20px;
      width: 20px;
      margin-right: 5px;
    }

    .card > p {
      display: flex;
      justify-content: center;
      font-size: 20px;
    }

  `;

  
