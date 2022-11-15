import React, { FC } from 'react';

interface ErroMessageProps {
	error: string;
}

const ErrorMessage: FC<ErroMessageProps> = ({ error }) => {
	return <p className=' text-center text-red-600'>{error}</p>;
};

export default ErrorMessage;
