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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvQXBwLmpzIl0sIm5hbWVzIjpbIkFwcCIsInByb3BzIiwic3RhdGUiLCJjdXJyZW50UGxheWVyc0xpc3QiLCJ3aW5kb3ciLCJleGFtcGxlUGxheWVycyIsImN1cnJlbnRQbGF5ZXIiLCJwbGF5ZXIiLCJzZXRTdGF0ZSIsImV2ZW50IiwiaXNDYWxsZWQiLCIkIiwiYWpheCIsInVybCIsInR5cGUiLCJkYXRhIiwiYXBpS2V5Iiwic3luYyIsImRvbmUiLCJyZXMiLCJjb25zb2xlIiwibG9nIiwic2V0VGltZW91dCIsImhhbmRsZVNlYXJjaEV2ZW50IiwiYmluZCIsImhhbmRsZVBsYXllckNsaWNrIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsRzs7O0FBQ0osZUFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDBHQUNYQSxLQURXOztBQUdqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsMEJBQW9CQyxPQUFPQyxjQURoQjtBQUVYQyxxQkFBZUYsT0FBT0MsY0FBUCxDQUFzQixDQUF0QjtBQUZKLEtBQWI7QUFIaUI7QUFPbEI7Ozs7c0NBRWlCRSxNLEVBQVE7QUFDeEIsV0FBS0MsUUFBTCxDQUFjO0FBQ1pGLHVCQUFlQztBQURILE9BQWQ7QUFHRDs7O3NDQUVpQkUsSyxFQUFPO0FBQUE7O0FBQ3ZCLFVBQUksQ0FBQyxLQUFLQyxRQUFWLEVBQW9CO0FBQ2xCQyxVQUFFQyxJQUFGLENBQU87QUFDTEMsZUFBSyxzQ0FEQTtBQUVMQyxnQkFBTSxNQUZEO0FBR0xDLGdCQUFNLGFBQWFDLE1BQWIsR0FBc0Isb0NBSHZCO0FBSUxDLGdCQUFNO0FBQ047QUFDRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNGO0FBbkJLLFNBQVAsRUFxQkNDLElBckJELENBcUJNLFVBQUNDLEdBQUQsRUFBUztBQUNiQyxrQkFBUUMsR0FBUixDQUFZLE1BQVo7QUFDQVYsWUFBRUMsSUFBRixDQUFPO0FBQ0xDLGlCQUFLLGlEQURBO0FBRUxDLGtCQUFNLE1BRkQ7QUFHTEMsa0JBQU0sYUFBYUMsTUFBYixHQUFzQixpQkFIdkIsRUFHMEM7QUFDL0NDLGtCQUFNO0FBSkQsV0FBUCxFQU1DQyxJQU5ELENBTU0sVUFBQ0MsR0FBRCxFQUFTO0FBQ2JDLG9CQUFRQyxHQUFSLENBQVlGLEdBQVo7QUFDRCxXQVJEO0FBU0QsU0FoQ0Q7QUFpQ0Q7O0FBRUQsV0FBS1QsUUFBTCxHQUFnQixJQUFoQjtBQUNBWSxpQkFBVyxZQUFNO0FBQUUsZUFBS1osUUFBTCxHQUFnQixLQUFoQjtBQUF3QixPQUEzQyxFQUE2QyxHQUE3QztBQUNEOzs7NkJBRVE7QUFDUCxhQUNFO0FBQUE7QUFBQTtBQUNFLDRCQUFDLEdBQUQsSUFBSyxtQkFBbUIsS0FBS2EsaUJBQUwsQ0FBdUJDLElBQXZCLENBQTRCLElBQTVCLENBQXhCLEdBREY7QUFFRTtBQUFBO0FBQUE7QUFDRSw4QkFBQyxZQUFELElBQWMsUUFBUSxLQUFLdEIsS0FBTCxDQUFXSSxhQUFqQztBQURGLFNBRkY7QUFLRTtBQUFBO0FBQUE7QUFDRSw4QkFBQyxVQUFELElBQVksWUFBWSxLQUFLSixLQUFMLENBQVdDLGtCQUFuQyxFQUF1RCxtQkFBbUIsS0FBS3NCLGlCQUFMLENBQXVCRCxJQUF2QixDQUE0QixJQUE1QixDQUExRTtBQURGO0FBTEYsT0FERjtBQVdEOzs7O0VBckVlRSxNQUFNQyxTOztBQXdFeEI7OztBQUNBdkIsT0FBT0osR0FBUCxHQUFhQSxHQUFiIiwiZmlsZSI6IkFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGN1cnJlbnRQbGF5ZXJzTGlzdDogd2luZG93LmV4YW1wbGVQbGF5ZXJzLFxuICAgICAgY3VycmVudFBsYXllcjogd2luZG93LmV4YW1wbGVQbGF5ZXJzWzBdXG4gICAgfTtcbiAgfVxuXG4gIGhhbmRsZVBsYXllckNsaWNrKHBsYXllcikge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgY3VycmVudFBsYXllcjogcGxheWVyXG4gICAgfSk7XG4gIH1cblxuICBoYW5kbGVTZWFyY2hFdmVudChldmVudCkge1xuICAgIGlmICghdGhpcy5pc0NhbGxlZCkge1xuICAgICAgJC5hamF4KHtcbiAgICAgICAgdXJsOiAnaHR0cHM6Ly9wcm9iYXNrZXRiYWxsYXBpLmNvbS9wbGF5ZXJzJyxcbiAgICAgICAgdHlwZTogJ1BPU1QnLFxuICAgICAgICBkYXRhOiAnYXBpX2tleT0nICsgYXBpS2V5ICsgJyZmaXJzdF9uYW1lPUtldmluJmxhc3RfbmFtZT1EdXJhbnQnLFxuICAgICAgICBzeW5jOiB0cnVlXG4gICAgICAgIC8vIHN1Y2Nlc3M6IChwbGF5ZXJSZXF1ZXN0UmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAvLyB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAvLyAgIGN1cnJlbnRQbGF5ZXI6IFxuICAgICAgICAgIC8vIH0pO1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdoZXJlJyk7XG4gICAgICAgICAgLy8gJC5hamF4KHtcbiAgICAgICAgICAvLyAgIHVybDogJ2h0dHA6Ly9hcGkucHJvYmFza2V0YmFsbGFwaS5jb20vYWR2YW5jZWQvcGxheWVyJyxcbiAgICAgICAgICAvLyAgIHR5cGU6ICdQT1NUJyxcbiAgICAgICAgICAvLyAgIGRhdGE6ICdhcGlfa2V5PScgKyBhcGlLZXkgKyAnJnBsYXllcl9pZD0nICsgcGxheWVyUmVxdWVzdFJlc3BvbnNlLnBsYXllcl9pZCxcbiAgICAgICAgICAvLyAgIHN5bmM6IHRydWUsXG4gICAgICAgICAgLy8gICBzdWNjZXNzOiAoYWR2YW5jZWRSZXF1ZXN0UmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAvLyAgICAgY29uc29sZS5sb2coYWR2YW5jZWRSZXF1ZXN0UmVzcG9uc2UpO1xuICAgICAgICAgIC8vICAgfVxuICAgICAgICAgIC8vIH0pO1xuICAgICAgICAvLyB9LFxuICAgICAgfSlcbiAgICAgIC5kb25lKChyZXMpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ2hlcmUnKTtcbiAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICB1cmw6ICdodHRwOi8vYXBpLnByb2Jhc2tldGJhbGxhcGkuY29tL2FkdmFuY2VkL3BsYXllcicsXG4gICAgICAgICAgdHlwZTogJ1BPU1QnLFxuICAgICAgICAgIGRhdGE6ICdhcGlfa2V5PScgKyBhcGlLZXkgKyAnJnBsYXllcl9pZD0yNTQ0JywgLy8gKyByZXMucGxheWVyX2lkLFxuICAgICAgICAgIHN5bmM6IHRydWVcbiAgICAgICAgfSlcbiAgICAgICAgLmRvbmUoKHJlcykgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5pc0NhbGxlZCA9IHRydWU7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7IHRoaXMuaXNDYWxsZWQgPSBmYWxzZTsgfSwgNTAwKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPE5hdiBoYW5kbGVTZWFyY2hFdmVudD17dGhpcy5oYW5kbGVTZWFyY2hFdmVudC5iaW5kKHRoaXMpfS8+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPFBsYXllclZpZXdlciBwbGF5ZXI9e3RoaXMuc3RhdGUuY3VycmVudFBsYXllcn0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPFBsYXllckxpc3QgcGxheWVyRGF0YT17dGhpcy5zdGF0ZS5jdXJyZW50UGxheWVyc0xpc3R9IGhhbmRsZVBsYXllckNsaWNrPXt0aGlzLmhhbmRsZVBsYXllckNsaWNrLmJpbmQodGhpcyl9Lz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbi8vIGF0dGFjaCB0byB3aW5kb3dcbndpbmRvdy5BcHAgPSBBcHA7XG4iXX0=