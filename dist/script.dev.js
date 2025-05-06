"use strict";

document.getElementById('btn').addEventListener('click', function (e) {
  e.preventDefault(e);
  var vouchers = parseInt(document.getElementById('vouchers').value);
  var amount = parseFloat(document.getElementById('amount').value);
  var voucher0 = "";
  var voucher1 = 100;
  var voucher2 = 300;
  var voucher3 = 500;
  var code1 = "GHSAUB3445JFN88";
  var code2 = "GHSLZGHD8785998";
  var code3 = "GHSEFEBGD677988";
  var result = document.getElementById('result');

  if (amount == voucher0) {
    result.innerHTML = "\n            <p>\n                Please enter the amount proceed \n            </p>\n        ";
  } else if (amount == voucher1) {
    result.innerHTML = "\n            <p>\n                Congrats your voucher code is ".concat(code1, "\n            </p>\n        ");
  } else if (amount == voucher2) {
    result.innerHTML = "\n            <p>\n                Congrats your voucher code is ".concat(code2, "\n            </p>\n        ");
  } else if (amount == voucher3) {
    result.innerHTML = "\n            <p>\n                Congrats your voucher code is ".concat(code3, "\n            </p>\n        ");
  } else {
    result.innerHTML = "\n            <p>\n                Invalid Amount!, try again...\n            </p>\n        ";
  }
});