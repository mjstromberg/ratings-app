var PlayerListEntry = ({player, handlePlayerClick}) => (
  <div onClick={() => handlePlayerClick(player)}>
    <h3>{player.name}</h3>
    <ul>
      <li>Number: {player.number}</li>
      <li>Team: {player.team}</li>
      <li>Offensive Rating: {player.ratings.offense.overall} / 10</li>
      <li>Defensive Rating: {player.ratings.defense.overall} / 10</li>
    </ul>
  </div>
);

PlayerListEntry.propTypes = {
  player: React.PropTypes.object.isRequired
};

window.PlayerListentry = PlayerListEntry;
