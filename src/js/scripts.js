var navigationScroll = function() {

  "use strict";

  // Scroll from top navigation to hashed section.

  $('a[href^="#"]').click(function() {
    $.scrollTo($(this).attr('href'), 800);
  });
}();

var youtubeVideoEmbed = function() {

  "use strict";

  var youtube = document.querySelectorAll(".youtube-video-embed");

  for (var i = 0; i < youtube.length; i++) {
    var thumbnailUrl = "/img/content/youtube-cover.jpg";

    var image = new Image();
    image.src = thumbnailUrl;
    image.addEventListener("load", function() {
      youtube[i].appendChild(image);
    }(i));

    youtube[i].addEventListener( "click", function() {

      var iframe = document.createElement("iframe");

      iframe.setAttribute("frameborder", "0");
      iframe.setAttribute("allowfullscreen", "");
      iframe.setAttribute("src", "https://www.youtube.com/embed/"+ this.dataset.embed +"?rel=0&showinfo=0&autoplay=1");

      this.innerHTML = "";
      this.appendChild(iframe);
    } );
  }

}();