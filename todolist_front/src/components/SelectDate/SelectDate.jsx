/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useRecoilState } from 'recoil';
import { todoParamsAtom, todolistAtom } from '../../atoms/todolistAtoms';
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import { userIdAtom } from '../../atoms/userAtoms';
import { todolistApi } from '../../apis/todoApi';
import { useRef } from "react";

function SelectDate() {
    const [ userId, setUserId ] = useRecoilState(userIdAtom);
    const [ todolist, setTodolist ] = useRecoilState(todolistAtom);
    const [ todoParams, setTodoParams ] = useRecoilState(todoParamsAtom);
    const dateRef = useRef();

    const getTodolist = async () => {
        const response = await todolistApi(todoParams);
        if(response.status === 200) {
            setTodolist(response.data);
        } else {
            setTodolist([]);
        }
    }
    const handleInputOnChange = (e) => {
        setTodoParams(params => {
            return {
                ...params,
                [e.target.name]: e.target.value,
                userId: todoParams.userId
            }
        })
        getTodolist();
    }

    const handleaddArrowOnClick = () => {
        
        // const registerDate = nowYearAndMonth.year + "-" + (nowYearAndMonth.month >= 10 ? nowYearAndMonth.month : "0" + nowYearAndMonth.month);

        setTodoParams( todoParams => {
            const date = new Date(todoParams.registerDate);
            date.setMonth(date.getMonth() + 1);
            const newdate = date.getFullYear() + "-" + ((date.getMonth() + 1) >= 10 ? (date.getMonth() + 1) : "0" + (date.getMonth() + 1));
            // console.log(newDate)
            return {
                ...todoParams,
                registerDate: newdate
            }
        })
    }

    const handleArrowOnClick = () => {
        
        // const registerDate = nowYearAndMonth.year + "-" + (nowYearAndMonth.month >= 10 ? nowYearAndMonth.month : "0" + nowYearAndMonth.month);

        setTodoParams( todoParams => {
            const date = new Date(todoParams.registerDate);
            date.setMonth(date.getMonth() - 1);
            const newdate = date.getFullYear() + "-" + ((date.getMonth() + 1) >= 10 ? (date.getMonth() + 1) : "0" + (date.getMonth() + 1));
            // console.log(newDate)
            return {
                ...todoParams,
                registerDate: newdate
            }
        })
    }

    return (
        <>
            {
                userId ?
                    <div css={s.layout}>
                        <MdArrowBackIosNew css={s.arrow} onClick={handleArrowOnClick} />
                        <div css={s.monthContainer}>
                            <input type="month" id="date" name='registerDate' onChange={handleInputOnChange} value={todoParams.registerDate} ref={dateRef}/>
                        </div>
                        <MdArrowForwardIos css={s.arrow} onClick={handleaddArrowOnClick} />
                    </div> : <div></div>
            }
            
        </>
    );
}

export default SelectDate;