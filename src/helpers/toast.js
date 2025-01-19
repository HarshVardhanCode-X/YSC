import { Flip, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

let toastId = 'YSC';

export function warnToast(message) {
    showToast(message, 'warning');
}

export function infoToast(message) {
    showToast(message, 'info');
}

export function successToast(message) {
    showToast(message, 'success');
}

export function errorToast(message) {
    showToast(message, 'error');
}

function showToast(message, type) {
    const options = {
        position: 'top-center',
        toastId: toastId,
        autoClose: 5000,
        transition: Flip
    };

    switch (type) {
        case 'warning':
            options.type = "warning";
            break;
        case 'info':
            options.type = "info";
            break;
        case 'success':
            options.type = "success";
            break;
        case 'error':
            options.type = "error";
            break;
        default:
            options.type = "default";
    }

    if (toast.isActive(toastId)) {
        toast.update(toastId, { render: message, ...options });
    } else {
        toastId = toast(message, options);
    }
}
