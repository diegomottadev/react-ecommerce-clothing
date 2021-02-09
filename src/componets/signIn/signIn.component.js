import React from 'react';
import FormInput from '../../formInput/formInput.component';
import CustomBottom from '../customBottom/customBottom';
import './signIn.styles.scss';
import {auth, signInWithGoogle} from '../../firebase/firebase.utils';

class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state ={
            email: "",
            password:""
        }
    }

    handeSubmit = async event => {
        event.preventDefault();

        const {email,password} = this.state;
        try {
            await auth.signInWithEmailAndPassword(email,password);
            this.setState({
                email: "",
                password:""
            })
        }
        catch(error){
            console.log(error);
        }
    }

    handleOn = event =>{
        const {value,name} = event.target;
        this.setState({[name]:value});
    }

    render(){
        return(
            <div className="sign-in">
                <h2>I already  have a account</h2>
                <span>Sign in with your email and password</span>

                <form>
                    <label>Email</label>
                    <FormInput label="email" name="email" type="email" handleChange={this.handleOn}  value={this.state.email}  required/>
                    <label>Password</label>
                    <FormInput label="password" name="password" type="password" handleChange={this.handleOn} value={this.state.password}  required/>
                    <div className="buttons">
                    <CustomBottom type="submit" > SIGN IN </CustomBottom>

                    <CustomBottom onClick={signInWithGoogle} isGoogleSignIn > SIGN IN GOOGLE </CustomBottom>
                    </div>

                </form>
            </div>
        );
    }
}

export default SignIn;