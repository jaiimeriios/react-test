import { toast } from 'react-toastify';

export const notifyToast = (inputText) =>
    toast(`Buscando a ${inputText}!`, {
        position: 'bottom-center',
        icon: '🦄',
        theme: 'dark',
        autoClose: 5000,
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
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
