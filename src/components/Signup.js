import React, { useRef, useState } from 'react';
import {
	Card,
	CardContent,
	TextField,
	Button,
    Container,
  
} from '@material-ui/core';
import { useAuth } from '../contexts/AuthContext';
import Alert from '@material-ui/lab/Alert';


function Signup() {
	const emailRef = useRef();
	const passwordRef = useRef();
	const passwordConfirmRef = useRef();
	const { signup} = useAuth();
    const [ error, setError ] = useState("");
    const [loading, setLoading] = useState(false)

   async function handleSubmit(e) {
		e.preventDefault();
		if (passwordRef.current.value !== passwordConfirmRef.current.value) {
			return setError('Passwords do not match');
        }
        try{
            setError("")
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value);
        } catch{
            setError('Failed to create an account')
        }
		setLoading(false)
	}
	return (
		<Container style={{ textAlign: 'center' }}>
			<Card style={{ height: '80vh' }}>
				<CardContent>
					<h2>Sign up</h2>
            
                    {error && <Alert severity="error">{error}</Alert>}
					<form onSubmit={handleSubmit}>
						<div className='form-group' id='email'>
							<TextField
								type='email'
								id='email-field'
								label='Email'
								ref={emailRef}
								required
							/>
						</div>
						<div className='form-group' id='password'>
							<TextField
								type='password'
								id='password-field'
								label='Password'
								ref={passwordRef}
								required
							/>
						</div>
						<div className='form-group' id='password-confirm'>
							<TextField
								type='password'
								id='password-confirm-field'
								label='Confirm Password'
								ref={passwordConfirmRef}
								required
							/>
						</div>
						<Button
                        disabled={loading}
							style={{ marginTop: '2rem' }}
							type='submit'
							variant='contained'
							color='primary'
						>
							Sign Up
						</Button>
					</form>
					<div style={{ marginTop: '1rem' }}>
						Already have an account? log in
					</div>
				</CardContent>
			</Card>
		</Container>
	);
}

export default Signup;
