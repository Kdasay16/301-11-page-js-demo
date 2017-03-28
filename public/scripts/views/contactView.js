// This is where we define the view for the "Contact" page

const contactsView = {};

contactsView.init = function() {
  console.log('Inside contactsView');

  $('#content').text('My contacts are below:')

    $('#contacts').show()
};
