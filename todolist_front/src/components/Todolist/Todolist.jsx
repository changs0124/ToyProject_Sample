import React, { useEffect, useRef, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useRecoilState } from 'recoil';
import { todoIdAtom, todoParamsAtom, todolistAtom } from '../../atoms/todolistAtoms';
import { deleteTodo, todolistApi, updateTodoState } from '../../apis/todoApi';
import UpdateModal from '../UpdateModal/UpdateModal';
import { PiCircle, PiCheckCircleFill } from "react-icons/pi";

function Todolist() {
    const [ todolist, setTodolist ] = useRecoilState(todolistAtom);
    const [ todoId, setTodoId ] = useRecoilState(todoIdAtom);
    const [ todoParams, setTodoParams ] = useRecoilState(todoParamsAtom);
    const [ checkedBox, setCheckedBox ] = useState(0);
    const [ updateModal, setUpdateModal ] = useState(false);
    const openUpdateModal = () => {
        setUpdateModal(true);
    }

    const closeModal = () => {
        setUpdateModal(false);
        setCheckedBox(0);
    }

    const getTodolist = async () => {
        const response = await todolistApi(todoParams);
        if(response.status === 200) {
            setTodolist(response.data);
        } else {
            setTodolist([]);
        }
    }

    const handleCheckBoxChange = (e) => {
        if (e.target.checked) {  
            setCheckedBox(e.target.value);
        } else {
            setCheckedBox(0);
        }
        setTodoId(e.target.checked ? e.target.value : 0);
    }
 
    const handleDeleteClick = async () => {
        if(window.confirm("Delete?")) {
            try {
                const response = await deleteTodo(todoId);
                console.log(response.data);
            } catch(e) {
                console.error(e);
            }
            getTodolist();
            alert("Success Delete");
        } 
    }

    const handleChangeStateClick = async () => {
        if(window.confirm("Change State?")) {
            try {
                const response = await updateTodoState(todoId);
                console.log(response.data);
            } catch(e) {
                console.error(e);
            }
            getTodolist();
            alert("Success Change State");
        } 
    }

    return (
        <div css={s.layout}>
            <UpdateModal updateModal={updateModal} closeModal={closeModal}/>
            <div css={s.todoHeader}><h2>To Do</h2></div>
            <div css={s.container}>
                {
                    todolist.filter(todo => todo.state === 0).map(todo => 
                        <div css={s.todoBox} key={todo.todoId}>
                            <div css={s.ipBox}>
                                <label htmlFor={todo.todoId} >
                                    {
                                        parseInt(checkedBox) === todo.todoId ? <PiCheckCircleFill css={s.checkIcon} /> : <PiCircle css={s.checkIcon}/>
                                    }
                                </label>
                                <input id={todo.todoId} type="checkbox" onChange={handleCheckBoxChange} checked={parseInt(checkedBox) === todo.todoId} value={todo.todoId}/>
                                <p>{todo.content}</p>
                            </div>
                            {
                                todo.todoId === parseInt(checkedBox) ? 
                                <div css={s.buttonBox}>
                                    <button css={s.button} onClick={openUpdateModal}>Update</button>
                                    <button css={s.button} onClick={handleDeleteClick}>Delete</button>
                                    <button css={s.button} onClick={handleChangeStateClick}>ChangeState</button>
                                </div> : <div></div>
                            }
                        </div>
                    )
                }
            </div>
        </div>
       
    );
}

export default Todolist;