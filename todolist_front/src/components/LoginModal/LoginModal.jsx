/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useEffect, useState } from 'react';
import ReactModal from 'react-modal';
import { loginApi } from '../../apis/userApi';
import { useSetRecoilState } from 'recoil';
import { loginStateAtom } from '../../atoms/userAtoms';

function LoginModal({ loginModal, closeModal }) {
    useEffect(() => {
        setLoginUser({
            userName: "",
            password: ""
        })
    }, [loginModal])

    const setLoginState = useSetRecoilState(loginStateAtom);

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
        const response = await loginApi(loginUser);
        console.log(response.data);
        if(response.data === true) {
            setLoginState(true);
            alert("Login Success");
        }else {
            setLoginState(false);
            alert("Login Fail");
        }
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
                border: '2px solid #7A90E2',
                borderRadius: '10px',
                padding: '20px',
                width: '500px',
                height: '500px',
                backgroundColor: '#fafafa',
                }
            }}
            isOpen={loginModal}
            onRequestClose={closeModal}
        >
            <div css={s.modalBox}>
                <h2>LOGIN</h2>
                <div css={s.ipBox}>
                    <input type="text" name='userName' onChange={handleInputChange} value={loginUser.userName} placeholder='ID' autoFocus/>
                    <input type="password" name='password' onChange={handleInputChange} value={loginUser.password} placeholder='Password'/>
                </div>
                <div css={s.buttonBox}>
                    <button onClick={handleLoginSubmitClick}>Login</button>
                    <button onClick={closeModal}>Cancel</button>
                </div>
            </div>        
        </ReactModal>
    );
}

export default LoginModal;