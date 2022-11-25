import React from 'react';

interface ModalProps {
	children: React.ReactNode;
	onClose: () => void;
}

const Modal = ({ children }: ModalProps) => {
	return (
		<div className=' fixed top-0 right-0 left-0 bottom-0 flex items-center justify-center p-[20px] bg-black bg-opacity-80 z-[9999] w-full h-full overflow-y-scroll scroll-auto m-auto'>
			<div className=' overflow-hidden outline-none relative w-full h-full flex justify-center items-center'>
				<div>{children}</div>
			</div>
		</div>
	);
};

export default Modal;
