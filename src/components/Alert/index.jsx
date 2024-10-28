import Swal from 'sweetalert2';

export const Alert = {
    showSuccess: (message) => {
        Swal.fire({
            icon: 'success',
            title: 'Sukses!',
            text: message,
            confirmButtonText: 'OK',
        });
    },
    showError: (message) => {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: message,
            confirmButtonText: 'OK',
        });
    },
    showWarning: (message) => {
        Swal.fire({
            icon: 'warning',
            title: 'Peringatan!',
            text: message,
            confirmButtonText: 'OK',
        });
    },
    showInfo: (message) => {
        Swal.fire({
            icon: 'info',
            title: 'Info',
            text: message,
            confirmButtonText: 'OK',
        });
    },
};
