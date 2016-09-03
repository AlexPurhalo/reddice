import React, { Component } from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import Greetings from './components/Greetings';
import SignUpPage from './components/signup/SignUpPage';
import SignInPage from './components/signin/SignInPage';
import NewEventPage from './components/events/NewEventPage';
import requireAuth from './utils/requireAut';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={Greetings} />
		<Route path="signup" component={SignUpPage} />
		<Route path="signin" component={SignInPage} />
		<Route path="new-event" component={requireAuth(NewEventPage)} />
	</Route>
);
