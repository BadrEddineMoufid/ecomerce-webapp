import React, { Component } from 'react'
import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';

import './signin.scss';
import { auth, signInWithGoogle  } from '../../components/firebase/firebase';


export default class SignIn extends Component {
    constructor(props){
        super(props);

        this.state={
            email: '',
            password:''
        }
    }

    handleSubmit = async event =>{
        event.preventDefault();

        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: '' });
        } catch (error) {
            console.log(error);
        }

        
    }

    handleChange = event => {
        const {value, name} = event.target;

        this.setState({ [name]: value })
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your Email and Password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name='email' 
                        type='email' 
                        handleChange={this.handleChange}
                        value={this.state.email}
                        label='email' 
                        required 
                    />

                    

                    <FormInput 
                        name='password' 
                        type='password' 
                        handleChange={this.handleChange} 
                        value={this.state.password}
                        label='password' 
                        required 
                    />
                    
                    <div className='buttons'>
                        <CustomButton type='submit'> Sign in </CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn> Sign in with Google </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}
