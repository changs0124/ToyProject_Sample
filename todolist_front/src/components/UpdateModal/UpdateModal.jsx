/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useEffect, useState } from 'react';
import ReactModal from 'react-modal';
import { useRecoilState } from 'recoil';
import { todoIdAtom, todoParamsAtom, todolistAtom } from '../../atoms/todolistAtoms';
import { todolistApi, updateTodoContent } from '../../apis/todoApi';

function UpdateModal({ updateModal, closeModal }) {
    const [ todoId, setTodoId ] = useRecoilState(todoIdAtom);
    const [ todoParams, setTodoParams ] = useRecoilState(todoParamsAtom);
    const [ todolist, setTodolist ] = useRecoilState(todolistAtom);
    const [ updateTodo, setUpdateTodo ] = useState({
        todoId: 0,
        content: "",
        registerDate: todoParams.registerDate
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
                [e.target.name]: e.target.value,
                todoId: todoId
            }
        })
    }

    const handleUpdateSubmitClick = async () => {
        if(updateTodo.includes(" ")) {
            alert("includes");
            return;
        }
        if(updateTodo.trim() === "") {
            alert("trim");
            return;
        }
        const response = await updateTodoContent(updateTodo);
        if(response.status === 200) {
            alert("수정 완료");
        }else {
            alert("수정 실패");
        }
        getTodolist();
        closeModal();
    }

    useEffect(() => {
        setUpdateTodo({
            content: "",
            registerDate: todoParams.registerDate
        })
    }, [updateModal])

    return (
        <ReactModal
            style={{
                content: {
                    boxSizing: 'border-box',
                    transform: 'translate(-50%, -50%)',
                    top: '50%',
                    left: '50%',
                    border: '2px solid #7A90E2',
                    borderRadius: '10px',
                    padding: '20px',
                    width: '500px',
                    height: '500px',
                    backgroundColor: '#fafafa',
                }
            }}
            isOpen={updateModal}
            onRequestClose={closeModal}
        >
            <div css={s.modalBox}>
                <h2>UPDATE-TO-DO</h2>
                <div css={s.ipMonthBox}>
                    <input type="month" name='registerDate' onChange={handleInputOnChange} value={updateTodo.registerDate}/>
                </div>
                <div css={s.ipTexthBox}>
                    <input type="text" name='content' onChange={handleInputOnChange} value={updateTodo.content} placeholder='Update Content' autoFocus/>
                </div>
                <div css={s.buttonBox}>
                    <button onClick={handleUpdateSubmitClick}>Update</button>
                    <button onClick={closeModal}>Cancel</button>
                </div>
            </div>        
        </ReactModal>
    );
}

export default UpdateModal;