import React from 'react'
import facebookIcon from '../../assets/images/facebook-icon.svg'
import appleIcon from '../../assets/images/apple-icon.svg'
import googleIcon from '../../assets/images/google-icon.svg'

const AltLoginMethods = ({ type }) => {
    return (
        <div className="flex w-full flex-col items-center">
            <div className="relative my-6 w-full border border-dashed border-gray-300">
                <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform bg-white px-1 text-center text-sm">
                    {type === 'login'
                        ? 'Login in with More methods'
                        : 'Register with more methods'}
                </p>
            </div>
            <div className="flex flex-wrap items-center gap-2">
                <button className="login-social-icon">
                    <img
                        src={googleIcon}
                        alt="Google"
                        className="max-w-[25px]"
                    />
                </button>
                <button className="login-social-icon">
                    <img src={appleIcon} alt="Apple" className="max-w-[25px]" />
                </button>
                <button className="login-social-icon">
                    <img
                        src={facebookIcon}
                        alt="Facebook"
                        className="max-w-[25px]"
                    />
                </button>
            </div>
        </div>
    )
}

export default AltLoginMethods
