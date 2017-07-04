const repos = (state = {repos:[]}, action) => {

  switch (action.type) {
    case 'GET_REPOS_FULFILLED':
      return Object.assign({}, state, {
        repos: action.repos
      })      
    default:
      return state;
  }
}

export default repos;
