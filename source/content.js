console.log(document.title);
const username = document.querySelector('.header span').textContent;
const informationBlock = document.querySelector('.resume-search-item__description-content');
const tel = informationBlock.querySelector('span').textContent;
const email = informationBlock.nextElementSibling.querySelector('span').textContent;

const dataObj = {
  name: username,
  tel: tel,
  email: email
};

console.log(username, tel, email, dataObj);

const data = new FormData();
if (data) {
  data.append('json', JSON.stringify(dataObj));
}
console.log(JSON.stringify(dataObj));

fetch('https://a2design.biz/', {
  method: 'POST',
  body: data,
}).then(function(response) {
  // Стоит проверить код ответа.
  if (!response.ok) {
    // Сервер вернул код ответа за границами диапазона [200, 299]
    return Promise.reject(new Error(
      'Response failed: ' + response.status + ' (' + response.statusText + ')',
    ));
  }

  // Далее будем использовать только JSON из тела ответа.
  console.log(response);
  console.log(response.json());
  return response.json();
});
// .then(function(data) {
//   console.log(data);
// }).catch(function(error) {
//   console.log(error);
// });

var btn = document.createElement('button');
btn.textContent = 'Click me!';
document.body.appendChild(btn);
