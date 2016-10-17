class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPlayersList: window.examplePlayers,
      currentPlayer: window.examplePlayers[0]
    };
  }

  handlePlayerClick(player) {
    this.setState({
      currentPlayer: player
    });
  }

  render() {
    return (
      <div>
        <Nav />
        <div>
          <PlayerViewer player={this.state.currentPlayer} />
        </div>
        <div>
          <PlayerList playerData={this.state.currentPlayersList} handlePlayerClick={this.handlePlayerClick.bind(this)}/>
        </div>
      </div>
    );
  }
}

// attach to window
window.App = App;
