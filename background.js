chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('polywindow.html', {
    'bounds': {
      'width': 600,
      'height': 600
    }
  });
});