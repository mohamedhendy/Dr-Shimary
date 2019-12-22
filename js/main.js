/* globals $, WOW */
$(document).ready(function() {
  // wow animation
  new WOW().init();



  var pageLinks = $(".navigation li a");
  pageLinks.click(function() {
    var pageButton = $(this).parent();
    var pageButtonSiblings = pageButton.siblings();

    // perform page transition
    var pageElement = $("." + pageButton.attr("id"));
    var pageElementSiblings = pageElement.siblings();
    pageElement.show();
    pageElementSiblings.hide();

    // activate button
    pageButton.addClass("buttonActiveStyle");
    pageButtonSiblings.removeClass("buttonActiveStyle");

    // activate button icon
    pageButton.addClass("active");
    pageButtonSiblings.removeClass("active");

    // page transition
    if ($(".wow").hasClass("animated")) {
      $(this).removeClass("animated");
      $(this).removeAttr("style");
      new WOW().init();
    }
  });
  // save link if you use it directly
  var hashValue = window.location.hash;
  var hashLength = hashValue.length;
  if (hashLength > 0) {
    // show reference link page content

    var pageContentClass = $("." + hashValue.slice(1));
    var pageContentSibilingClass = pageContentClass.siblings();
    pageContentClass.show();
    pageContentSibilingClass.hide();

    // active page button
    var pageButton = $("." + hashValue.slice(1) + "z");
    var pageButtonSiblings = pageButton.siblings();
    pageButton.addClass("buttonActiveStyle");
    pageButtonSiblings.removeClass("buttonActiveStyle");

    // active page button img
    pageButton.addClass("active");
    pageButtonSiblings.removeClass("active");
  } else if (hashValue >= 0) {
    
    //  show default page when no hash access
    var defaultPage = $(".profile");
    var defaultPageSibilngs = defaultPage.siblings();
    defaultPage.show();
    defaultPageSibilngs.hide();

    var defaultActiveButton = $('.profilez');
    var defaultActiveButtonSibilngs = defaultActiveButton.siblings();
    defaultActiveButton.addClass("buttonActiveStyle");
    defaultActiveButtonSibilngs.removeClass("buttonActiveStyle");


    defaultActiveButton.addClass("active");
    defaultActiveButtonSibilngs.removeClass("active");

  } else {
    console.log(" Error with hash");
  }



  // Repeat demo content

  WOW.prototype.addBox = function(element) {
    this.boxes.push(element);
  };

  // Init WOW.js and get instance
  var wow = new WOW();
  wow.init();

  $(".wow")
    .on("scrollSpy:exit", function() {
      $(this)
          .css({
            visibility: "hidden",
            "animation-name": "none"
          })
          .removeClass("animated");
      wow.addBox(this);
    })
    .scrollSpy();
});
