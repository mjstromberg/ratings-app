var PlayerList = ({playerData, handlePlayerClick}) => (
  <div>
    <h2>PlayerList</h2>
    <div>
      {
        playerData.map(playerObj => 
          <PlayerListEntry player={playerObj} handlePlayerClick={handlePlayerClick}/>
        )
      }
    </div>
  </div>
);

PlayerList.propTypes = {
  playerData: React.PropTypes.array.isRequired
};

window.PlayerList = PlayerList;
