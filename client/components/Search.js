var Search = ({handleSearchEvent}) => (
  <div>
    <input type="text" placeholder="Search (Ex: LeBron James)" onChange={(event) => handleSearchEvent(event)}/>
    <button>
      <i className="material-icons">search</i>
    </button>
  </div>
);

window.Search = Search;