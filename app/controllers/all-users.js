import Controller from '@ember/controller';
import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    //delete the user function with parameter users
     deleteUser(users) {
       //confirmation
       let confirmation = confirm('Are you sure?');

       if (confirmation) {
         //delete record
        users.destroyRecord();
        }
     }
  }
});
