import React from "react";

function Search({searchchange}) {
  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder="Search your Recent Transactions"
        onChange={searchchange}
      />
      <i className="circular search link icon"></i>
    </div>
  );
}

export default Search;
