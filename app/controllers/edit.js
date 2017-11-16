import Controller from '@ember/controller';

export default Ember.Controller.extend({
  actions: {
    goBack() {
      this.transitionTo(history.back());
    }
  }
});
