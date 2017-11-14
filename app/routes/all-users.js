import Route from '@ember/routing/route';
//fetch all user details
export default Route.extend({
  model: function() {
    return this.store.findAll('users');
  }
});
