import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useRecoilState } from 'recoil';
import { todolistAtom } from '../../atoms/todolistAtoms';
import { PiCheckCircleFill } from "react-icons/pi";


function ClearedTodolist() {
    const [ todolist, setTodolist ] = useRecoilState(todolistAtom);

    return (
        <div css={s.layout}>
            <div css={s.todoHeader}><h2>Done</h2></div>
            <div css={s.container}> 
                {
                    todolist.filter(todo => todo.state === 1).map(todo => 
                        <div css={s.todoBox} key={todo.todoId}>
                            <label htmlFor="chk"><PiCheckCircleFill css={s.checkIcon} /></label>
                            <input id='chk' type="checkbox" checked={true} disabled={true} />     
                            <p>{todo.content}</p>
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default ClearedTodolist;