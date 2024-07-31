import { css } from '@emotion/react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import React, { useState } from 'react';
import ReactModal from 'react-modal';
import { loginApi } from '../../apis/userApi';
import { useRecoilState } from 'recoil';
import { loginStateAtom, userAtom } from '../../atoms/userAtoms';
/** @jsxImportSource @emotion/react */

function LoginModal({ loginModal, closeModal }) {
    const [ user, setUser ] = useRecoilState(userAtom);
    const [ loginState, setLoginState ] = useRecoilState(loginStateAtom);

    const [ loginUser, setLoginUser ] = useState({
        userName: "",
        password: ""
    });

    const handleInputChange = (e) => {
        setLoginUser(loginUser => {
            return {
                ...loginUser,
                [e.target.name]: e.target.value
            }
        })
    }

    const handleLoginSubmitClick = async () => {
        if(loginUser.userName === "") {
            alert("ID Data : ");
            return;
        }
        if(loginUser.password === "") {
            alert("Password Data : ");
            return;
        }
        const response = await loginApi(loginUser);
        if(response.status === 200) {
            setLoginState(true);
            alert("Login Success");
        }else {
            setLoginState(false);
            alert("Login Fail");
        }
        setLoginUser({
            userName: "",
            password: ""
        })
        closeModal();
    }

    return (
        <ReactModal
            style={{
                content: {
                boxSizing: 'border-box',
                transform: 'translate(-50%, -50%)',
                top: '50%',
                left: '50%',
                padding: '20px',
                width: '300px',
                height: '300px',
                backgroundColor: '#fafafa',
                }
            }}
            isOpen={loginModal}
            onRequestClose={closeModal}
        >
            <div css={s.modalBox}>
                <h2>LOGIN</h2>
                <input type="text" name='userName' onChange={handleInputChange} value={loginUser.userName} placeholder='ID :'/>
                <input type="password" name='password' onChange={handleInputChange} value={loginUser.password} placeholder='Password :'/>
                <div css={s.buttonBox}>
                    <button onClick={handleLoginSubmitClick}>Login</button>
                    <button onClick={closeModal}>Cancel</button>
                </div>
            </div>        
        </ReactModal>
    );
}

export default LoginModal;