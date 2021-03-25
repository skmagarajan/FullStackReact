import React, { Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';
class Header extends Component {

	renderContent(){
		console.log(this.props.auth);
		switch (this.props.auth){
			case null:
				return ;
			case false:
				return <li><a href='auth/google'>Login Here</a></li>;
			default:
				return [
					<li key="1" ><Payments /></li>,
					<li key="2" ><a href="api/logout">Logout</a></li>
				];
		}
	}
	render() {
		return (
			<nav>
				<div className='nav-wrapper'>
					<Link to={ this.props.auth ? "/survey" : "/" } className='left brand-logo'>Feedback Collection</Link>
					<ul className='right'>
						{this.renderContent()}
					</ul>
				</div>
			</nav>
	);
	}
}

function mapStateToProps(state){
	return { auth: state.auth };
}

export default connect(mapStateToProps)(Header);