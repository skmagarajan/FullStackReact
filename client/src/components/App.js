import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Landing from './Landing';
// const Header = () => <h2>FeebackCollection</h2>;
// const Dashboard = () => <h2>Dashboard</h2>;
// const Landing = () => <h2>Landing</h2>;
const Survey = () => <h2>Survey</h2>;

class App extends Component{
	componentDidMount() {
		this.props.fetchUsers();
	}
	render(){
		return (
			<div className="container">
				<BrowserRouter>
					<div>
						<Header />
						<Route exact path="/" component={Landing} />
						<Route exact path="/survey" component={Survey} />
					</div>
				</BrowserRouter>
			</div>
		);
	}
}

export default connect(null,actions)(App);