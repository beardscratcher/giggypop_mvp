window.addEventListener('load', function(){

  var TicketView = Backbone.View.extend({

    doSearch: function( event ){
      searchView.$el.html("");
      var searchValue = $(event.target).val();
      if (searchValue.length > 0 ) {
        var searchResult = new SearchResult({id: searchValue});
        searchView = new SearchView({el: ".searchView", model: searchResult});
        searchView.$el.html("Fetching: " + searchValue);
        searchResult.fetch();
      }
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
      this.listenTo(this.model, 'change', this.render);
    },

    render: function() {
      if (this.model.get('gig')) {
        this.$el.append('<form action="/invite/' + this.model.get('result_token') + '"><div class=result">Gig: ' + this.model.get('gig') + '</div><button type="submit">Confirm</button></form>');
      }
    }
  });

  var SearchResult = Backbone.Model.extend({
    url: function() {
      return '/search/' + this.id;
    }
  });

  var ticketView = new TicketView({el: ".ticketView"});
  var searchView = new SearchView({el: ".searchView"});

});
