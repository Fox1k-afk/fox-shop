import React from 'react';
import { useFormikContext } from 'formik';

const EnterButton = () => {
	const { isValid } = useFormikContext();

	const btnBgClassName = isValid
		? 'bg-black text-white'
		: 'bg-white text-red-500 cursor-not-allowed';

	const btnClass = [
		'w-[179px] h-[56px]  uppercase tracking-[1.5px] font-medium py-0 px-[15px] transition-all duration-700',
		btnBgClassName,
	];

	return (
		<div>
			<button type='submit' disabled={!isValid} className={btnClass.join(' ')}>
				Login
			</button>
		</div>
	);
};

export default EnterButton;
