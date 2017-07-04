const user = (state = {}, action) => {

  switch (action.type) {
    case 'GET_USER_FULFILLED':
      return Object.assign({}, state, {
        user: action.user,
      })
      default:
      return state;
  }

}

export default user;
