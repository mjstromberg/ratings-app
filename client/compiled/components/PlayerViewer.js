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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvUGxheWVyVmlld2VyLmpzIl0sIm5hbWVzIjpbIlBsYXllclZpZXdlciIsInBsYXllciIsIm5hbWUiLCJudW1iZXIiLCJ0ZWFtIiwicmF0aW5ncyIsIm9mZmVuc2UiLCJzaG9vdGluZyIsInBhc3NpbmciLCJkcmliYmxpbmciLCJhd2FyZW5lc3MiLCJvdmVyYWxsIiwiQmxvY2tpbmciLCJTdGVhbGluZyIsIlJlYm91bmRpbmciLCJwcm9wVHlwZXMiLCJSZWFjdCIsIlByb3BUeXBlcyIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSUEsZUFBZSxTQUFmQSxZQUFlO0FBQUEsTUFBRUMsTUFBRixRQUFFQSxNQUFGO0FBQUEsU0FDakI7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUtBLGFBQU9DO0FBQVosS0FERjtBQUVFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQWFELGVBQU9FO0FBQXBCLE9BREY7QUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFXRixlQUFPRztBQUFsQjtBQUZGLEtBRkY7QUFNRTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBTkY7QUFPRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFlSCxlQUFPSSxPQUFQLENBQWVDLE9BQWYsQ0FBdUJDLFFBQXRDO0FBQUE7QUFBQSxPQURGO0FBRUU7QUFBQTtBQUFBO0FBQUE7QUFBY04sZUFBT0ksT0FBUCxDQUFlQyxPQUFmLENBQXVCRSxPQUFyQztBQUFBO0FBQUEsT0FGRjtBQUdFO0FBQUE7QUFBQTtBQUFBO0FBQWdCUCxlQUFPSSxPQUFQLENBQWVDLE9BQWYsQ0FBdUJHLFNBQXZDO0FBQUE7QUFBQSxPQUhGO0FBSUU7QUFBQTtBQUFBO0FBQUE7QUFBZ0JSLGVBQU9JLE9BQVAsQ0FBZUMsT0FBZixDQUF1QkksU0FBdkM7QUFBQTtBQUFBLE9BSkY7QUFLRTtBQUFBO0FBQUE7QUFBQTtBQUFjVCxlQUFPSSxPQUFQLENBQWVDLE9BQWYsQ0FBdUJLLE9BQXJDO0FBQUE7QUFBQTtBQUxGLEtBUEY7QUFjRTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBZEY7QUFlRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFlVixlQUFPSSxPQUFQLENBQWVDLE9BQWYsQ0FBdUJNLFFBQXRDO0FBQUE7QUFBQSxPQURGO0FBRUU7QUFBQTtBQUFBO0FBQUE7QUFBZVgsZUFBT0ksT0FBUCxDQUFlQyxPQUFmLENBQXVCTyxRQUF0QztBQUFBO0FBQUEsT0FGRjtBQUdFO0FBQUE7QUFBQTtBQUFBO0FBQWlCWixlQUFPSSxPQUFQLENBQWVDLE9BQWYsQ0FBdUJRLFVBQXhDO0FBQUE7QUFBQSxPQUhGO0FBSUU7QUFBQTtBQUFBO0FBQUE7QUFBZ0JiLGVBQU9JLE9BQVAsQ0FBZUMsT0FBZixDQUF1QkksU0FBdkM7QUFBQTtBQUFBLE9BSkY7QUFLRTtBQUFBO0FBQUE7QUFBQTtBQUFjVCxlQUFPSSxPQUFQLENBQWVDLE9BQWYsQ0FBdUJLLE9BQXJDO0FBQUE7QUFBQTtBQUxGO0FBZkYsR0FEaUI7QUFBQSxDQUFuQjs7QUEwQkFYLGFBQWFlLFNBQWIsR0FBeUI7QUFDdkJkLFVBQVFlLE1BQU1DLFNBQU4sQ0FBZ0JDLE1BQWhCLENBQXVCQztBQURSLENBQXpCOztBQUlBQyxPQUFPcEIsWUFBUCxHQUFzQkEsWUFBdEIiLCJmaWxlIjoiUGxheWVyVmlld2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIFBsYXllclZpZXdlciA9ICh7cGxheWVyfSkgPT4gKFxuICA8ZGl2PlxuICAgIDxoMj57cGxheWVyLm5hbWV9PC9oMj5cbiAgICA8dWw+XG4gICAgICA8bGk+TnVtYmVyOiB7cGxheWVyLm51bWJlcn08L2xpPlxuICAgICAgPGxpPlRlYW06IHtwbGF5ZXIudGVhbX08L2xpPlxuICAgIDwvdWw+XG4gICAgPGgzPk9mZmVuc2l2ZSBSYXRpbmc6PC9oMz5cbiAgICA8dWw+XG4gICAgICA8bGk+U2hvb3Rpbmc6IHtwbGF5ZXIucmF0aW5ncy5vZmZlbnNlLnNob290aW5nfSAvIDEwPC9saT5cbiAgICAgIDxsaT5QYXNzaW5nOiB7cGxheWVyLnJhdGluZ3Mub2ZmZW5zZS5wYXNzaW5nfSAvIDEwPC9saT5cbiAgICAgIDxsaT5EcmliYmxpbmc6IHtwbGF5ZXIucmF0aW5ncy5vZmZlbnNlLmRyaWJibGluZ30gLyAxMDwvbGk+XG4gICAgICA8bGk+QXdhcmVuZXNzOiB7cGxheWVyLnJhdGluZ3Mub2ZmZW5zZS5hd2FyZW5lc3N9IC8gMTA8L2xpPlxuICAgICAgPGxpPk92ZXJhbGw6IHtwbGF5ZXIucmF0aW5ncy5vZmZlbnNlLm92ZXJhbGx9IC8gMTA8L2xpPlxuICAgIDwvdWw+XG4gICAgPGgzPkRlZmVuc2l2ZSBSYXRpbmc6PC9oMz5cbiAgICA8dWw+XG4gICAgICA8bGk+QmxvY2tpbmc6IHtwbGF5ZXIucmF0aW5ncy5vZmZlbnNlLkJsb2NraW5nfSAvIDEwPC9saT5cbiAgICAgIDxsaT5TdGVhbGluZzoge3BsYXllci5yYXRpbmdzLm9mZmVuc2UuU3RlYWxpbmd9IC8gMTA8L2xpPlxuICAgICAgPGxpPlJlYm91bmRpbmc6IHtwbGF5ZXIucmF0aW5ncy5vZmZlbnNlLlJlYm91bmRpbmd9IC8gMTA8L2xpPlxuICAgICAgPGxpPkF3YXJlbmVzczoge3BsYXllci5yYXRpbmdzLm9mZmVuc2UuYXdhcmVuZXNzfSAvIDEwPC9saT5cbiAgICAgIDxsaT5PdmVyYWxsOiB7cGxheWVyLnJhdGluZ3Mub2ZmZW5zZS5vdmVyYWxsfSAvIDEwPC9saT5cbiAgICA8L3VsPlxuICA8L2Rpdj5cbik7XG5cblBsYXllclZpZXdlci5wcm9wVHlwZXMgPSB7XG4gIHBsYXllcjogUmVhY3QuUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXG59O1xuXG53aW5kb3cuUGxheWVyVmlld2VyID0gUGxheWVyVmlld2VyO1xuIl19