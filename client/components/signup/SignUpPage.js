import React, { Component } from 'react';
import SignUpForm from './SignUpForm';
import { connect } from 'react-redux';
import { userSignUpRequest, isUserExists } from '../../actions/signUpActions'
import { addFlashMessage } from '../../actions/flashMessages.js';

class SignUpPage extends Component {
	render() {
		const { userSignUpRequest, addFlashMessage, isUserExists } = this.props;
		return (
			<div className="row">
				<div className="col-md-4 col-md-offset-4">
					<SignUpForm
						userSignUpRequest={userSignUpRequest}
						addFlashMessage={addFlashMessage}
						isUserExists={isUserExists} />
				</div>
			</div>
		);
	}
}

SignUpPage.propTypes = {
	userSignUpRequest: React.PropTypes.func.isRequired,
	addFlashMessage: React.PropTypes.func.isRequired,
	isUserExists: React.PropTypes.func.isRequired
};

export default connect(null, { userSignUpRequest, addFlashMessage, isUserExists })(SignUpPage);
