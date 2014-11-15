//var items = [{id: '0', name: 'Couch', description: 'Ikea this is comfortable! Although oddly small and modular it may be the most wonderful couch of my life. Oh and so modern!'}, {id: '1', name: 'Laptop', description: 'Beep boop, goes the laptop as I create node awesomeness all day long!'}, {id: '2', name: 'foobar', description: 'this is a test of the inventory description system, it is only a test.'}];
var items = [];
var _ = require('lodash');

exports.list = function(req, res) {
   res.render('index', {items: items});
};

exports.show = function(req, res) {
   var item = _.find(items, {id: req.params.id});
   res.render('show', item);
};

exports.new = function(req, res) {
   res.render('new');
};

exports.create = function(req, res) {
   var item = {
      id: _.uniqueId,
      name: req.body.name,
      description: req.body.descritpion
   };

   items.push(item);
   res.redirect('/');
};
