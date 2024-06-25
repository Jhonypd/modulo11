/** @format */

import { useCallback, useState } from "react";

export function useToast() {
  const [toasts, setToasts] = useState([]);

  const addToast = useCallback((title, type, message) => {
    const id = Date.now();

    setToasts((prevToast) => [...prevToast, { id, title, type, message }]);

    setTimeout(() => {
      setToasts((prevToast) => prevToast.filter((toast) => toast.id !== id));
    }, 5000);
  }, []);

  return { toasts, addToast };
}
