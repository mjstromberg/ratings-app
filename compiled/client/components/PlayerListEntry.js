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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9jb21wb25lbnRzL1BsYXllckxpc3RFbnRyeS5qcyJdLCJuYW1lcyI6WyJQbGF5ZXJMaXN0RW50cnkiLCJwbGF5ZXIiLCJoYW5kbGVQbGF5ZXJDbGljayIsIm5hbWUiLCJudW1iZXIiLCJ0ZWFtIiwicmF0aW5ncyIsIm9mZmVuc2UiLCJvdmVyYWxsIiwiZGVmZW5zZSIsInByb3BUeXBlcyIsIlJlYWN0IiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsIndpbmRvdyIsIlBsYXllckxpc3RlbnRyeSJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJQSxrQkFBa0IsU0FBbEJBLGVBQWtCO0FBQUEsTUFBRUMsTUFBRixRQUFFQSxNQUFGO0FBQUEsTUFBVUMsaUJBQVYsUUFBVUEsaUJBQVY7QUFBQSxTQUNwQjtBQUFBO0FBQUEsTUFBSyxTQUFTO0FBQUEsZUFBTUEsa0JBQWtCRCxNQUFsQixDQUFOO0FBQUEsT0FBZDtBQUNFO0FBQUE7QUFBQTtBQUFLQSxhQUFPRTtBQUFaLEtBREY7QUFFRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFhRixlQUFPRztBQUFwQixPQURGO0FBRUU7QUFBQTtBQUFBO0FBQUE7QUFBV0gsZUFBT0k7QUFBbEIsT0FGRjtBQUdFO0FBQUE7QUFBQTtBQUFBO0FBQXVCSixlQUFPSyxPQUFQLENBQWVDLE9BQWYsQ0FBdUJDLE9BQTlDO0FBQUE7QUFBQSxPQUhGO0FBSUU7QUFBQTtBQUFBO0FBQUE7QUFBdUJQLGVBQU9LLE9BQVAsQ0FBZUcsT0FBZixDQUF1QkQsT0FBOUM7QUFBQTtBQUFBO0FBSkY7QUFGRixHQURvQjtBQUFBLENBQXRCOztBQVlBUixnQkFBZ0JVLFNBQWhCLEdBQTRCO0FBQzFCVCxVQUFRVSxNQUFNQyxTQUFOLENBQWdCQyxNQUFoQixDQUF1QkM7QUFETCxDQUE1Qjs7QUFJQUMsT0FBT0MsZUFBUCxHQUF5QmhCLGVBQXpCIiwiZmlsZSI6IlBsYXllckxpc3RFbnRyeS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBQbGF5ZXJMaXN0RW50cnkgPSAoe3BsYXllciwgaGFuZGxlUGxheWVyQ2xpY2t9KSA9PiAoXG4gIDxkaXYgb25DbGljaz17KCkgPT4gaGFuZGxlUGxheWVyQ2xpY2socGxheWVyKX0+XG4gICAgPGgzPntwbGF5ZXIubmFtZX08L2gzPlxuICAgIDx1bD5cbiAgICAgIDxsaT5OdW1iZXI6IHtwbGF5ZXIubnVtYmVyfTwvbGk+XG4gICAgICA8bGk+VGVhbToge3BsYXllci50ZWFtfTwvbGk+XG4gICAgICA8bGk+T2ZmZW5zaXZlIFJhdGluZzoge3BsYXllci5yYXRpbmdzLm9mZmVuc2Uub3ZlcmFsbH0gLyAxMDwvbGk+XG4gICAgICA8bGk+RGVmZW5zaXZlIFJhdGluZzoge3BsYXllci5yYXRpbmdzLmRlZmVuc2Uub3ZlcmFsbH0gLyAxMDwvbGk+XG4gICAgPC91bD5cbiAgPC9kaXY+XG4pO1xuXG5QbGF5ZXJMaXN0RW50cnkucHJvcFR5cGVzID0ge1xuICBwbGF5ZXI6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxufTtcblxud2luZG93LlBsYXllckxpc3RlbnRyeSA9IFBsYXllckxpc3RFbnRyeTtcbiJdfQ==