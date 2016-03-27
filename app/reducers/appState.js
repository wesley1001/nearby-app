import { TOGGLE_NOTIFICATION, TOGGLE_LOCATION } from '../actions';

export default function (appState = {
		listFetchSize: 10,
		token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1dWlkIjoiYTBiNjkxNGUtYWE5My00ZTY4LThhZjQtNDU4NzJiOGUwNjJlIiwidGltZSI6MTQ1NjkyNDkwOC4yODU3MzIzLCJ1c2VyX2lkIjoiNTZkNmUzYTI1Y2UzOTk1Y2UwYzlhMjAwIn0.tUwPZYK7DiclqdftxktgEMXskcmDfIbR8dk0zhgTr-U',
		userId: '56d6e3a25ce3995ce0c9a200',
		location: true,
		notification: true }, action) {
	switch(action.type) {
		case TOGGLE_NOTIFICATION:
			return { ...appState, notification: !appState.notification };
		case TOGGLE_LOCATION:
			return { ...appState, location: !appState.location };
		default:
			return appState;
	}
}