/* eslint-disable no-eval */
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { WebpackError } from 'webpack';
import './css/styles.css';

//Bisness logic
function getWords() {
  let promise = new Promise(function (resolve) {
    let request = new XMLHttpRequest();
    // let paragraphNumber = 4;
    // let wordsNumber = 100;
    const url = `https://dinoipsum.com/api/?format=json`;
    request.addEventListener("loadend", function () {
      const response = JSON.parse(this.responseText);
      if (this.status === 200) {
        resolve([response]);
      } else {

      }
    });
    request.open("GET", url, true);
    request.send()
  });
  promise.then(function (responseArray) {
    console.log(responseArray[1][1]);
  }, function () {
  });

}



//UI logic