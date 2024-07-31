import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { loginStateAtom, userAtom } from '../atoms/userAtoms';
import { sessionApi } from '../apis/userApi';
import { todoParamsAtom, todolistAtom } from '../atoms/todolistAtoms';
import { todolistApi } from '../apis/todoApi';

function LoginHook() {
    const [ loginState, setLoginState ] = useRecoilState(loginStateAtom);
    const [ user, setUser ] = useRecoilState(userAtom);
    const [ todoParams, setTodoParams ] = useRecoilState(todoParamsAtom);
    const [ todolist, setTodolist ] = useRecoilState(todolistAtom);

    const loginCheck = async () => {
        const response = await sessionApi();
        if(response.status === 200) {
            setUser(response.data);
        }else {
            setUser(null);
        }
    }

    useEffect(() => {
        const getTodolist = async () => {
            const response = await todolistApi(todoParams);
            if(response.status === 200) {
                setTodolist(response.data);
            } else {
                setTodolist([]);
            }
        }
        getTodolist();
    }, [todoParams])

    useEffect(() => {
        setTodoParams(todoParams => {
            return {
                ...todoParams,
                userId: user.userId
            }
        })
    }, [user])

    useEffect(() => {
        loginCheck();
        console.log(user);

    }, [loginState]);

}

export default LoginHook;