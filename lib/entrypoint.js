'use strict';

var Routes = require('REACT_ROUTES');
var React = require('react');
var Router = require('react-router');

Router.run(Routes, Router.HistoryLocation, function(Root) {
  React.render(
    React.createElement(Root),
    document.getElementById('.react-root')
  );
});
