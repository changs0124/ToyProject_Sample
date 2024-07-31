import { atom } from "recoil";

export const userAtom = atom({
    key: "user",
    default: {
        userId: 0,
        userName: ""
    }
});

export const loginStateAtom = atom({
    key: "loginState",
    default: false
});


