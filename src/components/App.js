class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      latestRatings: [],
      currentRating: null
    };
  }

  render() {
    return (
      <div>
        <Nav />
        <div className="col-md-7">
          <PlayerViewer />
        </div>
        <div className="col-md-5">
          <PlayerList />
        </div>
      </div>
    );
  }
}

// attach to window
window.App = App;