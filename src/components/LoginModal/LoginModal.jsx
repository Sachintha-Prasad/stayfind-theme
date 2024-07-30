import React, { useState } from 'react'
import { IoClose } from 'react-icons/io5'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'
import registerImg from '../../assets/images/login-modal-register-img.svg'
import loginImg from '../../assets/images/login-modal-login-img.svg'

const LoginModal = ({ handleLoginModal = () => {} }) => {
    const [formType, setFormType] = useState('login')

    const handleFormTypeChange = (type) => {
        setFormType(type)
    }

    return (
        <div className="relative flex min-h-[600px] flex-col justify-between overflow-hidden rounded-lg bg-white">
            <IoClose
                className="absolute right-6 top-4 cursor-pointer text-xl text-blue"
                onClick={handleLoginModal}
            />

            {formType === 'login' ? (
                <LoginForm closeModel={handleLoginModal} />
            ) : (
                <RegisterForm closeModel={handleLoginModal} />
            )}

            {formType === 'login' ? (
                <div className="grid min-h-[100px] grid-cols-2 gap-3 bg-blue/20 p-6 sm:grid-cols-3">
                    <div className="relative">
                        <img
                            src={registerImg}
                            alt=""
                            className="absolute -bottom-12 -left-12 max-w-[200px]"
                        />
                    </div>
                    <div className="flex flex-col items-start gap-2 sm:col-span-2 sm:px-4">
                        <p>Don't you have an account yet?</p>
                        <div
                            className={`custom-transition cta-btn w-full cursor-pointer bg-black/20 text-white hover:bg-black/60`}
                            onClick={() => handleFormTypeChange('register')}
                        >
                            Register
                        </div>
                    </div>
                </div>
            ) : (
                <div className="grid min-h-[100px] grid-cols-2 gap-3 bg-blue/20 p-6 sm:grid-cols-3">
                    <div className="flex flex-col items-start gap-2 sm:col-span-2 sm:px-4">
                        <p>Do you have an existing account?</p>
                        <div
                            className={`custom-transition cta-btn w-full cursor-pointer bg-black/20 text-white hover:bg-black/60`}
                            onClick={() => handleFormTypeChange('login')}
                        >
                            Log in
                        </div>
                    </div>
                    <div className="relative">
                        <img
                            src={loginImg}
                            alt=""
                            className="absolute -bottom-12 -right-14 max-w-[200px]"
                        />
                    </div>
                </div>
            )}
        </div>
    )
}

export default LoginModal
