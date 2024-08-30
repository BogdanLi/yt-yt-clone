import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  closeModal: () => void;
}

const Modal = ({ children, className = "", closeModal }: Props) => {
  return (
    <div
      className="fixed top-0 grid h-screen w-full place-items-center bg-black bg-opacity-40"
      onClick={closeModal}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`rounded-3xl bg-white p-10 ${className}`}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
