"use strict";

var PlayerViewer = function PlayerViewer(_ref) {
  var player = _ref.player;
  return React.createElement(
    "div",
    null,
    React.createElement(
      "h2",
      null,
      player.name
    ),
    React.createElement(
      "ul",
      null,
      React.createElement(
        "li",
        null,
        "Number: ",
        player.number
      ),
      React.createElement(
        "li",
        null,
        "Team: ",
        player.team
      )
    ),
    React.createElement(
      "h3",
      null,
      "Offensive Rating:"
    ),
    React.createElement(
      "ul",
      null,
      React.createElement(
        "li",
        null,
        "Shooting: ",
        player.ratings.offense.shooting,
        " / 10"
      ),
      React.createElement(
        "li",
        null,
        "Passing: ",
        player.ratings.offense.passing,
        " / 10"
      ),
      React.createElement(
        "li",
        null,
        "Dribbling: ",
        player.ratings.offense.dribbling,
        " / 10"
      ),
      React.createElement(
        "li",
        null,
        "Awareness: ",
        player.ratings.offense.awareness,
        " / 10"
      ),
      React.createElement(
        "li",
        null,
        "Overall: ",
        player.ratings.offense.overall,
        " / 10"
      )
    ),
    React.createElement(
      "h3",
      null,
      "Defensive Rating:"
    ),
    React.createElement(
      "ul",
      null,
      React.createElement(
        "li",
        null,
        "Blocking: ",
        player.ratings.offense.Blocking,
        " / 10"
      ),
      React.createElement(
        "li",
        null,
        "Stealing: ",
        player.ratings.offense.Stealing,
        " / 10"
      ),
      React.createElement(
        "li",
        null,
        "Rebounding: ",
        player.ratings.offense.Rebounding,
        " / 10"
      ),
      React.createElement(
        "li",
        null,
        "Awareness: ",
        player.ratings.offense.awareness,
        " / 10"
      ),
      React.createElement(
        "li",
        null,
        "Overall: ",
        player.ratings.offense.overall,
        " / 10"
      )
    )
  );
};

PlayerViewer.propTypes = {
  player: React.PropTypes.object.isRequired
};

