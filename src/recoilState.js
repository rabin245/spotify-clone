import { atom } from "recoil";

export const loggedInUserAtom = atom({
  key: "loggedInUser",
  default: JSON.parse(sessionStorage.getItem("loggedInUser")) || null,
});
