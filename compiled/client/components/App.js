'use strict';

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
    key: 'handlePlayerClick',
    value: function handlePlayerClick(player) {
      this.setState({
        currentPlayer: player
      });
    }
  }, {
    key: 'handleSearchEvent',
    value: function handleSearchEvent(event) {
      var _this2 = this;

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
        }).done(function (res) {
          console.log('here');
          $.ajax({
            url: 'http://api.probasketballapi.com/advanced/player',
            type: 'POST',
            data: 'api_key=' + apiKey + '&player_id=2544', // + res.player_id,
            sync: true
          }).done(function (res) {
            console.log(res);
          });
        });
      }

      this.isCalled = true;
      setTimeout(function () {
        _this2.isCalled = false;
      }, 500);
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(Nav, { handleSearchEvent: this.handleSearchEvent.bind(this) }),
        React.createElement(
          'div',
          null,
          React.createElement(PlayerViewer, { player: this.state.currentPlayer })
        ),
        React.createElement(
          'div',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9jb21wb25lbnRzL0FwcC5qcyJdLCJuYW1lcyI6WyJBcHAiLCJwcm9wcyIsInN0YXRlIiwiY3VycmVudFBsYXllcnNMaXN0Iiwid2luZG93IiwiZXhhbXBsZVBsYXllcnMiLCJjdXJyZW50UGxheWVyIiwicGxheWVyIiwic2V0U3RhdGUiLCJldmVudCIsImlzQ2FsbGVkIiwiJCIsImFqYXgiLCJ1cmwiLCJ0eXBlIiwiZGF0YSIsImFwaUtleSIsInN5bmMiLCJkb25lIiwicmVzIiwiY29uc29sZSIsImxvZyIsInNldFRpbWVvdXQiLCJoYW5kbGVTZWFyY2hFdmVudCIsImJpbmQiLCJoYW5kbGVQbGF5ZXJDbGljayIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLEc7OztBQUNKLGVBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSwwR0FDWEEsS0FEVzs7QUFHakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLDBCQUFvQkMsT0FBT0MsY0FEaEI7QUFFWEMscUJBQWVGLE9BQU9DLGNBQVAsQ0FBc0IsQ0FBdEI7QUFGSixLQUFiO0FBSGlCO0FBT2xCOzs7O3NDQUVpQkUsTSxFQUFRO0FBQ3hCLFdBQUtDLFFBQUwsQ0FBYztBQUNaRix1QkFBZUM7QUFESCxPQUFkO0FBR0Q7OztzQ0FFaUJFLEssRUFBTztBQUFBOztBQUN2QixVQUFJLENBQUMsS0FBS0MsUUFBVixFQUFvQjtBQUNsQkMsVUFBRUMsSUFBRixDQUFPO0FBQ0xDLGVBQUssc0NBREE7QUFFTEMsZ0JBQU0sTUFGRDtBQUdMQyxnQkFBTSxhQUFhQyxNQUFiLEdBQXNCLG9DQUh2QjtBQUlMQyxnQkFBTTtBQUNOO0FBQ0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRjtBQW5CSyxTQUFQLEVBcUJDQyxJQXJCRCxDQXFCTSxVQUFDQyxHQUFELEVBQVM7QUFDYkMsa0JBQVFDLEdBQVIsQ0FBWSxNQUFaO0FBQ0FWLFlBQUVDLElBQUYsQ0FBTztBQUNMQyxpQkFBSyxpREFEQTtBQUVMQyxrQkFBTSxNQUZEO0FBR0xDLGtCQUFNLGFBQWFDLE1BQWIsR0FBc0IsaUJBSHZCLEVBRzBDO0FBQy9DQyxrQkFBTTtBQUpELFdBQVAsRUFNQ0MsSUFORCxDQU1NLFVBQUNDLEdBQUQsRUFBUztBQUNiQyxvQkFBUUMsR0FBUixDQUFZRixHQUFaO0FBQ0QsV0FSRDtBQVNELFNBaENEO0FBaUNEOztBQUVELFdBQUtULFFBQUwsR0FBZ0IsSUFBaEI7QUFDQVksaUJBQVcsWUFBTTtBQUFFLGVBQUtaLFFBQUwsR0FBZ0IsS0FBaEI7QUFBd0IsT0FBM0MsRUFBNkMsR0FBN0M7QUFDRDs7OzZCQUVRO0FBQ1AsYUFDRTtBQUFBO0FBQUE7QUFDRSw0QkFBQyxHQUFELElBQUssbUJBQW1CLEtBQUthLGlCQUFMLENBQXVCQyxJQUF2QixDQUE0QixJQUE1QixDQUF4QixHQURGO0FBRUU7QUFBQTtBQUFBO0FBQ0UsOEJBQUMsWUFBRCxJQUFjLFFBQVEsS0FBS3RCLEtBQUwsQ0FBV0ksYUFBakM7QUFERixTQUZGO0FBS0U7QUFBQTtBQUFBO0FBQ0UsOEJBQUMsVUFBRCxJQUFZLFlBQVksS0FBS0osS0FBTCxDQUFXQyxrQkFBbkMsRUFBdUQsbUJBQW1CLEtBQUtzQixpQkFBTCxDQUF1QkQsSUFBdkIsQ0FBNEIsSUFBNUIsQ0FBMUU7QUFERjtBQUxGLE9BREY7QUFXRDs7OztFQXJFZUUsTUFBTUMsUzs7QUF3RXhCOzs7QUFDQXZCLE9BQU9KLEdBQVAsR0FBYUEsR0FBYiIsImZpbGUiOiJBcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBjdXJyZW50UGxheWVyc0xpc3Q6IHdpbmRvdy5leGFtcGxlUGxheWVycyxcbiAgICAgIGN1cnJlbnRQbGF5ZXI6IHdpbmRvdy5leGFtcGxlUGxheWVyc1swXVxuICAgIH07XG4gIH1cblxuICBoYW5kbGVQbGF5ZXJDbGljayhwbGF5ZXIpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGN1cnJlbnRQbGF5ZXI6IHBsYXllclxuICAgIH0pO1xuICB9XG5cbiAgaGFuZGxlU2VhcmNoRXZlbnQoZXZlbnQpIHtcbiAgICBpZiAoIXRoaXMuaXNDYWxsZWQpIHtcbiAgICAgICQuYWpheCh7XG4gICAgICAgIHVybDogJ2h0dHBzOi8vcHJvYmFza2V0YmFsbGFwaS5jb20vcGxheWVycycsXG4gICAgICAgIHR5cGU6ICdQT1NUJyxcbiAgICAgICAgZGF0YTogJ2FwaV9rZXk9JyArIGFwaUtleSArICcmZmlyc3RfbmFtZT1LZXZpbiZsYXN0X25hbWU9RHVyYW50JyxcbiAgICAgICAgc3luYzogdHJ1ZVxuICAgICAgICAvLyBzdWNjZXNzOiAocGxheWVyUmVxdWVzdFJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgLy8gdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgLy8gICBjdXJyZW50UGxheWVyOiBcbiAgICAgICAgICAvLyB9KTtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZygnaGVyZScpO1xuICAgICAgICAgIC8vICQuYWpheCh7XG4gICAgICAgICAgLy8gICB1cmw6ICdodHRwOi8vYXBpLnByb2Jhc2tldGJhbGxhcGkuY29tL2FkdmFuY2VkL3BsYXllcicsXG4gICAgICAgICAgLy8gICB0eXBlOiAnUE9TVCcsXG4gICAgICAgICAgLy8gICBkYXRhOiAnYXBpX2tleT0nICsgYXBpS2V5ICsgJyZwbGF5ZXJfaWQ9JyArIHBsYXllclJlcXVlc3RSZXNwb25zZS5wbGF5ZXJfaWQsXG4gICAgICAgICAgLy8gICBzeW5jOiB0cnVlLFxuICAgICAgICAgIC8vICAgc3VjY2VzczogKGFkdmFuY2VkUmVxdWVzdFJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKGFkdmFuY2VkUmVxdWVzdFJlc3BvbnNlKTtcbiAgICAgICAgICAvLyAgIH1cbiAgICAgICAgICAvLyB9KTtcbiAgICAgICAgLy8gfSxcbiAgICAgIH0pXG4gICAgICAuZG9uZSgocmVzKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdoZXJlJyk7XG4gICAgICAgICQuYWpheCh7XG4gICAgICAgICAgdXJsOiAnaHR0cDovL2FwaS5wcm9iYXNrZXRiYWxsYXBpLmNvbS9hZHZhbmNlZC9wbGF5ZXInLFxuICAgICAgICAgIHR5cGU6ICdQT1NUJyxcbiAgICAgICAgICBkYXRhOiAnYXBpX2tleT0nICsgYXBpS2V5ICsgJyZwbGF5ZXJfaWQ9MjU0NCcsIC8vICsgcmVzLnBsYXllcl9pZCxcbiAgICAgICAgICBzeW5jOiB0cnVlXG4gICAgICAgIH0pXG4gICAgICAgIC5kb25lKChyZXMpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHRoaXMuaXNDYWxsZWQgPSB0cnVlO1xuICAgIHNldFRpbWVvdXQoKCkgPT4geyB0aGlzLmlzQ2FsbGVkID0gZmFsc2U7IH0sIDUwMCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxOYXYgaGFuZGxlU2VhcmNoRXZlbnQ9e3RoaXMuaGFuZGxlU2VhcmNoRXZlbnQuYmluZCh0aGlzKX0vPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxQbGF5ZXJWaWV3ZXIgcGxheWVyPXt0aGlzLnN0YXRlLmN1cnJlbnRQbGF5ZXJ9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxQbGF5ZXJMaXN0IHBsYXllckRhdGE9e3RoaXMuc3RhdGUuY3VycmVudFBsYXllcnNMaXN0fSBoYW5kbGVQbGF5ZXJDbGljaz17dGhpcy5oYW5kbGVQbGF5ZXJDbGljay5iaW5kKHRoaXMpfS8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG4vLyBhdHRhY2ggdG8gd2luZG93XG53aW5kb3cuQXBwID0gQXBwO1xuIl19