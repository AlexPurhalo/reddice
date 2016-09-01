import React, { Component } from 'react';
import { connect } from 'react-redux';
import FLashMessage from './FlashMessage'

class FlashMessageList extends Component {
	render() {
		return (
			<div>
				{
					this.props.messages.map(message =>
						<FLashMessage key={message.id} message={message} />
					)
				}
			</div>
		);
	}
}

FlashMessageList.propTypes = {
	messages: React.PropTypes.array.isRequired
};

function mapStateToProps(state) {
	return {
		messages: state.flashMessages
	}
}

export default connect(mapStateToProps)(FlashMessageList);
