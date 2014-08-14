
  var powered = false;
chrome.bluetooth.getAdapterState(function(adapter) {
  powered = adapter.powered;
        if (powered) {
       document.getElementById('campo').innerHTML ="Tu Bluetooth esta Prendido";
      } else {
        document.getElementById('campo').innerHTML ="Tu Bluetooth esta Apagado";
      }
});

chrome.bluetooth.onAdapterStateChanged.addListener(
  function(adapter) {
    if (adapter.powered != powered) {
      powered = adapter.powered;
      if (powered) {
       document.getElementById('campo').innerHTML ="Tu Bluetooth esta Prendido";
      } else {
        document.getElementById('campo').innerHTML ="Tu Bluetooth esta Apagado";
      }
    }
  });
