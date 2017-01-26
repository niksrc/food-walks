import React from 'react';
import Link from 'react-router/Link';
import Logo from './logo';

const Nav = () => (
	<div className="pa3 bg-lightest-blue flex flex-column">
		<Logo className="f-3"/>
		<ul className="list" style={{ flex:1 }}>
			<li className="pa1"><Link to="/"> Home </Link></li>
			<li className="pa1"><Link to="/walks"> Walks </Link></li>
			<li className="pa1"><Link to="/contact"> Contact </Link></li>
			<li className="pa1"><Link to="/about"> About </Link></li>
			<li className="pa1"><Link to="/press"> Press </Link></li>
			<li className="pa1"><Link to="/partners"> Partners </Link></li>
			<li className="pa1"><Link to="/logout"> Logout </Link></li>
		</ul>
	</div>
);

export default Nav;
