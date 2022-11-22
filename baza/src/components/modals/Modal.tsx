import React from 'react';

interface ModalProps {
	children: React.ReactNode;
	title: string;
	onClose: () => void;
}

const Modal = ({ children, title, onClose }: ModalProps) => {
	return (
		<>
			<div className=' fixed top-0 right-0 left-0 bottom-0 flex items-center justify-center p-[20px] bg-black bg-opacity-80 z-[9999] w-full h-full overflow-y-scroll scroll-auto m-auto'>
				<div className=' overflow-hidden outline-none relative w-full h-full flex justify-center items-center'>
					<div className=' max-w-[770px] w-[770px] mb-[250px] '>
						<div>{children}</div>
					</div>
				</div>
			</div>
			;
			{/* <div className=' w-[100px] p-5 rounded bg-white absolute top-10 left-1/2 -translate-x-1/2'>
				<h1 className=' text-2xl text-center mb-2'>{title}</h1>

				{children}
			</div> */}
		</>
	);
};

export default Modal;
