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
      </div>
    );
  }
}

// attach to window
window.App = App;