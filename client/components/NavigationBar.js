import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { signOut } from '../actions/authActions';

class NavigationBar extends Component {
	signOut(e) {
		e.preventDefault();
		this.props.signOut();
	}
	render() {
		const { isAuthenticated } = this.props.auth;

		const userLinks = (
			<ul className="nav navbar-nav navbar-right">
				<li><a href="#" onClick={this.signOut.bind(this)}>Sign Out</a></li>
			</ul>
		);

		const guestLinks = (
			<ul className="nav navbar-nav navbar-right">
				<li><Link to="signup">Sign Up</Link></li>
				<li><Link to="signin">Sign In</Link></li>
			</ul>
		);

		return (
			<nav className="navbar navbar-default">
				<div className="container-fluid">
					<div className="navbar-header">
						<Link to="/" className="navbar-brand">Red Dice</Link>
					</div>

					<div className="collapse navbar-collapse">
						{ isAuthenticated ? userLinks : guestLinks }
					</div>
				</div>
			</nav>
		);
	}
}

NavigationBar.propTypes = {
	auth: React.PropTypes.object.isRequired,
	signOut: React.PropTypes.func.isRequired
};

function mapStateToProps(state) {
	return {
		auth: state.auth
	}
}

export default connect(mapStateToProps, { signOut })(NavigationBar);
