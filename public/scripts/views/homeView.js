// This is where we define the view for the "Home" page, in other words, the default view

const homeView = {};

homeView.init = function() {
  console.log('Inside of homeView.init()');
  $('#content').text('Hello wonderful world! Why did you come to my home page?!');

  $('#contacts').hide()
};
