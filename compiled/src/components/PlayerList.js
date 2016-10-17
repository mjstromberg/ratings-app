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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1BsYXllckxpc3QuanMiXSwibmFtZXMiOlsiUGxheWVyTGlzdCIsInBsYXllckRhdGEiLCJoYW5kbGVQbGF5ZXJDbGljayIsIm1hcCIsInBsYXllck9iaiIsInByb3BUeXBlcyIsIlJlYWN0IiwiUHJvcFR5cGVzIiwiYXJyYXkiLCJpc1JlcXVpcmVkIiwid2luZG93Il0sIm1hcHBpbmdzIjoiOztBQUFBLElBQUlBLGFBQWEsU0FBYkEsVUFBYTtBQUFBLE1BQUVDLFVBQUYsUUFBRUEsVUFBRjtBQUFBLE1BQWNDLGlCQUFkLFFBQWNBLGlCQUFkO0FBQUEsU0FDZjtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBREY7QUFFRTtBQUFBO0FBQUE7QUFFSUQsaUJBQVdFLEdBQVgsQ0FBZTtBQUFBLGVBQ2Isb0JBQUMsZUFBRCxJQUFpQixRQUFRQyxTQUF6QixFQUFvQyxtQkFBbUJGLGlCQUF2RCxHQURhO0FBQUEsT0FBZjtBQUZKO0FBRkYsR0FEZTtBQUFBLENBQWpCOztBQWFBRixXQUFXSyxTQUFYLEdBQXVCO0FBQ3JCSixjQUFZSyxNQUFNQyxTQUFOLENBQWdCQyxLQUFoQixDQUFzQkM7QUFEYixDQUF2Qjs7QUFJQUMsT0FBT1YsVUFBUCxHQUFvQkEsVUFBcEIiLCJmaWxlIjoiUGxheWVyTGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBQbGF5ZXJMaXN0ID0gKHtwbGF5ZXJEYXRhLCBoYW5kbGVQbGF5ZXJDbGlja30pID0+IChcbiAgPGRpdj5cbiAgICA8aDI+UGxheWVyTGlzdDwvaDI+XG4gICAgPGRpdj5cbiAgICAgIHtcbiAgICAgICAgcGxheWVyRGF0YS5tYXAocGxheWVyT2JqID0+IFxuICAgICAgICAgIDxQbGF5ZXJMaXN0RW50cnkgcGxheWVyPXtwbGF5ZXJPYmp9IGhhbmRsZVBsYXllckNsaWNrPXtoYW5kbGVQbGF5ZXJDbGlja30vPlxuICAgICAgICApXG4gICAgICB9XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuKTtcblxuUGxheWVyTGlzdC5wcm9wVHlwZXMgPSB7XG4gIHBsYXllckRhdGE6IFJlYWN0LlByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkXG59O1xuXG53aW5kb3cuUGxheWVyTGlzdCA9IFBsYXllckxpc3Q7XG4iXX0=