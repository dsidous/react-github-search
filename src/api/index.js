export const getUser = (url) => (
  fetch(url, {
    method :'get'
  }).then(function(res){
    return res.json()
  })
)

export const getRepos = (user) => {
  const client_id = 'Iv1.c0c8cf088dc52385';
  const client_secret = '55330cbe6112af2a375d661c8159f3a1a5aa642d';
  const url = 'http://api.github.com/users/' + user + '/repos?client_id=' + client_id + '&client_secret=' + client_secret;

  return(
    fetch(url, {
      method: 'get'
    }).then(function(res) {
      return res.json()
    })
  )
}
