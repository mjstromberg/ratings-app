"use strict";

var Nav = function Nav(_ref) {
  var handleSearchEvent = _ref.handleSearchEvent;
  return React.createElement(
    "div",
    null,
    React.createElement(
      "div",
      null,
      "NBA Player Stats: Last Game"
    ),
    React.createElement(
      "ul",
      null,
      React.createElement(
        "li",
        null,
        "Home"
      ),
      React.createElement(
        "li",
        null,
        "Players"
      ),
      React.createElement(Search, { handleSearchEvent: handleSearchEvent })
    )
  );
};

window.Nav = Nav;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvTmF2LmpzIl0sIm5hbWVzIjpbIk5hdiIsImhhbmRsZVNlYXJjaEV2ZW50Iiwid2luZG93Il0sIm1hcHBpbmdzIjoiOztBQUFBLElBQUlBLE1BQU0sU0FBTkEsR0FBTTtBQUFBLE1BQUVDLGlCQUFGLFFBQUVBLGlCQUFGO0FBQUEsU0FDUjtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBREY7QUFFRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BREY7QUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BRkY7QUFHRSwwQkFBQyxNQUFELElBQVEsbUJBQW1CQSxpQkFBM0I7QUFIRjtBQUZGLEdBRFE7QUFBQSxDQUFWOztBQVdBQyxPQUFPRixHQUFQLEdBQWFBLEdBQWIiLCJmaWxlIjoiTmF2LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIE5hdiA9ICh7aGFuZGxlU2VhcmNoRXZlbnR9KSA9PiAoXG4gIDxkaXY+XG4gICAgPGRpdj5OQkEgUGxheWVyIFN0YXRzOiBMYXN0IEdhbWU8L2Rpdj5cbiAgICA8dWw+XG4gICAgICA8bGk+SG9tZTwvbGk+XG4gICAgICA8bGk+UGxheWVyczwvbGk+XG4gICAgICA8U2VhcmNoIGhhbmRsZVNlYXJjaEV2ZW50PXtoYW5kbGVTZWFyY2hFdmVudH0gLz5cbiAgICA8L3VsPlxuICA8L2Rpdj5cbik7XG5cbndpbmRvdy5OYXYgPSBOYXY7Il19