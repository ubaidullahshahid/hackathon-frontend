import { useState } from "react";

let toastState = null;
let toastListeners = [];

const updateListeners = () => {
  toastListeners.forEach((listener) => listener(toastState));
};

export const useToast = () => {
  const [toast, setToast] = useState(toastState);

  const showToast = (text, type) => {
    toastState = { text, type };
    updateListeners();

    setTimeout(() => {
      toastState = null;
      updateListeners();
    }, 2000);
  };

  const hideToast = () => {
    toastState = null;
    updateListeners();
  };

  if (!toastListeners.includes(setToast)) {
    toastListeners.push(setToast);
  }

  return { toast, showToast, hideToast };
};
