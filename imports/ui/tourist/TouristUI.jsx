import { Meteor } from 'meteor/meteor';
import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

import Home from './Home';
import {Navbar, NavHeader, Nav, NavItem, CollapsingNav} from '../common/Components';

/* ------------------------------------------------------------ *
 * Application page for tourist subsystem --------------------- *
 * ------------------------------------------------------------ */
export class TouristUI extends React.Component {
	constructor(props){
		super(props);
	}

	render(){
		if (!this.props.currentUser) return (<div><h1>Loading.. </h1></div>);
		return (
			<div>
				<Navbar>
					<Nav>
						<NavHeader to={"/tourist/" + this.props.currentUser.username} collapsetarget="tourist-nav">My Profile</NavHeader>
					</Nav>
					<CollapsingNav id="tourist-nav">
						<Nav>
							{/*<NavItem to={"/tourist/" + this.props.currentUser.username + "/profile"}>Profile</NavItem>*/}
							<NavItem to={"/tourist/" + this.props.currentUser.username + "/plantour"} collapsetarget="tourist-nav">Plan a Tour</NavItem>
							<NavItem to={"/tourist/" + this.props.currentUser.username + "/messaging"} collapsetarget="tourist-nav">Messaging</NavItem>
							<NavItem to={"/tourist/" + this.props.currentUser.username + "/reservations"} collapsetarget="tourist-nav">Reservations</NavItem>
						</Nav>
					</CollapsingNav>
				</Navbar>
				<div className="container">
					{/*UI Components render here*/}
					{this.props.children}
				</div>
			</div>
		);
	}
}

/* ------------------------------------------------------------ *
 * Reactive data container for TouristUI ---------------------- *
 * ------------------------------------------------------------ */
export default TouristUIContainer = createContainer(function(props) {
  return {
    currentUser: Meteor.user(),
  };
}, TouristUI);