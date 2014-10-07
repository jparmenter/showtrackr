'use strict';
(function() {
  function MainCtrl(Show) {
    var vm = this;
    vm.alphabet = ['0-9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
      'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
      'U', 'V', 'W', 'X', 'Y', 'Z'];

    vm.genres = ['Action', 'Adventure', 'Animation', 'Children', 'Comedy',
      'Crime', 'Documentary', 'Drama', 'Family', 'Fantasy', 'Food', 'Home and Garden',
      'Horror', 'Mini-Series', 'Mystery', 'News', 'Reality', 'Romance', 'Sci-Fi', 'Sport',
      'Suspense', 'Talk Show', 'Thriller', 'Travel'];

    vm.headingTitle = 'Top 12 Shows';
    vm.shows = Show.query();

    vm.filterByGenre = function(genre) {
      vm.shows = Show.query({ genre: genre });
      vm.headingTitle = genre;
    };

    vm.filterByAlphabet = function(char) {
      vm.shows = Show.query({ alphabet: char });
      vm.headingTitle = char;
    };
  }

  MainCtrl.$inject = ['Show'];
  angular
    .module('showtrackr')
    .controller('MainCtrl', MainCtrl);
})();
