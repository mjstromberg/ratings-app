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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9jb21wb25lbnRzL1NlYXJjaC5qcyJdLCJuYW1lcyI6WyJTZWFyY2giLCJoYW5kbGVTZWFyY2hFdmVudCIsImV2ZW50Iiwid2luZG93Il0sIm1hcHBpbmdzIjoiOztBQUFBLElBQUlBLFNBQVMsU0FBVEEsTUFBUztBQUFBLE1BQUVDLGlCQUFGLFFBQUVBLGlCQUFGO0FBQUEsU0FDWDtBQUFBO0FBQUE7QUFDRSxtQ0FBTyxNQUFLLE1BQVosRUFBbUIsYUFBWSwyQkFBL0IsRUFBMkQsVUFBVSxrQkFBQ0MsS0FBRDtBQUFBLGVBQVdELGtCQUFrQkMsS0FBbEIsQ0FBWDtBQUFBLE9BQXJFLEdBREY7QUFFRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsVUFBRyxXQUFVLGdCQUFiO0FBQUE7QUFBQTtBQURGO0FBRkYsR0FEVztBQUFBLENBQWI7O0FBU0FDLE9BQU9ILE1BQVAsR0FBZ0JBLE1BQWhCIiwiZmlsZSI6IlNlYXJjaC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBTZWFyY2ggPSAoe2hhbmRsZVNlYXJjaEV2ZW50fSkgPT4gKFxuICA8ZGl2PlxuICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiU2VhcmNoIChFeDogTGVCcm9uIEphbWVzKVwiIG9uQ2hhbmdlPXsoZXZlbnQpID0+IGhhbmRsZVNlYXJjaEV2ZW50KGV2ZW50KX0vPlxuICAgIDxidXR0b24+XG4gICAgICA8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPnNlYXJjaDwvaT5cbiAgICA8L2J1dHRvbj5cbiAgPC9kaXY+XG4pO1xuXG53aW5kb3cuU2VhcmNoID0gU2VhcmNoOyJdfQ==