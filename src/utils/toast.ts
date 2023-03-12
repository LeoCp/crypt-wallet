import Toast, { ToastOptions } from 'react-native-root-toast';

export function showToast(message: string, options?: ToastOptions) {
  return Toast.show(message, {
    duration: Toast.durations.SHORT,
    position: Toast.positions.CENTER,
    shadow: false,
    backgroundColor: '#000',
    opacity: 1,
    textStyle: { fontSize: 14 },
    containerStyle: {
      borderRadius: 10,
      paddingHorizontal: 10,
      paddingVertical: 8,
    },
    ...options,
  });
}

export function showToastError() {
  showToast('Error try again', { position: Toast.positions.BOTTOM - 30 });
}
