"use strict";

var Search = function Search(_ref) {
  var handleSearchEvent = _ref.handleSearchEvent;
  return React.createElement(
    "div",
    null,
    React.createElement("input", { type: "text", placeholder: "Search (Ex: LeBron James)", onChange: function onChange(event) {
        return handleSearchEvent(event);
      } }),
    React.createElement(
      "button",
      null,
      React.createElement(
        "i",
        { className: "material-icons" },
        "search"
      )
    )
  );
};

window.Search = Search;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvU2VhcmNoLmpzIl0sIm5hbWVzIjpbIlNlYXJjaCIsImhhbmRsZVNlYXJjaEV2ZW50IiwiZXZlbnQiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSUEsU0FBUyxTQUFUQSxNQUFTO0FBQUEsTUFBRUMsaUJBQUYsUUFBRUEsaUJBQUY7QUFBQSxTQUNYO0FBQUE7QUFBQTtBQUNFLG1DQUFPLE1BQUssTUFBWixFQUFtQixhQUFZLDJCQUEvQixFQUEyRCxVQUFVLGtCQUFDQyxLQUFEO0FBQUEsZUFBV0Qsa0JBQWtCQyxLQUFsQixDQUFYO0FBQUEsT0FBckUsR0FERjtBQUVFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxVQUFHLFdBQVUsZ0JBQWI7QUFBQTtBQUFBO0FBREY7QUFGRixHQURXO0FBQUEsQ0FBYjs7QUFTQUMsT0FBT0gsTUFBUCxHQUFnQkEsTUFBaEIiLCJmaWxlIjoiU2VhcmNoLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIFNlYXJjaCA9ICh7aGFuZGxlU2VhcmNoRXZlbnR9KSA9PiAoXG4gIDxkaXY+XG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJTZWFyY2ggKEV4OiBMZUJyb24gSmFtZXMpXCIgb25DaGFuZ2U9eyhldmVudCkgPT4gaGFuZGxlU2VhcmNoRXZlbnQoZXZlbnQpfS8+XG4gICAgPGJ1dHRvbj5cbiAgICAgIDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+c2VhcmNoPC9pPlxuICAgIDwvYnV0dG9uPlxuICA8L2Rpdj5cbik7XG5cbndpbmRvdy5TZWFyY2ggPSBTZWFyY2g7Il19