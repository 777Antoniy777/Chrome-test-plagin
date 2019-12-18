const fullname = document.querySelector('.header span').textContent;
const informationBlock = document.querySelector('.resume-search-item__description-content');
const tel = informationBlock.querySelector('span').textContent;
const email = informationBlock.nextElementSibling.querySelector('span').textContent;
const userInformationBlock = document.querySelector('.resume-applicant .bloko-columns-row:nth-child(1) .bloko-column');

const extensionBtn = document.createElement('button');
extensionBtn.textContent = 'Импортировать данные';
extensionBtn.classList.add('extension-button');

// const dataObj = {
//   fullname: fullname,
//   tel: tel,
//   email: email
// };

const css = `
.extension-button { 
  margin: 20px 0; 
  width: 200px;
  height: 40px;
  text-align: center;
  background-color: lightgray;
  border: 2px solid gold;
  border-radius: 5px;
}
.extension-button:hover {
  background-color: #e8e0e0;
}
.extension-button:active {
  background-color: #f1ebeb;
}`;

const style = document.createElement('style');
style.type = 'text/css';

if (style.styleSheet) {
  style.styleSheet.cssText = css;
} else {
  style.appendChild(document.createTextNode(css));
}

document.getElementsByTagName('head')[0].appendChild(style);

window.addEventListener('load', () => {
  document.body.classList.add('loaded');
  userInformationBlock.append(extensionBtn);
});

// const dataJson = JSON.stringify(dataObj);
const data = new FormData();

if (data) {
  data.append('fullname', fullname);
  data.append('tel', tel);
  data.append('email', email);
}

fetch('https://a2design.biz/', {
  method: 'POST',
  // headers: {
  //   'Content-Type': 'application/json;charset=utf-8'
  // },
  body: data,
  // body: dataJson,
});
// .then(function(response) {
//   if (!response.ok) {
//     return Promise.reject(new Error(
//       'Response failed: ' + response.status + ' (' + response.statusText + ')',
//     ));
//   }

//   // console.log(response);
//   // console.log(response.json());
//   // return response.json();
// });
// // .then(function(data) {
// //   console.log(data);
// // }).catch(function(error) {
// //   console.log(error);
// // });
