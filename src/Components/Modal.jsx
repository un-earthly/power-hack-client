import React from 'react'
import Modal from 'react-modal';
export default function MyModal({ modalIsOpen, setIsOpen, children, billingId }) {
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };

    function closeModal() {
        setIsOpen(false);
    }
    Modal.setAppElement('#root')
    return (
        <div className='z-50'>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Modal"
            >
                <div className='flex items-center justify-between'>
                    <h2>{billingId}</h2>
                    <button onClick={closeModal}> <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" /></svg></button>
                </div>
                {children}
            </Modal>
        </div>
    )
}