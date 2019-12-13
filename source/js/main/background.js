window.onload = function() {
  window.setInterval(function() {
    console.log('Hello world');
  }, 10000);
};

const checkPageButton = document.querySelector('#checkButton');

if (checkPageButton) {
  checkPageButton.addEventListener('click', () => {
    console.log('test');
  });
}
































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
