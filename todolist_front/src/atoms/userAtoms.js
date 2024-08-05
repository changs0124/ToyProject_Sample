import { atom } from "recoil";

export const userIdAtom = atom({
    key: "userId",
    default: 0
});

export const loginStateAtom = atom({
    key: "loginState",
    default: true
});


