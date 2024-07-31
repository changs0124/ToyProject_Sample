import React, { useEffect, useState } from 'react';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useRecoilState } from 'recoil';
import { todoParamsAtom, todolistAtom } from '../../atoms/todolistAtoms';
import { userAtom } from '../../atoms/userAtoms';
import { todolistApi } from '../../apis/todoApi';

function SelectDate() {
    const [ user, setUser ] = useRecoilState(userAtom);
    const [ todolist, setTodolist ] = useRecoilState(todolistAtom);
    const [ params, setParams ] = useRecoilState(todoParamsAtom);


    const getTodolist = async () => {
        const response = await todolistApi(params);
        if(response.status === 200) {
            setTodolist(response.data);
        } else {
            setTodolist([]);
        }
    }
    const handleInputOnChange = (e) => {
        setParams(params => {
            return {
                ...params,
                [e.target.name]: e.target.value,
                userId: user.userId
            }
        })
        getTodolist();
    }

    const handleaddArrowOnClick = () => {
        
        // const registerDate = nowYearAndMonth.year + "-" + (nowYearAndMonth.month >= 10 ? nowYearAndMonth.month : "0" + nowYearAndMonth.month);

        setParams( params => {
            const date = new Date(params.registerDate);
            date.setMonth(date.getMonth() + 1);
            const newdate = date.getFullYear() + "-" + ((date.getMonth() + 1) >= 10 ? (date.getMonth() + 1) : "0" + (date.getMonth() + 1));
            // console.log(newDate)
            return {
                ...params,
                registerDate: newdate
            }
        })
    }

    const handleArrowOnClick = () => {
        
        // const registerDate = nowYearAndMonth.year + "-" + (nowYearAndMonth.month >= 10 ? nowYearAndMonth.month : "0" + nowYearAndMonth.month);

        setParams( params => {
            const date = new Date(params.registerDate);
            date.setMonth(date.getMonth() - 1);
            const newdate = date.getFullYear() + "-" + ((date.getMonth() + 1) >= 10 ? (date.getMonth() + 1) : "0" + (date.getMonth() + 1));
            // console.log(newDate)
            return {
                ...params,
                registerDate: newdate
            }
        })
    }

    return (
        <>
            <div css={s.layout}>
                <FaArrowAltCircleLeft css={s.arrow} onClick={handleArrowOnClick} />
                    <input type="month" name='registerDate' onChange={handleInputOnChange} css={s.dateinput} value={params.registerDate} />
                <FaArrowAltCircleRight css={s.arrow} onClick={handleaddArrowOnClick} />
            </div>
        </>
    );
}

export default SelectDate;