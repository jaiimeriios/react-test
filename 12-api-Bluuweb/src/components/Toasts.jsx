import { toast } from 'react-toastify';

export const notifyToast = (msg) =>
    toast(msg, {
        position: 'bottom-center',
        icon: '🦄',
        theme: 'dark',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });

export const notifyToastError = (errorMsg) =>
    toast.error(errorMsg, {
        position: 'bottom-center',
        icon: '🔥',
        theme: 'dark',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
