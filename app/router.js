import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('lista-proyeccion');
  this.route('lista-peliculas');
  this.route('detalles-peliculas', {path: 'detalles-peliculas/:id'});
});

export default Router;
