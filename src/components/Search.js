import React, {Component} from 'react';

class Search extends Component {
  render() {
    return(
      <form action="" method="POST" className="form-inline mb-15">
        <div className="form-group">
          <input type="text" className="form-control" id="" placeholder="Search..." />
        </div>
        <button type="submit" className="btn btn-primary"><i className="fa fa-search"></i> Search</button>
      </form>
    );
  }
}

export default Search;