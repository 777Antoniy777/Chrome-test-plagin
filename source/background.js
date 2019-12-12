// chrome.extension.onRequest.addListener(
//   function(request, sender, sendResponse) {
//     // LOG THE CONTENTS HERE
//     console.log(request.content);
//     console.log(document.querySelector('body'));
//   });

// chrome.tabs.getSelected(null, function(tab) {

//   // Now inject a script onto the page
//   chrome.tabs.executeScript(tab.id, {
//        code: "chrome.extension.sendRequest({content: document.body.innerHTML}, function(response) { console.log('success'); });"
//      }, function() { console.log('done', document.querySelector('body')); });

// });

window.onload = function() {
  window.setInterval( function() {
    console.log("Hello world");
  }, 10000);
}
