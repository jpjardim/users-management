import Ember from 'ember';

export default Ember.Route.extend({
  //only fetch the data from specific user ID inside 'params'
  model(params) {
    return this.store.findRecord('users', params.users_id);
  },

  //actions for the page edit.hbs
  actions: {
    //function to update the user details with reference to the user
    updateDetails(users) {
      //save and return to preivous page - promise
      users.save().then(() => this.transitionTo('allUsers'));
    },

    willTransition(transition) {

      let model = this.controller.get('model');
      //if you try to change page without saving the new values
      if (model.get('hasDirtyAttributes')) {
        let confirmation = confirm("Your changes haven't saved yet. Would you like to leave this form?");
        //if yes, leave details as they were
        if (confirmation) {
          model.rollbackAttributes();
        } else {
          //cancel
          transition.abort();
        }
      }
    }
  }
});
