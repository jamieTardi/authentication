import React, { useRef, useState } from 'react';
import { Card, Button, Form, Alert } from 'react-bootstrap';
import { useAuth } from '../context/AuthContext';
const SignUp = () => {
	const emailRef = useRef();
	const passwordRef = useRef();
	const passwordConfirmRef = useRef();
	const { signup } = useAuth();
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(null);

	async function handleSubmit(e) {
		e.preventDefault();
		signup(emailRef.current.value, passwordRef.current.value);

		if (passwordRef.current.value !== passwordConfirmRef.current.value) {
			return setError('The password entered do not match, please try again');
		}

		try {
			setError('');
			setLoading(true);
			await signup(emailRef.current.value, passwordRef.current.value);
		} catch {
			setError('Failed to create an account');
		}
		setLoading(false);
	}

	return (
		<div>
			<Card>
				<Card.Body>
					<h2 className='text-center mb-4'>Sign Up</h2>
					<Form onSubmit={handleSubmit}>
						<Form.Group id='email'>
							<Form.Label>Email</Form.Label>
							<Form.Control type='email' ref={emailRef} required />
						</Form.Group>
						<Form.Group id='password'>
							<Form.Label>Password</Form.Label>
							<Form.Control type='password' ref={passwordRef} required />
						</Form.Group>
						<Form.Group id='password-confirm'>
							<Form.Label>Password Confirmation</Form.Label>
							<Form.Control type='password' ref={passwordConfirmRef} required />
						</Form.Group>
						<Button type='submit' className='w-100' disabled={loading}>
							Sign Up
						</Button>
					</Form>
				</Card.Body>
			</Card>
			<div>{error ? <Alert variant='danger'>{error}</Alert> : ''}</div>
			<div className='w-100 text-center mt-2'>
				Already have an account? Login
			</div>
		</div>
	);
};

export default SignUp;
