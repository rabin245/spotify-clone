import { atom } from "recoil";

export const loggedInUserAtom = atom({
  key: "loggedInUser",
  default: null,
});
