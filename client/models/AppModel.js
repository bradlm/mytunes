// App.js - Defines a backbone model class for the whole app.
var AppModel = Backbone.Model.extend({

  initialize: function(params) {
    this.set('currentSong', new SongModel());
    this.set('songQueue', new SongQueue());
    // this.set('songQueueView', new SongQueueView({collection: this.get('songQueue')}));

    /* Note that 'this' is passed as the third argument. That third argument is
    the context. The 'play' handler will always be bound to that context we pass in.-
    In this example, we're binding it to the App. This is helpful because otherwise
    the 'this' we use that's actually in the function (this.set('currentSong', song)) would
    end up referring to the window. That's just what happens with all JS events. The handlers end up
    getting called from the window (unless we override it, as we do here). */


    this.get('library').on('play', function(song) {
      if (!this.get('currentSong') || !this.get('currentSong').get('url')) {
        this.playFirst(song);
      }
      this.get('songQueue').push(song);

    }, this);
    this.get('library').on('dequeue', function(song) {
      this.deQueue(song);
    }, this);
  },
  playFirst: function(song) {
    this.set('currentSong', song);
  },
  nextSong: function() {
    this.get('songQueue').shift();
    this.set('currentSong', this.get('songQueue').at(0));
  },
  deQueue: function(song) {
    this.get('songQueue').remove(song);
    if (this.get('songQueue').length < 1) {
      this.set('currentSong', undefined);
    }
  }

});
