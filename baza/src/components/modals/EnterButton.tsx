import React from 'react';
import { useFormikContext } from 'formik';

const EnterButton = () => {
	const { isValid } = useFormikContext();
	return (
		<div>
			<button type='submit' disabled={!isValid}>
				Send
			</button>
		</div>
	);
};

export default EnterButton;
