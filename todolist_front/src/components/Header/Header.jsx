import React, { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useRecoilState } from 'recoil';
import { loginStateAtom, userAtom, userIdAtom } from '../../atoms/userAtoms';
import ReactModal from 'react-modal';
import { invalidateSessionApi } from '../../apis/userApi';
import LoginModal from '../LoginModal/LoginModal';
import RegisterModal from '../RegisterModal/RegisterModal';
import WriteModal from '../WriteModal/WriteModal';
import { searchTodo } from '../../apis/todoApi';
import { todolistAtom, todoParamsAtom } from '../../atoms/todolistAtoms';
ReactModal.setAppElement("#root");

function Header(props) {
    const nowYearAndMonth = {    
        year: new Date().getFullYear(),
        month: (new Date().getMonth() + 1)
    }
    
    const defaultDate = nowYearAndMonth.year + "-" + (nowYearAndMonth.month >= 10 ? nowYearAndMonth.month : "0" + nowYearAndMonth.month) ;
    const [ userId, setUserId ] = useRecoilState(userIdAtom)
    const [ loginState, setLoginState ] = useRecoilState(loginStateAtom);
    const [ todolist, setTodolist ] = useRecoilState(todolistAtom);
    const [ todoParams, setTodoParams ] = useRecoilState(todoParamsAtom);

    const [ registerModal, setRegisterModal ] = useState(false); 
    const [ loginModal, setloginModal ] = useState(false);
    const [ writeModal, setWriteModal ] = useState(false);

    const [ searchInput, setSearchInput ] = useState({
        content: "",
        userId: todoParams.userId,
        registerDate: todoParams.registerDate
    });
    
    const closeModal = () => {
        setRegisterModal(false);
        setloginModal(false);
        setWriteModal(false);
    }

    const openRegisterModal = () => {
        setRegisterModal(true);
    }

    const openLoginModal = () => {
        setloginModal(true);
    }

    const onpenWriteModal = () => {
        setWriteModal(true);
    }

    const getTodolistBySearchInput = async () => {
        try {
            const response = await searchTodo(searchInput);
            setTodolist(response.data);
        } catch(e) {
            console.error(e);
        }
    }

    const handleLogoutClick = async () => {
        if(window.confirm("Logout?")) {
            try { 
                const response = await invalidateSessionApi();
                console.log(response.data);
            } catch(e) {
                console.error(e);
            }
            setLoginState(false);
            setUserId(0);
            setTodoParams({
                registerDate: defaultDate
            })
        }
        
    }

    const handleSearchInputChange = (e) => {
        setSearchInput(searchInput => {
            return {
                ...searchInput,
                content: e.target.value,
                userId: todoParams.userId,
                registerDate: todoParams.registerDate
            }
        })
    }

    const handleSearchInputOnBlur = () => {
        searchInput.content = ""
    }

    useEffect(() => {
        getTodolistBySearchInput();
    }, [searchInput])

    return (
        <>  
            <LoginModal loginModal={loginModal} closeModal={closeModal}/>
            <RegisterModal registerModal={registerModal} closeModal={closeModal}/>
            <WriteModal writeModal={writeModal} closeModal={closeModal}/>
            <div css={s.layout}> 
                <h2 css={s.logo}>To-Do-List</h2>
                {
                    userId ? 
                        <div css={s.nav}>
                            <input type="text" onBlur={handleSearchInputOnBlur} onChange={handleSearchInputChange} value={searchInput.content} placeholder='Search Data'/>
                            <p css={s.link} onClick={onpenWriteModal}>Write</p>
                            <p css={s.link} onClick={handleLogoutClick}>Logout</p>
                        </div> 
                    :
                        <div css={s.nav}>
                            <p css={s.link} onClick={openLoginModal}>Login</p>
                            <p css={s.link} onClick={openRegisterModal}>Register</p>
                        </div>
                }
            </div>
        </>
    );
}

export default Header;