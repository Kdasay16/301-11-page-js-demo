// This is where we define the client-side routes

// page('route', callback to execute when this route is hit);

page('/', homeView.init);
page('/about', aboutView.init);
page('/contacts', contactsView.init);
page('*', function() {
  console.log('Where do you think you are going you nosey little shit?');
});

page();
