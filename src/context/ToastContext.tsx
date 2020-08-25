import React, { createContext, useContext, useCallback } from 'react';

import ToastContainer from '../components/ToastContainer';

interface ToastContextData {
  addToast(): void;
  remoteToast(): void;
}

const ToastContext = createContext<ToastContextData>({} as ToastContextData);

const ToastProvider: React.FC = ({ children }) => {
  const addToast = useCallback(() => {
    console.log('addToast');
  }, []);

  const remoteToast = useCallback(() => {
    console.log('remoteToast');
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, remoteToast }}>
      {children}
      <ToastContainer />
    </ToastContext.Provider>
  );
};

function useToast(): ToastContextData {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('useToast deve ser usado dentro de um ToastProvider');
  }

  return context;
}

export { ToastProvider, useToast };
