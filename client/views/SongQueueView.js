// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

 // tagName = 'table',

  initialize: function() {
    this.render();
  },

  render: function() {
    return this.$el;
  }

});
