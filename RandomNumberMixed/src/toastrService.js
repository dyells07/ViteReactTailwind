import toastr from 'toastr';

toastr.options = {
  positionClass: 'toast-top-right', // Customize the position
  closeButton: true, // Show close button
};

const toastrService = {
  success: (message) => toastr.success(message),
  error: (message) => toastr.error(message),
  info: (message) => toastr.info(message),
  warning: (message) => toastr.warning(message),
};

export default toastrService;
