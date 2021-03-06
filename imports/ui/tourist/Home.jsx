import {Meteor} from 'meteor/meteor';
import React from 'react';
import PropTypes from 'prop-types';
import { createContainer } from 'meteor/react-meteor-data';
import {FluidContainer, Row, Col, Img, NavButton} from '../common/Components';

/* ------------------------------------------------------------ *
 * Homepage for tourist --------------------------------------- *
 * ------------------------------------------------------------ */
export class Home extends React.Component {
	render(){
		return (
			<FluidContainer>
				<div className="well">
					<h2>{this.props.currentUser.profile.name}</h2>
					<Row>
						<Col widthXS="4"><Img source={'http://www.lovemarks.com/wp-content/uploads/profile-avatars/default-avatar-tech-guy.png'}/></Col>
						<Col widthXS="8">
							<Row>
								<Col width="4"><strong>Email</strong></Col>
								<Col width="8">{this.props.currentUser.emails[0].address}</Col>
							</Row>
							<Row>
								<Col width="4"><strong>Member Since</strong></Col>
								<Col width="8">{this.props.currentUser.createdAt}</Col>
							</Row>
							<Row>
								<Col width="4"><strong>Username</strong></Col>
								<Col width="8">{this.props.currentUser.username}</Col>
							</Row>
							<Row>
								<Col width="4"><strong>Url</strong></Col>
								<Col width="8"><a href={this.props.currentUser.profile.url}>{this.props.currentUser.profile.url}</a></Col>
							</Row>
							<Row>
								<Col width="4"><strong>Bio</strong></Col>
								<Col width="8">{this.props.currentUser.profile.bio}</Col>
							</Row>
						</Col>
					</Row>
					<Row>
						<Col width="12">
							<NavButton type="default" to={"/"+ this.props.currentUser.profile.role + "/" + this.props.currentUser.username + "/" + "profile"}>Update Profile</NavButton>
						</Col>
					</Row>
				</div>
			</FluidContainer>
		);
	}
}

/* ------------------------------------------------------------ *
 * Reactive data container for Homepage ----------------------- *
 * ------------------------------------------------------------ */
export default HomeContainer = createContainer(function(props) {
  return {
    currentUser: Meteor.user(),
  };
}, Home);