import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { loginStateAtom, userIdAtom } from '../atoms/userAtoms';
import { sessionApi } from '../apis/userApi';
import { todoParamsAtom, todolistAtom } from '../atoms/todolistAtoms';
import { todolistApi } from '../apis/todoApi';

function LoginHook() {
    const [ loginState, setLoginState ] = useRecoilState(loginStateAtom);
    const [ userId, setUserId ] = useRecoilState(userIdAtom);
    const [ todoParams, setTodoParams ] = useRecoilState(todoParamsAtom);
    const [ todolist, setTodolist ] = useRecoilState(todolistAtom);

    const loginCheck = async () => {
        const response = await sessionApi();
        if(response.status === 200) {
            setUserId(response.data);
        }else {
            setUserId(0);
        }
    }

    const getTodolist = async () => {
        const response = await todolistApi(todoParams);
        if(response.status === 200) {
            setTodolist(response.data);
        } else {
            setTodolist([]);
        }
    }

    useEffect(() => {
        if(todoParams.userId != 0) {
            getTodolist();
        }
    }, [todoParams])

    useEffect(() => {
        if(userId != 0) {
            setTodoParams(todoParams => {
                return {
                    ...todoParams,
                    userId: userId
                }
            })
        }
    }, [userId])

    useEffect(() => {
        if(loginState) {
            loginCheck();
        }
        setLoginState(false);
    }, [loginState]);

}

export default LoginHook;