$(".faq__item--button").on("click", function () {
  if ($(this).next().hasClass("active")) {
    $(this).next().removeClass("active");
  } else {
    $(".faq__item--text").removeClass("active");
    $(this).next().addClass("active");
  }
});

$(".contact-button").click(function() {
    $(".modal--ask-question").toggleClass("active");
    $(".overlay").toggleClass("visible");
});

$(".modal__button-close").click(function() {
    $(".modal--ask-question").toggleClass("active");
    $(".overlay").toggleClass("visible");
});

$(".header__button").click(function() {
    $(".modal--menu").toggleClass("active");
    $(".overlay").toggleClass("visible");
});

$(".menu-mobile__button").click(function() {
    $(".modal--menu").toggleClass("active");
    $(".overlay").toggleClass("visible");
});




$("#form").validate({
  rules: {
    user_name: {
      required: true,
    },
    user_email: {
      required: true,
      email: true,
    },
    user_message: {
      required: true,
    },
  },
  messages: {
    user_name: {
      required: "Не допустимые символы",
    },
    user_email: {
      required: "Не правильный адрес",
    },
    user_message: {
      required: "Заполните форму",
    },
  },
});
