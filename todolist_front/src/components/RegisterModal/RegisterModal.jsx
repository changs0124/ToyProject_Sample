/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useEffect, useState } from 'react';
import ReactModal from 'react-modal';
import { duplicateUserName, registerApi } from '../../apis/userApi';
/** @jsxImportSource @emotion/react */

function RegisterModal({registerModal, closeModal}) {
    const [ registerUser, setRegisterUser ] = useState({
        userName: "",
        password: "",
        name: "",
        email: ""
    })

    useEffect(() => {
        setRegisterUser({
            userName: "",
            password: "",
            name: "",
            email: ""
        })
    }, [registerModal])

    const handleInputOnChange = (e) => {
        setRegisterUser(registerUser => {
            return {
                ...registerUser,
                [e.target.name]: e.target.value
            }
        })
    }

    const handleRegisterSubmitClick = async () => {
        if(registerUser.userName === "") {
            alert("Please enter your ID");
            return;
        }
        if(registerUser.password === "") {
            alert("Please enter your Password");
            return;
        }
        if(registerUser.name === "") {
            alert("Please enter your Name");
            return;
        }
        if(registerUser.email === "") {
            alert("Please enter your Email");
            return;
        }
        const response = await registerApi(registerUser);
        if(response.status === 200) {
            alert("Register Success");
        } else {
            alert("Register Fail");
        }
        closeModal();
    }

    const handleDuplicateUserNameOnBlur = async () => {
        const response = await duplicateUserName(registerUser.userName);
        console.log(response.data);
        response.data === 1 ? alert("Usable ID") : alert("Duplicate ID")
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
            isOpen={registerModal}
            onRequestClose={closeModal}
        >
            <div css={s.modalBox}>
                <h2>REGISTER</h2>
                <div css={s.ipBox}>
                    <input type="text" name='userName' onBlur={handleDuplicateUserNameOnBlur} onChange={handleInputOnChange} value={registerUser.userName} placeholder='ID' autoFocus/>
                    <input type="password" name='password' onChange={handleInputOnChange} value={registerUser.password} placeholder='Password'/>
                    <input type="text" name='name' onChange={handleInputOnChange} value={registerUser.name} placeholder='Name'/>
                    <input type="text" name='email' onChange={handleInputOnChange} value={registerUser.email} placeholder='Email'/>
                </div>
                <div css={s.buttonBox}>
                    <button onClick={handleRegisterSubmitClick}>Register</button>
                    <button onClick={closeModal}>Cancel</button>
                </div>
            </div>        
        </ReactModal>
    );
}

export default RegisterModal;