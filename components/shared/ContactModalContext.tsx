"use client";

import React, { createContext, useContext, useState } from "react";

interface ContactModalContextType {
  isOpen: boolean;
  productName: string | undefined;
  openModal: (productName?: string) => void;
  closeModal: () => void;
}

const ContactModalContext = createContext<ContactModalContextType | undefined>(undefined);

export function ContactModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [productName, setProductName] = useState<string | undefined>(undefined);

  const openModal = (prodName?: string) => {
    setProductName(prodName);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setProductName(undefined);
  };

  return (
    <ContactModalContext.Provider value={{ isOpen, productName, openModal, closeModal }}>
      {children}
    </ContactModalContext.Provider>
  );
}

export function useContactModal() {
  const context = useContext(ContactModalContext);
  if (!context) {
    throw new Error("useContactModal must be used within a ContactModalProvider");
  }
  return context;
}
