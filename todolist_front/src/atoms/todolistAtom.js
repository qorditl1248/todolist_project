import { atom } from "recoil";

export const selectMonthAtom = atom({
  key: "selectMonth",
  default: new Date().toISOString().slice(0, 7)
})

export const todoListAtom = atom({
  key: "todolist",
  default: []
})

export const modalAtom = atom({
  key: "isModalOpen",
  default: false
})