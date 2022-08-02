import React from 'react';

interface ModalProps {
    children: React.ReactNode
    title : string
    onClose: () => void
}

const Modal = ({children, title, onClose}  : ModalProps) => {
    return (
        <>
            <div className="fixed bg-black/50 top-0 right-0 left-0 bottom-0" onClick={onClose}/>
            <div
                className="w-[500px] p-5 absolute top-10 rounded bg-white left-1/2 -translate-x-1/2">
                <h1 className="text-2xl text-center">{title}</h1>
                {children}
                <button className="absolute top-2 right-3 text-2xl p-2" onClick={onClose}>X</button>
            </div>

        </>


    );
};

export default Modal;