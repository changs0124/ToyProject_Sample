import React, { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useRecoilState } from 'recoil';
import { userAtom } from '../../atoms/userAtoms';
import ReactModal from 'react-modal';
import { invalidateSessionApi } from '../../apis/userApi';
import LoginModal from '../LoginModal/LoginModal';
import RegisterModal from '../RegisterModal/RegisterModal';
import WriteModal from '../WriteModal/WriteModal';
import { searchTodo, todolistApi } from '../../apis/todoApi';
import { todolistAtom, todoParamsAtom } from '../../atoms/todolistAtoms';
import { BsNutFill } from 'react-icons/bs';
ReactModal.setAppElement("#root");

function Header(props) {
    const [ user, setUser ] = useRecoilState(userAtom)
    const [ todolist, setTodolist ] = useRecoilState(todolistAtom);
    const [ todoParams, setTodoParams ] = useRecoilState(todoParamsAtom);

    const [ registerModal, setRegisterModal ] = useState(false); 
    const [ loginModal, setloginModal ] = useState(false);
    const [ writeModal, setWriteModal ] = useState(false);

    const [ searchInput, setSearchInput ] = useState({
        content: "",
        userId: user.userId,
        registerDate: todoParams
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


    const handleLogoutClick = async () => {
        try { 
            const response = await invalidateSessionApi();
            console.log(response.data);
        } catch(e) {
            console.error(e);
        }
        setUser({
            userId: 0,
            userName: ""
        });
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

    useEffect(() => {
        const getTodolistBySearchInput = async () => {
            try {
                const response = await searchTodo(searchInput);
                setTodolist(response.data);
            } catch(e) {
                console.error(e);
            }
        }
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
                    !!user ? 
                        <div css={s.nav}>
                            <input type="text" onChange={handleSearchInputChange} value={searchInput.content} placeholder='Search Date : '/>
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