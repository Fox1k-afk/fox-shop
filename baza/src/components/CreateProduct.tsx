import React, { useState } from 'react';

const CreateProduct = () => {
	const [value, setValue] = useState('');

	const submitHandler = (e: React.FormEvent) => {
		e.preventDefault();
	};

	const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
	};
	return (
		<form onSubmit={submitHandler}>
			<input
				value={value}
				onChange={changeHandler}
				type='text'
				className=' border py-2 px-4 mb-2 w-full outline-none'
				placeholder='Enter product title...'
			/>
			<button
				type='submit'
				className=' py-2 px-4 border bg-yellow-400 hover:text-white'
			>
				Create
			</button>
		</form>
	);
};

export default CreateProduct;
