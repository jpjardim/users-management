import EmberRouter from '@ember/routing/router';
import config from './config/environment';
import Ember from 'ember';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('/');
  this.route('allUsers');
  this.route('edit', { path: '/:users_id/edit' });
});

export default Router;
