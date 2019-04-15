const swup = new Swup();
const onPageLoad = () => {
  smartquotes();

  // If there are unloaded instagram embeds.
  if (document.getElementsByClassName("instagram-media").length > 0) {
    if (!window.instgrm) {
      console.log("Loading Instagram embed script");

      ((d, s, id) => {
        var js;
        var fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {
          return;
        }
        js = d.createElement(s);
        js.id = id;
        js.onload = () => {
          // https://www.instagram.com/developer/embedding/
          window.instgrm.Embeds.process();
        };
        js.src = "https://platform.instagram.com/en_US/embeds.js";
        fjs.parentNode.insertBefore(js, fjs);
      })(document, "script", "instagram-ejs");
    } else {
      window.instgrm.Embeds.process();
    }
  }

  // If there are unloaded tweet embeds.
  // NOTE: It's important that twitter's is last, because nothing else will load
  // otherwise.
  if (document.getElementsByClassName("twitter-tweet").length > 0) {
    if (!twttr) {
      console.log("Loading Twitter embed script");

      // https://developer.twitter.com/en/docs/twitter-for-websites/javascript-api/guides/set-up-twitter-for-websites
      var twttr = ((d, s, id) => {
        var js;
        var fjs = d.getElementsByTagName(s)[0];
        var t = window.twttr || {};
        if (d.getElementById(id)) return t;
        js = d.createElement(s);
        js.id = id;
        js.src = "https://platform.twitter.com/widgets.js";
        fjs.parentNode.insertBefore(js, fjs);

        t._e = [];
        t.ready = f => {
          t._e.push(f);
        };

        return t;
      })(document, "script", "twitter-wjs");
    }

    // https://developer.twitter.com/en/docs/twitter-for-websites/javascript-api/guides/scripting-loading-and-initialization
    twttr.widgets.load();
  }
};

document.addEventListener("DOMContentLoaded", onPageLoad);
swup.on("contentReplaced", onPageLoad);
