import Controller from '@ember/controller';
import Ember from 'ember';

export default Ember.Controller.extend({
  //message
  responseMessage: '',

  actions: {
    //function to save the data
     saveUser() {
       //get the values from the inputs and put it in a const
       const fname = this.get('fname');
       const lname = this.get('lname');
       const email = this.get('email');
       const phone = this.get('phone');
       const address = this.get('address');

       //create a new object with the record on the database, passing the consts as values
       const newUser = this.store.createRecord('users', {
         fname: fname, lname: lname, email: email, phone: phone, address: address
       });

       //save the object newuser to the database, set the responseMessage and clear the input fields
       newUser.save().then((response) => {
         this.set('responseMessage', `Thank you! Your details have been saved, Mr. ${response.get('lname')}`);
         this.set('fname', '');
         this.set('lname', '');
         this.set('email', '');
         this.set('phone', '');
         this.set('address', '');
       });
     }
   }
});
