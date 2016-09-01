import React, { Component } from 'react';

export default class SignUpForm extends Component {
	render() {
		return (
			<form>
				<h1>Join our community!</h1>

				<div className="form-group">
					<label className="control-label">Username</label>
					<input
						type="text"
						name="username"
						className="form-control"/>
				</div>

				<div className="form-group">
					<button className="btn btn-primary btn-lg">Sign Up</button>
				</div>
			</form>
		);
	}
}
