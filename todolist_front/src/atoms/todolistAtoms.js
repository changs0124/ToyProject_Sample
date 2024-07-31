import { atom } from "recoil";
// const [ nowYearAndMonth, setNowYearAndMonth ] = useRecoilState(nowYearAndMonthAtom);

export const todolistAtom = atom({
    key: "todolist",
    default: []
})

export const todoIdAtom = atom({
    key: "todoId",
    default: 0
})

const nowYearAndMonth = {    
    year: new Date().getFullYear(),
    month: (new Date().getMonth() + 1)
}

const registerDate = nowYearAndMonth.year + "-" + (nowYearAndMonth.month >= 10 ? nowYearAndMonth.month : "0" + nowYearAndMonth.month) ;

export const todoParamsAtom = atom({
    key: "todoParams",
    default: {
        userId: 0,
        registerDate: registerDate
    }
})
