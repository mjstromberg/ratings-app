var Nav = ({handleSearchEvent}) => (
  <div>
    <div>NBA Player Stats: Last Game</div>
    <ul>
      <li>Home</li>
      <li>Players</li>
      <Search handleSearchEvent={handleSearchEvent} />
    </ul>
  </div>
);

window.Nav = Nav;