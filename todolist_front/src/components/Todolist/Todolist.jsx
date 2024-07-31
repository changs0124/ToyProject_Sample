import React, { useEffect, useRef, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useRecoilState } from 'recoil';
import { todoIdAtom, todoParamsAtom, todolistAtom } from '../../atoms/todolistAtoms';
import { deleteTodo, todolistApi, updateTodoState } from '../../apis/todoApi';
import UpdateModal from '../UpdateModal/UpdateModal';

function Todolist() {
    const checkBoxRef = useRef();
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

    const handleClcikOutside = (e) => {
        const currentRef = checkBoxRef.current;
        if(currentRef && !currentRef.contains(e.target)) {
            setCheckedBox(e.target.checked ? e.target.value : 0);
        }
    }

    const handleCheckBoxChange = (e) => {
        setCheckedBox(e.target.checked ? e.target.value : 0);
        setTodoId(e.target.checked ? e.target.value : 0);
    }
 
    const handleDeleteClick = async () => {
        if(window.confirm("삭제하시겠습니까?")) {
            try {
                const response = await deleteTodo(todoId);
                console.log(response.data);
            } catch(e) {
                console.error(e);
            }
            getTodolist();
            alert("삭제 완료");
        } 
    }

    const handleChangeStateClick = async () => {
        if(window.confirm("완료 하시겠습까?")) {
            try {
                const response = await updateTodoState(todoId);
                console.log(response.data);
            } catch(e) {
                console.error(e);
            }
            getTodolist();
            alert("완료");
        } 
    }

    useEffect(() => {
        document.addEventListener('click', handleClcikOutside)
        return () => {
            document.removeEventListener('click', handleClcikOutside)
        }
    }, [checkBoxRef.current])
    return (
        <>
            <UpdateModal updateModal={updateModal} closeModal={closeModal} />
            <div css={s.container}>
                {
                    todolist.filter(todo => todo.state === 0).map(todo => 
                        <div css={s.listBox} key={todo.todoId}>
                            <div css={s.ipBox}>
                                <input type="checkbox" onChange={handleCheckBoxChange} checked={todo.todoId === parseInt(checkedBox)} css={s.checkbox} value={todo.todoId} ref={checkBoxRef}/>
                                <p>{todo.content}</p>
                            </div>
                            {
                                todo.todoId === parseInt(checkedBox) ? 
                                <div css={s.buttonBox}>
                                    <button css={s.button} onClick={openUpdateModal}>수정</button>
                                    <button css={s.button} onClick={handleDeleteClick}>삭제</button>
                                    <button css={s.button} onClick={handleChangeStateClick}>확인</button>
                                </div> : <div></div>
                            }
                        </div>
                    )
                }
            </div>
        </>
       
    );
}

export default Todolist;