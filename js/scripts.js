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

var eventListing = function() {

  "use strict";

  function slugify(text) {
    return text.toString().toLowerCase()
      .replace(/\s+/g, '-')           // Replace spaces with -
      .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
      .replace(/\-\-+/g, '-')         // Replace multiple - with single -
      .replace(/^-+/, '')             // Trim - from start of text
      .replace(/-+$/, '');            // Trim - from end of text
  }

  $.get('https://toledotechevents.org/events/search.ics?tag=coderdojo', {}, function (iCalendarData) {

    var jcalData = ICAL.parse(iCalendarData);
    var comp = new ICAL.Component(jcalData);
    var unixNow = new Date().getTime() / 1000 + 57600;
    var events = comp.getAllSubcomponents("vevent")
      .map(function (event) { return new ICAL.Event(event); })
      .filter(function (event) { return event.startDate.toUnixTime() > unixNow; })
      .slice(0, 3)
      .map(function (event) {
        return '<div class="col-sm-12 col-md-6 col-xl-4">' +
          '<div class="event-item event-' + slugify(event.location) + '"> ' +
          '<h4 class="event-name">' + event.summary + '</h4> ' +
          '<p class="event-details">' + event.location + '<br /><time>' + moment.utc(event.startDate.toUnixTime(), "X").format("MMMM D, YYYY, ha - ") + moment.utc(event.endDate.toUnixTime(), "X").format("ha") + '</time></p>' +
          '<a class="btn btn-outline-light" target="_blank" href="' + event.uid + '">More Info</a>' +
          '</div>' +
          '</div>';
      })
      .join(' ');

    $("#eventsDiv").html(events);
  });
}();
