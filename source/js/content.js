const fullname = document.querySelector('.header span').textContent;
const informationBlock = document.querySelector('.resume-search-item__description-content');
const tel = informationBlock.querySelector('span').textContent;
const email = informationBlock.nextElementSibling.querySelector('span').textContent;
const userInformationBlock = document.querySelector('.resume-applicant .bloko-columns-row:nth-child(1) .bloko-column');

const dataObj = {
  fullname: fullname,
  tel: tel,
  email: email
};

const extensionBtn = document.createElement('button');
extensionBtn.textContent = 'Импортировать данные';
extensionBtn.classList.add('extension-button');

extensionBtn.style.margin = '20px';
extensionBtn.style.width = '200px';
extensionBtn.style.height = '40px';
extensionBtn.style.textAlign = 'center';
extensionBtn.style.backgroundColor = 'lightgrey';
extensionBtn.style.border = '2px solid gold';
extensionBtn.style.borderRadius = '5px';

window.addEventListener('load', () => {
  document.body.classList.add('loaded');
  console.log('DOM fully loaded and parsed');
  userInformationBlock.append(extensionBtn);
});

const data = new FormData();

if (data) {
  const dataJson = JSON.stringify(dataObj);
  // data.append('json', dataJson);
  data.append('fullname', fullname);
}
console.log(data.get('fullname'), data);

fetch('https://a2design.biz/', {
  method: 'POST',
  body: data,
});
// .then(function(response) {
//   // Стоит проверить код ответа.
//   if (!response.ok) {
//     // Сервер вернул код ответа за границами диапазона [200, 299]
//     return Promise.reject(new Error(
//       'Response failed: ' + response.status + ' (' + response.statusText + ')',
//     ));
//   }

//   // Далее будем использовать только JSON из тела ответа.
//   // console.log(response);
//   // console.log(response.json());
//   // return response.json();
// });
// // .then(function(data) {
// //   console.log(data);
// // }).catch(function(error) {
// //   console.log(error);
// // });
