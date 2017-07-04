import React, { Component } from 'react';
import Search from './Search';
import Results from './Results';

import { connect } from 'react-redux';
import * as actions from '../actions';

class App extends Component {

  onChange(e){
    const user = e.target.value;
    this.props.dispatch(actions.getUser(user));
    this.props.dispatch(actions.getRepos(user));
  }

  render() {

    return (
      <div className="container">
        <Search onChange={this.onChange.bind(this)}/>
        {this.props.user &&
          <Results user={this.props.user} repos={this.props.repos}/>
        }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user.user,
    repos: state.repos.repos
  }
}

const mapDispatchToProps = dispatch => ({
  dispatch
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
