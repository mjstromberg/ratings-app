var PlayerViewer = ({player}) => (
  <div>
    <h2>{player.name}</h2>
    <ul>
      <li>Number: {player.number}</li>
      <li>Team: {player.team}</li>
    </ul>
    <h3>Offensive Rating:</h3>
    <ul>
      <li>Shooting: {player.ratings.offense.shooting} / 10</li>
      <li>Passing: {player.ratings.offense.passing} / 10</li>
      <li>Dribbling: {player.ratings.offense.dribbling} / 10</li>
      <li>Awareness: {player.ratings.offense.awareness} / 10</li>
      <li>Overall: {player.ratings.offense.overall} / 10</li>
    </ul>
    <h3>Defensive Rating:</h3>
    <ul>
      <li>Blocking: {player.ratings.offense.Blocking} / 10</li>
      <li>Stealing: {player.ratings.offense.Stealing} / 10</li>
      <li>Rebounding: {player.ratings.offense.Rebounding} / 10</li>
      <li>Awareness: {player.ratings.offense.awareness} / 10</li>
      <li>Overall: {player.ratings.offense.overall} / 10</li>
    </ul>
  </div>
);

PlayerViewer.propTypes = {
  player: React.PropTypes.object.isRequired
};

window.PlayerViewer = PlayerViewer;
