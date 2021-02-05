import React from 'react';
import FormInput from '../../formInput/formInput.component';
import CustomBottom from '../customBottom/customBottom';
import './signIn.styles.scss';
import { signInWithGoogle} from '../../firebase/firebase.utils';

class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state ={
            email: "",
            password:""
        }
    }

    handeSubmit = event => {
        event.preventDefault();
        this.setState({email:'',password:''})
    }

    handleOn = event =>{
        const {value,name} = event;
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
                    <CustomBottom type="submit" > SIGN IN </CustomBottom>

                    <CustomBottom onClick={signInWithGoogle} > SIGN IN GOOGLE </CustomBottom>

                </form>
            </div>
        );
    }
}

export default SignIn;