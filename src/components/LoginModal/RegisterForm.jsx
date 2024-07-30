import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import AltLoginMethods from './AltLoginMethods'

const RegisterForm = ({ closeModel }) => {
    const [name, setName] = useState('')
    const [userEmail, setuserEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    useEffect(() => {
        setuserEmail('')
        setPassword('')
        setConfirmPassword('')
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Logging in with:', userEmail, password)
        closeModel()
    }

    return (
        <div className="flex flex-col items-center gap-3 p-6 md:gap-4">
            <h2 className="pb-2 text-2xl font-semibold text-blue">Register</h2>
            <form
                className="flex w-full flex-col gap-3"
                onSubmit={handleSubmit}
            >
                <input
                    type="text"
                    placeholder="Full Name"
                    value={name}
                    onChange={(e) => setuserEmail(e.target.value)}
                    required
                    className="w-full rounded-md border-[1px] border-slate-300 p-3 outline-none focus:ring-1 focus:ring-blue"
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={userEmail}
                    onChange={(e) => setuserEmail(e.target.value)}
                    required
                    className="w-full rounded-md border-[1px] border-slate-300 p-3 outline-none focus:ring-1 focus:ring-blue"
                />
                <div className="flex flex-col items-center gap-3 min-[400px]:flex-row">
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="w-full rounded-md border-[1px] border-slate-300 p-3 outline-none focus:ring-1 focus:ring-blue"
                    />
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="w-full rounded-md border-[1px] border-slate-300 p-3 outline-none focus:ring-1 focus:ring-blue"
                    />
                </div>
                <button
                    type="submit"
                    className="cta-btn bg-blue text-base text-white"
                >
                    Register
                </button>
            </form>
            <div className="flex w-full flex-wrap items-center justify-center gap-2 py-2 sm:justify-between">
                <div className="flex items-center gap-2">
                    <input
                        id="save-password"
                        type="checkbox"
                        className="focus:ring-blue-500 h-4 w-4 cursor-pointer rounded-sm accent-blue outline-none focus:ring-1"
                    />
                    <label htmlFor="save-password">
                        I agree to the{' '}
                        <Link
                            to="/terms-conditions"
                            className="cursor-pointer text-blue"
                        >
                            terms and conditions
                        </Link>
                    </label>
                </div>
            </div>

            <AltLoginMethods type={'register'} />
        </div>
    )
}

export default RegisterForm
