import { css } from "@emotion/react";

export const container = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  width: 500px;
  height: 750px;
  background-color: #fafafa;
  border-radius: 5px;

  .input-box {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    width: 100%;
    height: 40px;

  }

  .input-box > input {
    font-family: "GangwonEduSaeeum_OTFMediumA";
    font-size: 20px;
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
    font-family: "GangwonEduSaeeum_OTFMediumA";
    font-size: 20px;
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

    &::-webkit-scrollbar {
      display: none;
    }
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

    label::after {
      content: "🙈";
      font-size: 28px;
      cursor: pointer;
    }
    input {
      display: none;
    }
    input:checked+label::after {
      content: "🙉";
    }
    
  }

  .info > p {
    display: inline-block;
    margin: 0;
    margin-left: 10px;
    margin-top: 5px;
  }


  .info > input[type="checkbox"] {
    height: 20px;
    width: 20px;
    margin-right: 5px;
    cursor: pointer;
  }

  .buttons > button {
    box-sizing: border-box;
    border: none;
    text-decoration: underline;
    background-color: transparent;
    color: #818181;
    border-radius: 3px;
    margin-right: 10px;
    cursor: pointer;
    font-family: "GangwonEduSaeeum_OTFMediumA";
    font-size: 16px;

    &:hover {
      font-weight: 600;
    }

    &:active {
      color: #2be15e;
      font-weight: 700;
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

  .todo-content {
    word-break: break-all;
  }
`;

export const modal = css`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  padding: 20px;
  width: 400px;
  height: 300px;
  border-top: 30px solid #dbffca;
  box-shadow: 0px 5px 5px #dbdbdb;
  background-color: #fdfaf4;
  background: linear-gradient(to bottom, transparent 30px, #00ff802e 5px) 0 0 /
      100vw 20px repeat-y,
    linear-gradient(to right, transparent 30px, #00ff802e 5px) 0 0 / 20px 100vh
      repeat-x white;
`;

export const modfiy = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    font-weight: 400;
    margin-top: 0;
  }

  input {
    padding: 20px;
    width: 250px;
    height: 100px;
    background-color: transparent;
    border: 1px solid #dbdbdb;
    outline: none;
    border-radius: 5px;
    cursor: text;
  }
`;

export const button = css`
  display: flex;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  width: 200px;

  button {
    font-family: "GangwonEduSaeeum_OTFMediumA";
    font-size: 24px;
    margin-top: 15px;
    width: 70px;
    height: 30px;
    background-color: transparent;
    border-radius: 5px;
    border: none;
    &:hover {
      box-shadow: 5px 5px 3px lightgrey;
    }
  }

`;
