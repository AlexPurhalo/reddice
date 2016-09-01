import React, { Component } from 'react';
import Greetings from './Greetings';
import NavigationBar from './NavigationBar';
import FlashMessagesList from './flash/FlashMessagesList';

export default class App extends Component {
	render() {
		return (
			<div className="container">
				<NavigationBar />
				<FlashMessagesList />
				{this.props.children}
			</div>
		);
	}
}
