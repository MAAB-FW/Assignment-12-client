import useAuth from "@/hooks/useAuth"
import React from "react"
import toast from "react-hot-toast"
import { FcGoogle } from "react-icons/fc"
import { useNavigate } from "react-router-dom"

export const SocialLogin = () => {
    const { googleLogin } = useAuth()
    const from = location.state?.from?.pathname || "/"
    const navigate = useNavigate()

    const handleGoogleLogin = () => {
        googleLogin()
            .then((r) => {
                console.log(r.user)
                navigate(from, { replace: true })
                toast.success("Successfully Logged In!")
            })
            .catch((e) => {
                console.log(e)
                toast.error("Something went wrong!")
            })
    }

    return (
        <div>
            <button
                onClick={handleGoogleLogin}
                type="button"
                className="inline-flex items-center gap-4 justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50"
            >
                <FcGoogle className="text-xl" /> Google
            </button>
        </div>
    )
}