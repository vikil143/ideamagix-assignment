import { ToastContext } from "@myapp/context/Toast"
import { useContext } from "react"

export const useToast = () => {
    const { showToast } = useContext(ToastContext)
    return showToast
}