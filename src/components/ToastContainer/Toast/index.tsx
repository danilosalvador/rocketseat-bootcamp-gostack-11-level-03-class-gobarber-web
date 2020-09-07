import React, { useCallback, useEffect } from 'react';
import {
  FiAlertCircle,
  FiCheckCircle,
  FiInfo,
  FiXCircle,
} from 'react-icons/fi';

import { Container } from './styles';

import { ToastMessage, useToast } from '../../../context/ToastContext';

interface ToastProps {
  message: ToastMessage;
  style: Record<string, unknown>; // object
}

const icons = {
  info: <FiInfo size={20} />,
  success: <FiCheckCircle size={20} />,
  error: <FiAlertCircle size={20} />,
};

const Toast: React.FC<ToastProps> = ({ message, style }) => {
  const { removeToast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(message.id);
    }, 3000);

    // A função do RETURN  será sexecuta qdo o componente deixar de existir
    // Isso foi necessário, pois se o usuário fechar pelo botão de close, o timer é cancelado
    return () => {
      clearTimeout(timer);
    };
  }, [removeToast, message.id]);

  const handleRemoveToast = useCallback(
    (id: string) => {
      removeToast(id);
    },
    [removeToast],
  );

  return (
    <Container
      type={message.type}
      $hasDescription={!!message.description}
      style={style}
    >
      {icons[message.type || 'info']}

      <div>
        <strong>{message.title}</strong>
        {message.description && <p>{message.description}</p>}
      </div>

      <button onClick={() => handleRemoveToast(message.id)} type="button">
        <FiXCircle size={18} />
      </button>
    </Container>
  );
};

export default Toast;
