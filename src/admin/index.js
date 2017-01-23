/* global document */
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

render((
	<Router history={browserHistory}>
		<Route path="/" component={App}>
		</Route>
	</Router>
), document.getElementById('app'));

