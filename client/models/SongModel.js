// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  play: function() {
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
  },
  enqueue: function() { //may want to break out into seperate function from play, if we want play to change current song while preserving the remaining queue.
    this.trigger('play', this);
  },
  dequeue: function() {
    
  }

});
