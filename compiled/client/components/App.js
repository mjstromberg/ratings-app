"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      currentPlayersList: window.examplePlayers,
      currentPlayer: window.examplePlayers[0]
    };
    return _this;
  }

  _createClass(App, [{
    key: "handlePlayerClick",
    value: function handlePlayerClick(player) {
      this.setState({
        currentPlayer: player
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(Nav, null),
        React.createElement(
          "div",
          null,
          React.createElement(PlayerViewer, { player: this.state.currentPlayer })
        ),
        React.createElement(
          "div",
          null,
          React.createElement(PlayerList, { playerData: this.state.currentPlayersList, handlePlayerClick: this.handlePlayerClick.bind(this) })
        )
      );
    }
  }]);

  return App;
}(React.Component);

// attach to window


window.App = App;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9jb21wb25lbnRzL0FwcC5qcyJdLCJuYW1lcyI6WyJBcHAiLCJwcm9wcyIsInN0YXRlIiwiY3VycmVudFBsYXllcnNMaXN0Iiwid2luZG93IiwiZXhhbXBsZVBsYXllcnMiLCJjdXJyZW50UGxheWVyIiwicGxheWVyIiwic2V0U3RhdGUiLCJoYW5kbGVQbGF5ZXJDbGljayIsImJpbmQiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxHOzs7QUFDSixlQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsMEdBQ1hBLEtBRFc7O0FBR2pCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQywwQkFBb0JDLE9BQU9DLGNBRGhCO0FBRVhDLHFCQUFlRixPQUFPQyxjQUFQLENBQXNCLENBQXRCO0FBRkosS0FBYjtBQUhpQjtBQU9sQjs7OztzQ0FFaUJFLE0sRUFBUTtBQUN4QixXQUFLQyxRQUFMLENBQWM7QUFDWkYsdUJBQWVDO0FBREgsT0FBZDtBQUdEOzs7NkJBRVE7QUFDUCxhQUNFO0FBQUE7QUFBQTtBQUNFLDRCQUFDLEdBQUQsT0FERjtBQUVFO0FBQUE7QUFBQTtBQUNFLDhCQUFDLFlBQUQsSUFBYyxRQUFRLEtBQUtMLEtBQUwsQ0FBV0ksYUFBakM7QUFERixTQUZGO0FBS0U7QUFBQTtBQUFBO0FBQ0UsOEJBQUMsVUFBRCxJQUFZLFlBQVksS0FBS0osS0FBTCxDQUFXQyxrQkFBbkMsRUFBdUQsbUJBQW1CLEtBQUtNLGlCQUFMLENBQXVCQyxJQUF2QixDQUE0QixJQUE1QixDQUExRTtBQURGO0FBTEYsT0FERjtBQVdEOzs7O0VBNUJlQyxNQUFNQyxTOztBQStCeEI7OztBQUNBUixPQUFPSixHQUFQLEdBQWFBLEdBQWIiLCJmaWxlIjoiQXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgY3VycmVudFBsYXllcnNMaXN0OiB3aW5kb3cuZXhhbXBsZVBsYXllcnMsXG4gICAgICBjdXJyZW50UGxheWVyOiB3aW5kb3cuZXhhbXBsZVBsYXllcnNbMF1cbiAgICB9O1xuICB9XG5cbiAgaGFuZGxlUGxheWVyQ2xpY2socGxheWVyKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBjdXJyZW50UGxheWVyOiBwbGF5ZXJcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPE5hdiAvPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxQbGF5ZXJWaWV3ZXIgcGxheWVyPXt0aGlzLnN0YXRlLmN1cnJlbnRQbGF5ZXJ9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxQbGF5ZXJMaXN0IHBsYXllckRhdGE9e3RoaXMuc3RhdGUuY3VycmVudFBsYXllcnNMaXN0fSBoYW5kbGVQbGF5ZXJDbGljaz17dGhpcy5oYW5kbGVQbGF5ZXJDbGljay5iaW5kKHRoaXMpfS8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG4vLyBhdHRhY2ggdG8gd2luZG93XG53aW5kb3cuQXBwID0gQXBwO1xuIl19