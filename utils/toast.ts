import Toast from 'react-native-toast-message';

type ToastType = 'success' | 'error' | 'info';

interface ToastOptions {
  type: ToastType;
  text1: string;
  text2?: string;
  position?: 'top' | 'bottom';
}

const showToast =({ type, text1, text2 = '', position = 'top' }: ToastOptions) => {
  Toast.show({
    type,
    text1,
    text2,
    position,
  });
};

const toast = {
  showSuccessToast:(message: string, description = '') => {
    showToast({ type: 'success', text1: message, text2: description });
  },
  showErrorToast:(message: string, description = '') => {
    showToast({ type: 'error', text1: message, text2: description });
  },
  showInfoToast:(message: string, description = '') => {
    showToast({ type: 'info', text1: message, text2: description });
  }
  
};

export default toast;