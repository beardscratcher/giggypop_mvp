window.addEventListener('load', function(){

  var TicketView = Backbone.View.extend({

    doSearch: function( event ){
      searchView.$el.html("");
      var searchValue = $(event.target).val();
      if (searchValue.length > 0 ) searchView.$el.html("Fetching: " + searchValue);
    },

    events: {
      "keyup input.ticket": "doSearch",
    },

    initialize: function() {
    },

    render: function() {
    }
  });

  var SearchView = Backbone.View.extend({

    events: {
    },

    initialize: function() {
    },

    render: function() {
    }
  });

  var ticketView = new TicketView({el: ".ticketView"});
  var searchView = new SearchView({el: ".searchView"});

});
