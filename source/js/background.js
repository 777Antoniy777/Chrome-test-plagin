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
