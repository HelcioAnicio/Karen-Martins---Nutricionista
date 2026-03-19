import React from "react";
import { HubspotForm } from "./hubspotForm";
import { IoMdCloseCircle } from "react-icons/io";

// const HUBSPOT_PORTAL_ID = import.meta.env.VITE_HUBSPOT_PORTAL_ID;
// const HUBSPOT_FORM_ID = import.meta.env.VITE_HUBSPOT_FORM_ID;

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DownloadModal: React.FC<DownloadModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="bg-opacity-50 fixed inset-0 z-50 flex h-screen w-full items-center justify-center backdrop-blur-lg">
      <div className="relative max-h-[90vh] w-full max-w-lg overflow-hidden rounded-lg bg-white px-5 py-6 md:h-auto lg:max-w-2xl lg:px-10">
        <button
          className="absolute top-4 right-4 z-20"
          onClick={() => onClose()}
          aria-label="Fechar modal"
        >
          <IoMdCloseCircle className="size-7 cursor-pointer text-gray-700" />
        </button>

        <div className="mt-4 max-h-[calc(90vh-5rem)] overflow-y-auto pr-2">
          <HubspotForm />
        </div>
      </div>
    </div>
  );
};
