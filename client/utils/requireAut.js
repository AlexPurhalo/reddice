import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addFlashMessage } from '../actions/flashMessages';

export default function(ComposedComponent) {
	class Authenticate extends Component {
		componentWillMount() {
			if (!this.props.isAuthenticated) {
				this.props.addFlashMessage({
					type: 'error',
					text: 'You need to sign in to access this page'
				});
				this.context.router.push('/signin');
			}
		}
		render() {
			return <ComposedComponent {...this.props} />; // all props that we have on this component
		}
	}

	Authenticate.propTypes = {
		isAuthenticated: React.PropTypes.func.isRequired,
		addFlashMEssage: React.PropTypes.func.isRequired
	};

	Authenticate.contextTypes = {
		router: React.PropTypes.object.isRequired
	};

	function mapStateToProps(state) {
		return {
			isAuthenticated: state.auth.isAuthenticated
		};
	}

	return connect(mapStateToProps, { addFlashMessage })(Authenticate);
}
