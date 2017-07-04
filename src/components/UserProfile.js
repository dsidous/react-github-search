import React from 'react';
import { connect } from 'react-redux';

const UserProfile = (props) => (
  <div className="panel panel-default">
    <div className="panel-heading">
      <h3 className="panel-title">{props.user.name}</h3>
    </div>
    <div className="panel-body">
      <div className="row">
        <div className="col-md-4">
          <img className="img-thumbnail" src={props.user.avatar_url} alt="" />
          <a className="btn btn-default btn-block" target="_blank" href={props.user.html_url}>View Profile</a>
        </div>
        <div className="col-md-8">
          <div className="stats">
            <span className="label label-default">{props.user.public_repos} Public Repos</span>
            <span className="label label-primary">{props.user.public_gists} Public Gists</span>
            <span className="label label-success">{props.user.followers} Followers</span>
            <span className="label label-info">{props.user.following} Following</span>
          </div>
          <br />
          <ul className="list-group">
            <li className="list-group-item"><strong>Username: </strong>{props.user.login}</li>
            <li className="list-group-item"><strong>Location: </strong>{props.user.location}</li>
            <li className="list-group-item"><strong>Email: </strong>{props.user.email}</li>
            <li className="list-group-item"><strong>Blog: </strong>{props.user.blog}</li>
            <li className="list-group-item"><strong>Member since: </strong>{props.user.created_at}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
)

const mapStateToProps = state => {
return {
  user: state.user.user
}}

export default connect(
  mapStateToProps
)(UserProfile);
