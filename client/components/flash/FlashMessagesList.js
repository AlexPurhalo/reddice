import React, { Component } from 'react';
import { connect } from 'react-redux';
import FLashMessage from './FlashMessage'
import { deleteFlashMessage } from '../../actions/flashMessages';

class FlashMessageList extends Component {
	render() {
		return (
			<div>
				{
					this.props.messages.map(message =>
						<FLashMessage
							key={message.id}
							message={message}
							deleteFlashMessage={this.props.deleteFlashMessage}/>
					)
				}
			</div>
		);
	}
}

FlashMessageList.propTypes = {
	messages: React.PropTypes.array.isRequired,
	deleteFlashMessage: React.PropTypes.func.isRequired
};

function mapStateToProps(state) {
	return {
		messages: state.flashMessages
	}
}

export default connect(mapStateToProps, { deleteFlashMessage })(FlashMessageList);
