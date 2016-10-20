"use strict";

var PlayerListEntry = function PlayerListEntry(_ref) {
  var player = _ref.player;
  var handlePlayerClick = _ref.handlePlayerClick;
  return React.createElement(
    "div",
    { onClick: function onClick() {
        return handlePlayerClick(player);
      } },
    React.createElement(
      "h3",
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
      ),
      React.createElement(
        "li",
        null,
        "Offensive Rating: ",
        player.ratings.offense.overall,
        " / 10"
      ),
      React.createElement(
        "li",
        null,
        "Defensive Rating: ",
        player.ratings.defense.overall,
        " / 10"
      )
    )
  );
};

PlayerListEntry.propTypes = {
  player: React.PropTypes.object.isRequired
};

window.PlayerListentry = PlayerListEntry;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvUGxheWVyTGlzdEVudHJ5LmpzIl0sIm5hbWVzIjpbIlBsYXllckxpc3RFbnRyeSIsInBsYXllciIsImhhbmRsZVBsYXllckNsaWNrIiwibmFtZSIsIm51bWJlciIsInRlYW0iLCJyYXRpbmdzIiwib2ZmZW5zZSIsIm92ZXJhbGwiLCJkZWZlbnNlIiwicHJvcFR5cGVzIiwiUmVhY3QiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwid2luZG93IiwiUGxheWVyTGlzdGVudHJ5Il0sIm1hcHBpbmdzIjoiOztBQUFBLElBQUlBLGtCQUFrQixTQUFsQkEsZUFBa0I7QUFBQSxNQUFFQyxNQUFGLFFBQUVBLE1BQUY7QUFBQSxNQUFVQyxpQkFBVixRQUFVQSxpQkFBVjtBQUFBLFNBQ3BCO0FBQUE7QUFBQSxNQUFLLFNBQVM7QUFBQSxlQUFNQSxrQkFBa0JELE1BQWxCLENBQU47QUFBQSxPQUFkO0FBQ0U7QUFBQTtBQUFBO0FBQUtBLGFBQU9FO0FBQVosS0FERjtBQUVFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQWFGLGVBQU9HO0FBQXBCLE9BREY7QUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFXSCxlQUFPSTtBQUFsQixPQUZGO0FBR0U7QUFBQTtBQUFBO0FBQUE7QUFBdUJKLGVBQU9LLE9BQVAsQ0FBZUMsT0FBZixDQUF1QkMsT0FBOUM7QUFBQTtBQUFBLE9BSEY7QUFJRTtBQUFBO0FBQUE7QUFBQTtBQUF1QlAsZUFBT0ssT0FBUCxDQUFlRyxPQUFmLENBQXVCRCxPQUE5QztBQUFBO0FBQUE7QUFKRjtBQUZGLEdBRG9CO0FBQUEsQ0FBdEI7O0FBWUFSLGdCQUFnQlUsU0FBaEIsR0FBNEI7QUFDMUJULFVBQVFVLE1BQU1DLFNBQU4sQ0FBZ0JDLE1BQWhCLENBQXVCQztBQURMLENBQTVCOztBQUlBQyxPQUFPQyxlQUFQLEdBQXlCaEIsZUFBekIiLCJmaWxlIjoiUGxheWVyTGlzdEVudHJ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIFBsYXllckxpc3RFbnRyeSA9ICh7cGxheWVyLCBoYW5kbGVQbGF5ZXJDbGlja30pID0+IChcbiAgPGRpdiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVQbGF5ZXJDbGljayhwbGF5ZXIpfT5cbiAgICA8aDM+e3BsYXllci5uYW1lfTwvaDM+XG4gICAgPHVsPlxuICAgICAgPGxpPk51bWJlcjoge3BsYXllci5udW1iZXJ9PC9saT5cbiAgICAgIDxsaT5UZWFtOiB7cGxheWVyLnRlYW19PC9saT5cbiAgICAgIDxsaT5PZmZlbnNpdmUgUmF0aW5nOiB7cGxheWVyLnJhdGluZ3Mub2ZmZW5zZS5vdmVyYWxsfSAvIDEwPC9saT5cbiAgICAgIDxsaT5EZWZlbnNpdmUgUmF0aW5nOiB7cGxheWVyLnJhdGluZ3MuZGVmZW5zZS5vdmVyYWxsfSAvIDEwPC9saT5cbiAgICA8L3VsPlxuICA8L2Rpdj5cbik7XG5cblBsYXllckxpc3RFbnRyeS5wcm9wVHlwZXMgPSB7XG4gIHBsYXllcjogUmVhY3QuUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXG59O1xuXG53aW5kb3cuUGxheWVyTGlzdGVudHJ5ID0gUGxheWVyTGlzdEVudHJ5O1xuIl19