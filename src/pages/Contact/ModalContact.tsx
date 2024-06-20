import { ModalSuccess } from "../../types/ModalSuccess";

const ModalContact = ({ openModal, onClose, children }: ModalSuccess) => {
  return (
    <div
      className={`fixed inset-0 flex justify-center items-center transition-colors ${
        openModal ? "visible bg-black/20" : "invisible"
      }`}
      onClick={onClose}
    >
      <div
        className={` bg-customGreenAccents rounded-lg shadow p-6 transition-all text-black ${
          openModal ? "scale-100 opacity-100" : "scale-110 opacity-0"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-2 right-2 py-1 px-2 rounded-md text-black"
          onClick={onClose}
        >
          X
        </button>
        <h3 className="my-4">Sent with success!</h3>
        {children}
      </div>
    </div>
  );
};

export default ModalContact;