window.PlayerViewer = PlayerViewer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1BsYXllclZpZXdlci5qcyJdLCJuYW1lcyI6WyJQbGF5ZXJWaWV3ZXIiLCJwbGF5ZXIiLCJuYW1lIiwibnVtYmVyIiwidGVhbSIsInJhdGluZ3MiLCJvZmZlbnNlIiwic2hvb3RpbmciLCJwYXNzaW5nIiwiZHJpYmJsaW5nIiwiYXdhcmVuZXNzIiwib3ZlcmFsbCIsIkJsb2NraW5nIiwiU3RlYWxpbmciLCJSZWJvdW5kaW5nIiwicHJvcFR5cGVzIiwiUmVhY3QiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwid2luZG93Il0sIm1hcHBpbmdzIjoiOztBQUFBLElBQUlBLGVBQWUsU0FBZkEsWUFBZTtBQUFBLE1BQUVDLE1BQUYsUUFBRUEsTUFBRjtBQUFBLFNBQ2pCO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFLQSxhQUFPQztBQUFaLEtBREY7QUFFRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFhRCxlQUFPRTtBQUFwQixPQURGO0FBRUU7QUFBQTtBQUFBO0FBQUE7QUFBV0YsZUFBT0c7QUFBbEI7QUFGRixLQUZGO0FBTUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU5GO0FBT0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBZUgsZUFBT0ksT0FBUCxDQUFlQyxPQUFmLENBQXVCQyxRQUF0QztBQUFBO0FBQUEsT0FERjtBQUVFO0FBQUE7QUFBQTtBQUFBO0FBQWNOLGVBQU9JLE9BQVAsQ0FBZUMsT0FBZixDQUF1QkUsT0FBckM7QUFBQTtBQUFBLE9BRkY7QUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFnQlAsZUFBT0ksT0FBUCxDQUFlQyxPQUFmLENBQXVCRyxTQUF2QztBQUFBO0FBQUEsT0FIRjtBQUlFO0FBQUE7QUFBQTtBQUFBO0FBQWdCUixlQUFPSSxPQUFQLENBQWVDLE9BQWYsQ0FBdUJJLFNBQXZDO0FBQUE7QUFBQSxPQUpGO0FBS0U7QUFBQTtBQUFBO0FBQUE7QUFBY1QsZUFBT0ksT0FBUCxDQUFlQyxPQUFmLENBQXVCSyxPQUFyQztBQUFBO0FBQUE7QUFMRixLQVBGO0FBY0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQWRGO0FBZUU7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBZVYsZUFBT0ksT0FBUCxDQUFlQyxPQUFmLENBQXVCTSxRQUF0QztBQUFBO0FBQUEsT0FERjtBQUVFO0FBQUE7QUFBQTtBQUFBO0FBQWVYLGVBQU9JLE9BQVAsQ0FBZUMsT0FBZixDQUF1Qk8sUUFBdEM7QUFBQTtBQUFBLE9BRkY7QUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFpQlosZUFBT0ksT0FBUCxDQUFlQyxPQUFmLENBQXVCUSxVQUF4QztBQUFBO0FBQUEsT0FIRjtBQUlFO0FBQUE7QUFBQTtBQUFBO0FBQWdCYixlQUFPSSxPQUFQLENBQWVDLE9BQWYsQ0FBdUJJLFNBQXZDO0FBQUE7QUFBQSxPQUpGO0FBS0U7QUFBQTtBQUFBO0FBQUE7QUFBY1QsZUFBT0ksT0FBUCxDQUFlQyxPQUFmLENBQXVCSyxPQUFyQztBQUFBO0FBQUE7QUFMRjtBQWZGLEdBRGlCO0FBQUEsQ0FBbkI7O0FBMEJBWCxhQUFhZSxTQUFiLEdBQXlCO0FBQ3ZCZCxVQUFRZSxNQUFNQyxTQUFOLENBQWdCQyxNQUFoQixDQUF1QkM7QUFEUixDQUF6Qjs7QUFJQUMsT0FBT3BCLFlBQVAsR0FBc0JBLFlBQXRCIiwiZmlsZSI6IlBsYXllclZpZXdlci5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBQbGF5ZXJWaWV3ZXIgPSAoe3BsYXllcn0pID0+IChcbiAgPGRpdj5cbiAgICA8aDI+e3BsYXllci5uYW1lfTwvaDI+XG4gICAgPHVsPlxuICAgICAgPGxpPk51bWJlcjoge3BsYXllci5udW1iZXJ9PC9saT5cbiAgICAgIDxsaT5UZWFtOiB7cGxheWVyLnRlYW19PC9saT5cbiAgICA8L3VsPlxuICAgIDxoMz5PZmZlbnNpdmUgUmF0aW5nOjwvaDM+XG4gICAgPHVsPlxuICAgICAgPGxpPlNob290aW5nOiB7cGxheWVyLnJhdGluZ3Mub2ZmZW5zZS5zaG9vdGluZ30gLyAxMDwvbGk+XG4gICAgICA8bGk+UGFzc2luZzoge3BsYXllci5yYXRpbmdzLm9mZmVuc2UucGFzc2luZ30gLyAxMDwvbGk+XG4gICAgICA8bGk+RHJpYmJsaW5nOiB7cGxheWVyLnJhdGluZ3Mub2ZmZW5zZS5kcmliYmxpbmd9IC8gMTA8L2xpPlxuICAgICAgPGxpPkF3YXJlbmVzczoge3BsYXllci5yYXRpbmdzLm9mZmVuc2UuYXdhcmVuZXNzfSAvIDEwPC9saT5cbiAgICAgIDxsaT5PdmVyYWxsOiB7cGxheWVyLnJhdGluZ3Mub2ZmZW5zZS5vdmVyYWxsfSAvIDEwPC9saT5cbiAgICA8L3VsPlxuICAgIDxoMz5EZWZlbnNpdmUgUmF0aW5nOjwvaDM+XG4gICAgPHVsPlxuICAgICAgPGxpPkJsb2NraW5nOiB7cGxheWVyLnJhdGluZ3Mub2ZmZW5zZS5CbG9ja2luZ30gLyAxMDwvbGk+XG4gICAgICA8bGk+U3RlYWxpbmc6IHtwbGF5ZXIucmF0aW5ncy5vZmZlbnNlLlN0ZWFsaW5nfSAvIDEwPC9saT5cbiAgICAgIDxsaT5SZWJvdW5kaW5nOiB7cGxheWVyLnJhdGluZ3Mub2ZmZW5zZS5SZWJvdW5kaW5nfSAvIDEwPC9saT5cbiAgICAgIDxsaT5Bd2FyZW5lc3M6IHtwbGF5ZXIucmF0aW5ncy5vZmZlbnNlLmF3YXJlbmVzc30gLyAxMDwvbGk+XG4gICAgICA8bGk+T3ZlcmFsbDoge3BsYXllci5yYXRpbmdzLm9mZmVuc2Uub3ZlcmFsbH0gLyAxMDwvbGk+XG4gICAgPC91bD5cbiAgPC9kaXY+XG4pO1xuXG5QbGF5ZXJWaWV3ZXIucHJvcFR5cGVzID0ge1xuICBwbGF5ZXI6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxufTtcblxud2luZG93LlBsYXllclZpZXdlciA9IFBsYXllclZpZXdlcjtcbiJdfQ==