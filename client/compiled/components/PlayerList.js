"use strict";

var PlayerList = function PlayerList(_ref) {
  var playerData = _ref.playerData;
  var handlePlayerClick = _ref.handlePlayerClick;
  return React.createElement(
    "div",
    null,
    React.createElement(
      "h2",
      null,
      "PlayerList"
    ),
    React.createElement(
      "div",
      null,
      playerData.map(function (playerObj) {
        return React.createElement(PlayerListEntry, { player: playerObj, handlePlayerClick: handlePlayerClick });
      })
    )
  );
};

PlayerList.propTypes = {
  playerData: React.PropTypes.array.isRequired
};

window.PlayerList = PlayerList;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvUGxheWVyTGlzdC5qcyJdLCJuYW1lcyI6WyJQbGF5ZXJMaXN0IiwicGxheWVyRGF0YSIsImhhbmRsZVBsYXllckNsaWNrIiwibWFwIiwicGxheWVyT2JqIiwicHJvcFR5cGVzIiwiUmVhY3QiLCJQcm9wVHlwZXMiLCJhcnJheSIsImlzUmVxdWlyZWQiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSUEsYUFBYSxTQUFiQSxVQUFhO0FBQUEsTUFBRUMsVUFBRixRQUFFQSxVQUFGO0FBQUEsTUFBY0MsaUJBQWQsUUFBY0EsaUJBQWQ7QUFBQSxTQUNmO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FERjtBQUVFO0FBQUE7QUFBQTtBQUVJRCxpQkFBV0UsR0FBWCxDQUFlO0FBQUEsZUFDYixvQkFBQyxlQUFELElBQWlCLFFBQVFDLFNBQXpCLEVBQW9DLG1CQUFtQkYsaUJBQXZELEdBRGE7QUFBQSxPQUFmO0FBRko7QUFGRixHQURlO0FBQUEsQ0FBakI7O0FBYUFGLFdBQVdLLFNBQVgsR0FBdUI7QUFDckJKLGNBQVlLLE1BQU1DLFNBQU4sQ0FBZ0JDLEtBQWhCLENBQXNCQztBQURiLENBQXZCOztBQUlBQyxPQUFPVixVQUFQLEdBQW9CQSxVQUFwQiIsImZpbGUiOiJQbGF5ZXJMaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIFBsYXllckxpc3QgPSAoe3BsYXllckRhdGEsIGhhbmRsZVBsYXllckNsaWNrfSkgPT4gKFxuICA8ZGl2PlxuICAgIDxoMj5QbGF5ZXJMaXN0PC9oMj5cbiAgICA8ZGl2PlxuICAgICAge1xuICAgICAgICBwbGF5ZXJEYXRhLm1hcChwbGF5ZXJPYmogPT4gXG4gICAgICAgICAgPFBsYXllckxpc3RFbnRyeSBwbGF5ZXI9e3BsYXllck9ian0gaGFuZGxlUGxheWVyQ2xpY2s9e2hhbmRsZVBsYXllckNsaWNrfS8+XG4gICAgICAgIClcbiAgICAgIH1cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4pO1xuXG5QbGF5ZXJMaXN0LnByb3BUeXBlcyA9IHtcbiAgcGxheWVyRGF0YTogUmVhY3QuUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWRcbn07XG5cbndpbmRvdy5QbGF5ZXJMaXN0ID0gUGxheWVyTGlzdDtcbiJdfQ==