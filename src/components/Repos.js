import React from 'react';
import { connect } from 'react-redux'

const Repos = (props) => (
  <div className="panel panel-default">
    <div className="panel-heading">
      <h3 className="panel-title">User Repos</h3>
    </div>
    <div className="panel-body">
      {props.repos.map((repo,i) => (
        <div key={i}>
          <div className="row">
            <div className="col-md-9">
              <h4><a target="_blank" href={repo.html_url}>{repo.name}</a></h4>
              <p>{repo.description}</p>
            </div>
            <div className="col-md-3">
              <span className="label label-default">{repo.watchers} Repo Watchers</span>
              <span className="label label-primary">{repo.forks} Repo Forks</span>
            </div>
          </div>
          <hr />
        </div>
      ))}
    </div>
  </div>
)

const mapStateToProps = state => {
return {
  repos: state.repos.repos
}}

export default connect(
  mapStateToProps
)(Repos);
