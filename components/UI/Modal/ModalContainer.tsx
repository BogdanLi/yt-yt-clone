"use client";

import { usePopupStore } from "@/providers/popups-provider";
import Modal from "./Modal";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const ModalContainer = ({ children }: Props) => {
  const { modal, closeModal } = usePopupStore((state) => state);

  return (
    <>
      {modal ? (
        <Modal className="max-w-3xl" closeModal={closeModal}>
          {children}
        </Modal>
      ) : null}
    </>
  );
};

export default ModalContainer;
