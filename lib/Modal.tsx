import React from 'react'
import ReactDOM from 'react-dom';
interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
  }

 const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;
    return ReactDOM.createPortal(
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-100"
          onClick={onClose}
        >
          <div
            className="relative bg-white rounded-lg p-4 max-w-md mx-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
            >
              &times;
            </button>
            {children}
          </div>
        </div>,
        document.body // Mounts modal at the root of the document
      );
    }


export default Modal