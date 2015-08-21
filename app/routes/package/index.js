import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
	query: { refreshModel: true }
  },
  model: function(params) {
    return this.store.find('mets_package', params);
  }
});