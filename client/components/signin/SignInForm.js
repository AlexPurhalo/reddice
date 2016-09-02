import React, { Component } from 'react';
import TextFieldGroup from '../common/TextFieldGroup';
import validateInput from '../../../server/shared/validations/signin';
import { connect } from 'react-redux';
import { signIn } from '../../actions/signIn'

class SignInForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			identifier: '',
			password: '',
			errors: {},
			isLoading: false
		};

		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	isValid() {
		const { errors, isValid } = validateInput(this.state);

		if (!isValid) {
			this.setState({ errors })
		}

		return isValid;
	}

	onSubmit(e) {
		e.preventDefault();

		if (this.isValid()) {
			this.setState({ errors: {}, isLoading: true });
			this.props.signIn(this.state).then(
				(res) => this.context.router.push('/'),
				(err) => this.setState({ errors: err.data.errors, isLoading: false })
			);
		}
	}

	onChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}

	render() {
		const { errors, identifier, password, isLoading } = this.state;
		return (
			<form onSubmit={this.onSubmit}>
				<h1>Sign In</h1>

				{ errors.form && <div className="alert alert-danger">{errors.form}</div> }

				<TextFieldGroup
					field="identifier"
					label="Username / Email"
					value={identifier}
					error={errors.identifier}
					onChange={this.onChange} />

				<TextFieldGroup
					field="password"
					label="Password"
					type="password"
					value={password}
					error={errors.password}
					onChange={this.onChange} />

				<div className="form-group">
					<button
						disabled={isLoading}
						className="btn btn-primary btn-lg" >
						Sign In</button>
				</div>
			</form>
		);
	}
}

SignInForm.propTypes = {
	signIn: React.PropTypes.func.isRequired
};

SignInForm.contextTypes = {
	router: React.PropTypes.object.isRequired
};

export default connect(null, { signIn })(SignInForm);
