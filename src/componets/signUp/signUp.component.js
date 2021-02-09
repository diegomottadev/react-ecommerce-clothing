import React from 'react';
import FormInput from '../../formInput/formInput.component';
import CustomBottom from '../customBottom/customBottom';
import {auth, createUserProfileDocument} from '../../firebase/firebase.utils';

import './signUp.styles.scss';

class SignUp extends React.Component {
	constructor() {
		super();
		this.state = {
			displayName: '',
			email: '',
			password: '',
			confirmPassword: ''
		};
	}

    handleSubmit = async event =>{
		event.preventDefault();

		const { displayName, email, password, confirmPassword } = this.state;

        if(password != confirmPassword){
            alert('password don´t matches')
            return;
        }

        try{

            const {user} = await auth.createUserWithEmailAndPassword(email,password);
            await createUserProfileDocument(user,{displayName})
			this.setState({
				displayName: '',
				email: '',
				password: '',
				confirmPassword: ''
			})	
        }catch(error){
			console.log(error);
        }
    }


	
    handleChange = event =>{
        const {value,name} = event.target;
        this.setState({[name]:value});
    }

	render() {
		const { displayName, email, password, confirmPassword } = this.state;
		return (
			<div className="sign-up">
				<h2 className="title">I don´t have a account </h2>
				<span>Sign up with your email and password</span>
				<form className="sign-up-form" onSubmit={this.handleSubmit}>
					<FormInput type="text" name="email" value={email} label="Email" required onChange={this.handleChange}/>
					<FormInput type="password" name="password" value={password} label="Password" required onChange={this.handleChange}/>
					<FormInput
						type="password"
						name="confirmPassword"
						value={confirmPassword}
						label="Confirm password"
						required
						onChange={this.handleChange}/>
					<FormInput type="text" name="displayName" value={displayName} label="Display name" required onChange={this.handleChange}/>
                    <CustomBottom  type="submit">SIGN UP</CustomBottom>
                </form>
			</div>
		);
	}
}

export default SignUp;