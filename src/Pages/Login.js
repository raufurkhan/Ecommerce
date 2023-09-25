import { useState, useRef, useContext } from 'react';
import { Form, Button,Container } from 'react-bootstrap';
// import classes from './AuthForm.module.css';
import AuthContext from '../store/auth-context';
import { useHistory } from 'react-router-dom';
const Login = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [isLoading, setIsLoading] = useState(false);


    const history = useHistory();
    const authCtx = useContext(AuthContext);
    const emailRef = useRef();
    const passwordRef = useRef();

    const switchAuthModeHandler = () => {
        setIsLogin((prevState) => !prevState);

    };

   async function submitHandler(event) {
        event.preventDefault();

        const enteredEmail = emailRef.current.value;
        const enteredPassword = passwordRef.current.value;

        setIsLoading(true);
        let url;
        if (isLogin) {
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAkBtS8XqPnFWiHAs2Qlb62O_oFyK1aj6Y';

        } else {
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAkBtS8XqPnFWiHAs2Qlb62O_oFyK1aj6Y'; 
        
        }
        try{
            const response = await fetch(url, {
                method: 'POST',
                body: JSON.stringify({
                    email: enteredEmail,
                    password: enteredPassword,
                    returnSecureToken: true,
                }),
                headers: {
                    'Content-Type': 'application/json',
                },
            });

                if(!response.ok){
                    const data = await response.json();
                    let errorMessage="Authentication Failed";

                    if(data && data.error && data.error.message){
                        errorMessage=data.error.message;
                    }

                    throw new Error(errorMessage);
                }
  
                const data = await response.json();
                const email=data.email;
                const token=data.idToken;
                const endpoint=`${email.replace(/\.|@/g, "")}`;
                authCtx.login(token,endpoint);
                history.replace('/products');
        } catch (err){
            alert(err.message);
        } finally {
            setIsLoading(false);
        }
    }                

    return (
        <Container
        className='mt-5 p-4'
        style={{
            backgroundColor: '#87CEEB',
            borderRadius: '10px',
            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)'
        }} // Set your desired background color
    >
        <h1 className='text-center'>{isLogin ? 'Login' : 'Sign Up'}</h1>
        <Form onSubmit={submitHandler} className='mt-4'>
            <Form.Group controlId='email'>
            
                    <Form.Label>Email:</Form.Label>
                    <Form.Control
                        type='email'
                        placeholder='Enter your email'
                        required
                        ref={emailRef} />
                </Form.Group>
                <Form.Group controlId='password'>
                    <Form.Label>Password:</Form.Label>
                    <Form.Control
                        type='password'
                        id='password'
                        placeholder='Enter your password'
                        required
                        ref={passwordRef} />
                </Form.Group>
                <div className='text-center'>
                    {!isLoading && (
                        <Button
                            type='submit'
                            variant='primary'
                            className='my-3'
                        >
                            {isLogin ? 'Login' : 'Create Account'}
                        </Button>
                    )}
                    {isLoading && <p>Sending request...</p>}
                    </div>
                <div className='text-center'>
                    <Button
                        variant='secondary'
                        onClick={switchAuthModeHandler}
                        className='my-3'
                    >
                        {isLogin
                            ? "Don't have an account? Create a new account"
                            : 'Already have an account? Log in'}
                
                
                </Button>
              </div>
            </Form>
        </Container>
    );
};

export default Login;