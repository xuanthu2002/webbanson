import { useToast } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const useNotification = () => {
  const toast = useToast();
  const navigate = useNavigate();

  const sendToast = ({ status, duration, description }) => {
    // console.log({ status, duration, description });
    toast({
      title: status.charAt(0).toUpperCase() + status.slice(1),
      description,
      status,
      duration,
      isClosable: true,
      position: 'top-right',
    });
  };

  const sendNotification = (fn) => {
    fn.then((res) => {
      if (res.error || res.err) throw new Error(res);
      sendToast({
        status: 'success',
        duration: 3000,
        description: res.payload.message,
      });

      setTimeout(() => {
        if (res.payload.message?.includes('created')) {
          return navigate('/login');
        }
        navigate('/');
      }, 1500);
    }).catch((err) => {
      sendToast({
        status: 'error',
        duration: 5000,
        description: 'Wrong password or user does not exist',
      });
    });
  };

  return { sendNotification };
};

export default useNotification;
