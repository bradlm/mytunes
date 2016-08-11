// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

 // tagName = 'table',
  className: 'songQueue',

  initialize: function() {
    this.render();
    this.collection.on('all', function(e) {
      $('.songQueue').append(this.render());
    }, this);
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html('<th>Song Queue</th>').append(
      this.collection.map(function(song) {
        return new SongQueueEntryView({model: song}).render();
      })
    );
  }

});
