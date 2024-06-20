export interface ModalSuccess {
    openModal: boolean;
    onClose: ()=> void;
    children: React.ReactNode;
}