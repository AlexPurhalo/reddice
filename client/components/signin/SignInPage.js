import React, { Component } from 'react';
import SignInForm from './SignInForm';

export default class SignInPage extends Component {
	render() {
		return (
			<div className="row">
				<div className="col-md-4 col-md-offset-4">
					<SignInForm />
				</div>
			</div>
		);
	}
}
