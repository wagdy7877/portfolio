$(document).ready(function () {
  /* ************************* */
  /* ******** loading ******** */
  /* ************************* */
  $(".loading").fadeOut(2000, function () {
    $("body").css({ overflow: "auto" });
  });

  /* ************************* */
  /* ********** box ********** */
  /* ************************* */
  boxsize = $(".container_box").width() + 22;
  $(".setting").animate(
    {
      left: -boxsize,
    },
    0
  );
  $(".setting .icon i").click(function () {
    offset = $(".container_box").offset().left;
    if (offset < 0) {
      $(".setting").animate(
        {
          left: 0,
        },
        1000
      );
    } else {
      $(".setting").animate(
        {
          left: -boxsize,
        },
        1000
      );
    }
  });

  $(".setting ul li").click(function () {
    x = $(this).css("backgroundColor");
    document.documentElement.style.setProperty("--tomato", x);
  });

  /* ************************* */
  /* ********* arrow  ********/
  /* ************************* */
  $(".scroll a").click(function () {
    $("html,body").animate(
      {
        scrollTop: offsetabout,
      },
      2000
    );
  });

  $(".arrow").click(function () {
    $("html,body").animate(
      {
        scrollTop: 0,
      },
      2000
    );
  });

  offsetabout = $(".about").offset().top -100;
  offsetservices = $(".services").offset().top -100;
  offsetclient = $(".client").offset().top -100;
  offsetportfolio = $(".portfolio").offset().top -100;
  offsetblog = $(".blog").offset().top -100;
  offsetcontact = $(".contact").offset().top -100;

  $(window).scroll(function () {
    if ($(window).scrollTop() < offsetabout) {
      $(".navbar ul li a").removeClass("active");
      $("#home").addClass("active");
  } 
  else if ($(window).scrollTop() >= offsetabout && $(window).scrollTop() <= offsetservices) {
      $(".navbar ul li a").removeClass("active");
      $("#about").addClass("active");
  }
  else if ($(window).scrollTop() >= offsetservices && $(window).scrollTop() <= offsetclient) {
      $(".navbar ul li a").removeClass("active");
      $("#services").addClass("active");
  }
  else if ($(window).scrollTop() >= offsetclient && $(window).scrollTop() <= offsetportfolio) {
      $(".navbar ul li a").removeClass("active");
      $("#client").addClass("active");
  }
  else if ($(window).scrollTop() >= offsetportfolio && $(window).scrollTop() <= offsetblog) {
      $(".navbar ul li a").removeClass("active");
      $("#portfolio").addClass("active");
  }
  else if ($(window).scrollTop() >= offsetblog && $(window).scrollTop() <= offsetcontact) {
      $(".navbar ul li a").removeClass("active");
      $("#blog").addClass("active");
  }
  else  {
      $(".navbar ul li a").removeClass("active");
      $("#contact").addClass("active");
  }

    // arrow
    if ($(window).scrollTop() >= offsetabout) {
      $(".arrow").fadeIn(1000);
    } else {
      $(".arrow").fadeOut(1000);
    }
  });

  /* ************************* */
  /* ********* navbar ******** */
  /* ************************* */

  $(".navbar ul li a").click(function () {
    txt = this.text.toLowerCase();
    offsetnav = $(`.${txt}`).offset().top;
    console.log(offsetnav);
    $(".navbar ul li a").removeClass("active");
    $(this).addClass("active");
    $("html,body").animate(
      {
        scrollTop: offsetnav,
      },
      2000
    );
    if (txt == "home"){
      $("html,body").animate(
        {
          scrollTop: 0,
        },
        2000
      );
    }
  });

  /* ************************* */
  /* ***** typed plugin ****** */
  /* ************************* */
  var typed = new Typed("#element", {
    strings: ["Wagdy Ashraf.|", "A Frontend Developer.|", "A Web Design.|"],
    smartBackspace: true,
    typeSpeed: 100,
    backSpeed: 100,
    startDelay: 100,
    loop: true,
  });
});
