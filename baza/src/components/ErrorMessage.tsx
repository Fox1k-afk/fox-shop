import React, { FC } from 'react';

interface ErroMessageProps {
	errMsg: string;
}

const ErrorMessage: FC<ErroMessageProps> = ({ errMsg }) => {
	return <p className=' text-center text-red-600'>{errMsg}</p>;
};

export default ErrorMessage;
