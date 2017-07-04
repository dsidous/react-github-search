import React from 'react'

const Search = (props) => (
  <div className="row">
    <div className="col-md-12">
      <form className="well">
        <div className="form-group">
          <input className="form-control" type="text" onChange={props.onChange} placeholder="Search GitHub User..." />
        </div>
      </form>
    </div>
  </div>
)

export default Search;
