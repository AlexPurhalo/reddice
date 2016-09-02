import React, { Component } from 'react';
import timezones from '../../data/timezones';
import classnames from 'classnames';
import map from 'lodash/map';
import TextFieldGroup from '../common/TextFieldGroup';
import validateInput from '../../../server/shared/validations/signup';
import { browserHistory } from 'react-router';

export default class SignUpForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			username: '',
			email: '',
			password: '',
			passwordConfirmation: '',
			timezone: '',
			errors: {},
			isLoading: false
		};

		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
		this.checkUserExists = this.checkUserExists.bind(this);
	}

	onChange(e) {
		this.setState({ [e.target.name]: e.target.value })
	}

	isValid() {
		const { errors, isValid } = validateInput(this.state);

		if (!isValid) {
			this.setState({ errors });
		}

		return isValid;
	}

	onSubmit(e) {
		e.preventDefault();

		if (this.isValid()) {
			this.setState({ errors: {}, isLoading: true }); // backs empty object
			this.props.userSignUpRequest(this.state)
				.then(
					() => {
						this.props.addFlashMessage({
							type: 'success',
							text: 'You signed up successfully, Welcome!'
						});
						this.context.router.push('/');
					},
					({ data }) => this.setState({ errors: data, isLoading: false })
				)
		}
	}

	checkUserExists(e) {
		const field = e.target.name;
		const val = e.target.value;
		if (val !== '') {
			this.props.isUserExists(val).then(res => {
				let errors = this.state.errors;
				if (res.data.user) {
					errors[field] = `There is user with such ${field}`
				} else {
					errors[field] = '';
				}
				this.setState({ errors })
			})
		}
	}

	render() {
		const { errors } = this.state;
		const options = map(timezones, (val, key) =>
			<option key={val} value={val}>{key}</option>
		);
		return (
			<form onSubmit={this.onSubmit}>
				<h1>Join our community!</h1>

				<TextFieldGroup
					field="username"
					value={this.state.value}
					label="Username"
					error={errors.username}
					type="text"
					onChange={this.onChange}
					checkUserExists={this.checkUserExists}/>

				<TextFieldGroup
					field="email"
					value={this.state.value}
					label="Email"
					error={errors.email}
					type="email"
					onChange={this.onChange}
					checkUserExists={this.checkUserExists}/>

				<TextFieldGroup
					field="password"
					value={this.state.value}
					label="Password"
					error={errors.password}
					type="password"
					onChange={this.onChange}/>

				<TextFieldGroup
					field="passwordConfirmation"
					value={this.state.value}
					label="Password Confirmation"
					error={errors.passwordConfirmation}
					type="password"
					onChange={this.onChange}/>

				<div className={classnames("form-group", { 'has-error': errors.timezone })}>
					<label className="control-label">Timezone</label>
					<select
						value={this.state.timezone}
						onChange={this.onChange}
						name="timezone"
						className="form-control">
						<option value="" disabled>Choice Your Timezone</option>
						{options}
					</select>
					{errors.timezone && <span className="help-block">{errors.timezone}</span>}
				</div>

				<div className="form-group">
					<button
						disabled={this.state.isLoading}
						className="btn btn-primary btn-lg">
						Sign Up</button>
				</div>
			</form>
		);
	}
}

SignUpForm.propTypes = {
	userSignUpRequest: React.PropTypes.func.isRequired,
	addFlashMessage: React.PropTypes.func.isRequired,
	isUserExists: React.PropTypes.func.isRequired
};

SignUpForm.contextTypes = {
	router: React.PropTypes.object.isRequired
};
