/** @jsxImportSource @emotion/react */
import * as s from "./style";
import React, { useEffect, useState } from 'react';
import ReactModal from 'react-modal';
import { useRecoilState } from 'recoil';
import { todoIdAtom, todoParamsAtom, todolistAtom } from '../../atoms/todolistAtoms';
import { todolistApi, updateTodoContent } from '../../apis/todoApi';

function UpdateModal({ updateModal, closeModal }) {
    const nowYearAndMonth = {    
        year: new Date().getFullYear(),
        month: (new Date().getMonth() + 1)
    }
    
    const registerDate = nowYearAndMonth.year + "-" + (nowYearAndMonth.month >= 10 ? nowYearAndMonth.month : "0" + nowYearAndMonth.month) ;
    const [ todoId, setTodoId ] = useRecoilState(todoIdAtom);
    const [ todoParams, setTodoParams ] = useRecoilState(todoParamsAtom);
    const [ todolist, setTodolist ] = useRecoilState(todolistAtom);
    const [ updateTodo, setUpdateTodo ] = useState({
        todoId: 0,
        content: "",
        registerDate: registerDate
    })

    const getTodolist = async () => {
        const response = await todolistApi(todoParams);
        if(response.status === 200) {
            setTodolist(response.data);
        } else {
            setTodolist([]);
        }
    }

    const handleInputOnChange = (e) => {
        setUpdateTodo(updateTodo => {
            return {
                ...updateTodo,
                [e.target.name]: e.target.value
            }
        })
    }

    const handleUpdateSubmitClick = async () => {
        const response = await updateTodoContent(updateTodo);
        if(response.status === 200) {
            alert("수정 완료");
        }else {
            alert("수정 실패");
        }
        setUpdateTodo({
            todoId: 0,
            content: "",
            registerDate: ""
        })
        getTodolist();
        closeModal();
    }

    useEffect(() => {
        setUpdateTodo(updateTodo => {
            return {
                ...updateTodo,
                todoId: todoId
            }
        })
    }, [todoId])

    return (
        <ReactModal
            style={{
                content: {
                boxSizing: 'border-box',
                transform: 'translate(-50%, -50%)',
                top: '50%',
                left: '50%',
                width: '300px',
                height: '300px',
                backgroundColor: '#fafafa',
                }
            }}
            isOpen={updateModal}
            onRequestClose={closeModal}
        >
            <div css={s.modalBox}>
                <h2>UPDATE-TO-DO</h2>
                <input type="month" name='registerDate' onChange={handleInputOnChange} value={updateTodo.registerDate}/>
                <input type="text" name='content' onChange={handleInputOnChange} value={updateTodo.content} placeholder='수정 내용 입력'/>
                <div css={s.buttonBox}>
                    <button onClick={handleUpdateSubmitClick}>수정하기</button>
                    <button onClick={closeModal}>취소</button>
                </div>
            </div>        
        </ReactModal>
    );
}

export default UpdateModal;