// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({
  model: SongModel,
  initialize: function() {
    this.on('add', this.enqueue, this);
    this.on('dequeue', this.dequeue, this);
    this.on('ended', this.playNext, this);
  },
  enqueue: function(song) {
    this.length === 1 && this.playFirst();
  },
  dequeue: function(song) {
    this.at(0) === song ? this.playNext() : this.remove(song);
  },
  playNext: function() {
    this.shift();
    this.length >= 1 ? this.playFirst() : this.trigger('stop');
  },
  playFirst: function() {
    this.at(0).play();
  }
});