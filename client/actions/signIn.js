import axios from 'axios';

export function signIn(data) {
	return dispatch => {
		return axios.post('/api/auth', data);
	}
}
