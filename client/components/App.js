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

  handleSearchEvent(event) {
    if (!this.isCalled) {
      $.ajax({
        url: 'https://probasketballapi.com/players',
        type: 'POST',
        data: 'api_key=' + apiKey + '&first_name=Kevin&last_name=Durant',
        sync: true
        // success: (playerRequestResponse) => {
          // this.setState({
          //   currentPlayer: 
          // });
          // console.log('here');
          // $.ajax({
          //   url: 'http://api.probasketballapi.com/advanced/player',
          //   type: 'POST',
          //   data: 'api_key=' + apiKey + '&player_id=' + playerRequestResponse.player_id,
          //   sync: true,
          //   success: (advancedRequestResponse) => {
          //     console.log(advancedRequestResponse);
          //   }
          // });
        // },
      })
      .done((res) => {
        console.log('here');
        $.ajax({
          url: 'http://api.probasketballapi.com/advanced/player',
          type: 'POST',
          data: 'api_key=' + apiKey + '&player_id=2544', // + res.player_id,
          sync: true
        })
        .done((res) => {
          console.log(res);
        });
      });
    }

    this.isCalled = true;
    setTimeout(() => { this.isCalled = false; }, 500);
  }

  render() {
    return (
      <div>
        <Nav handleSearchEvent={this.handleSearchEvent.bind(this)}/>
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
