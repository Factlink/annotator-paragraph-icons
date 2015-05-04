// Isolate libraries from global libraries to some degree. Uses jQuery from
// Annotator.js for now.
// TODO: Better would be to wrap everything, including the Annotator.js
// library in an iframe to get full isolation from the host page.
// See: https://github.com/Factlink/js-library/blob/825adb0548af92fc21d6f22b2deb9ec768a4a3f2/app/js/loader/loader_common.coffee
(function($, Tether) {
  var global = this;
