import axios from 'axios';

export function getUser(user){
  const client_id = '62536dba492d7ec14dca';
  const client_secret = 'bff06227d382e37905e558e80e8fb6f0a4ade067';
  const url = 'http://api.github.com/users/' + user + '?client_id=' + client_id + '&client_secret=' + client_secret;

  return function(dispatch) {
    dispatch({type: "GET_USER"});
    axios.get(url)
      .then((response) => {
        dispatch({type:"GET_USER_FULFILLED",user: response.data})
      })
      .catch((err) => {
        dispatch({type:"GET_USER_REJECTED", user: err})
      })
  }
}

export function getRepos(user){
  const client_id = '62536dba492d7ec14dca';
  const client_secret = 'bff06227d382e37905e558e80e8fb6f0a4ade067';
  const url = 'http://api.github.com/users/' + user + '/repos?client_id=' + client_id + '&client_secret=' + client_secret;

  return function(dispatch){
    dispatch({type: "GET_REPOS"});
    axios.get(url)
      .then((response) => {
        dispatch({type: "GET_REPOS_FULFILLED", repos: response.data})
      })
      .catch((err) => {
        dispatch({type: "GET_REPOS_REJECTED", repos: err})
      })
  }
}
