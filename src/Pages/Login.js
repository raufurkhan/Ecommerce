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

    function submitHandler(event) {
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
        fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                email: enteredEmail,
                password: enteredPassword,
                returnSecureToken: true,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(async (res) => {
                setIsLoading(false);
                if (res.ok) {
                    return res.json(); // Parse the response JSON when it's successful
                } else {
                    const data = await res.json();
                    console.log(data);
                    let errorMessage = 'Authentication Failed';
                    throw new Error(errorMessage);
                }
            })
            .then((data) => {
                authCtx.login(data.idToken) // Log data in both cases
                history.replace('/products')
            })
            .catch((err) => {
                alert(err.message);
            });
    }

    return (
        <Container>
            <h1 className='my-5 text-center'>{isLogin ? 'Login' : 'Sign Up'}</h1>
            <Form onSubmit={submitHandler} className='my-5'>
                <Form.Group>
                    <Form.Label>Email:</Form.Label>
                    <Form.Control type="text"
                        id='email'
                        required
                        ref={emailRef} />
                </Form.Group>
                <Form.Group >
                    <Form.Label>Password:</Form.Label>
                    <Form.Control
                        type='password'
                        id='password'
                        required
                        ref={passwordRef} />
                </Form.Group>
                <section>
                {!isLoading && <Button className='my-3' type="submit" variant='primary'>{isLogin ? 'Login' : 'Create Account'}</Button>}
                    {isLoading && <p>Sending request...</p>}

                </section>
                <section className='d-flex justify-content-center'>
                <Button  className='my-3' variant="secondary"  onClick={switchAuthModeHandler}>
                        {isLogin ? "Don't have an account , Create new account" : 'Already have an account ? Login with existing account'}
                </Button>
                </section>
            </Form>
        </Container>
    );
};

export default Login;