import { getIn, ErrorMessage, Formik, Field, Form } from 'formik';
import React, { useState } from 'react';
import EnterButton from './EnterButton';
import * as Yup from 'yup';
import s from './LoginRegist.module.css';

const INITIAL_INPUT_VALUE = {
	phone: '+380',
	password: '',
};

const phoneRegExp = /(?=.*\+[0-9]{3}\s?[0-9]{2}\s?[0-9]{3}\s?[0-9]{4}$)/;

const FORM_VALIDATION_SCHEMA = {
	phone: Yup.string()
		.required('Phone num required')
		.matches(phoneRegExp, 'Enter Ukraine phone number example:+380 99 678 3498'),

	password: Yup.string()
		.min(6, 'should be 6 chars minimum.')
		.required('Password required'),
};

const LoginForm = () => {
	const [inpVal] = useState(INITIAL_INPUT_VALUE);

	function PhoneInput({ field, form: { errors } }: any) {
		return (
			<div>
				<input {...field} type='phone' style={getStyles(errors, field.name)} />
				<ErrorMessage
					name={field.name}
					component={'div'}
					className=' text-red-700 mt-[5px]'
				/>
			</div>
		);
	}

	function PasswordInput({ field, form: { errors } }: any) {
		return (
			<div>
				<input {...field} type='password' style={getStyles(errors, field.name)} />
				<ErrorMessage
					name={field.name}
					component='div'
					className=' text-red-700 mt-[5px]'
				/>
			</div>
		);
	}

	function getStyles(errors: string, fieldName: string) {
		if (getIn(errors, fieldName)) {
			return {
				borderBottom: '1px solid red',
			};
		}
	}

	function onSubmit(values: any) {
		console.log(JSON.stringify(values, null, 2));
	}

	return (
		<Formik
			initialValues={inpVal}
			validationSchema={Yup.object(FORM_VALIDATION_SCHEMA)}
			onSubmit={onSubmit}
		>
			<Form>
				<div className={s.modal__form_input}>
					<label className={s.custom_input}>
						Phone Number
						<Field name='phone' component={PhoneInput} />
					</label>
				</div>

				<div className={s.modal__form_input}>
					<label className={s.custom_input}>
						Password
						<Field name='password' component={PasswordInput} />
					</label>
				</div>

				{/* <EnterButton /> */}
			</Form>
		</Formik>
	);
};

export default LoginForm;
