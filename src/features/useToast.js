import { toast } from "react-toastify";

const useToast = () => {
  const showToast = (message, type = "info") => {
    toast(message, {
      type,
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return { showToast };
};

export default useToast;
