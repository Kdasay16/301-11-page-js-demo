// This is where we define the view for the "About" page

const aboutView = {};

aboutView.init = function() {
  console.log('Inside aboutView.init()');

  $('#content').text('Stop stalking me. I don\'t want you to know about me.')

  $('#contacts').hide()
};
