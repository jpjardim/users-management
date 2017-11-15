import Route from '@ember/routing/route';
//fetch all user details
export default Route.extend({

  model: function() {
    //return all Users
    return this.store.findAll('users');
  }
});
