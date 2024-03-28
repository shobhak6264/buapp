import Swal from 'sweetalert2';

export const popupPage = (type) => {
    type ? Swal.fire({
        icon: 'success',
        title: 'Signup',
        text: 'Signup Successful'
      }) : Swal.fire({
        icon: 'error',
        title: 'Signup',
        text: 'Error'
      })  
}