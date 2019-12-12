// document.cookie = 'cross-site-cookie=bar; SameSite=None';
// document.addEventListener('DOMContentLoaded', function() {
var checkPageButton = document.getElementById('checkPage');

checkPageButton.addEventListener('click', function() {

  chrome.extension.onRequest.addListener(
    function(request, sender, sendResponse) {
      // LOG THE CONTENTS HERE
      console.log(request.content);
  });
    
  chrome.tabs.getSelected(null, function(tab) {
    
    // Now inject a script onto the page
    chrome.tabs.executeScript(tab.id, {
      code: "chrome.extension.sendRequest({content: document.body.innerHTML}, function(response) { console.log('success'); });"
    }, function() { console.log('done', document.querySelector('body')); });
  });
    
  // chrome.tabs.getSelected(null, function(tab) {
  //   const tabUrl = tab.url;
  //   const reg = /(hh.ru)/i;
  //   console.log(tab.url);

  //   if (tabUrl.match(reg)) {
  //     console.log(document.body);
  //     return;
  //   }
  //   return false;

  // var d = document;

  // var f = d.createElement('form');
  // f.action = 'http://gtmetrix.com/analyze.html?bm';
  // f.method = 'post';
  // var i = d.createElement('input');
  // i.type = 'hidden';
  // i.name = 'url';
  // i.value = tab.url;
  // f.appendChild(i);
  // d.body.appendChild(f);
  // f.submit();
  // });
}, false);
// }, false);
