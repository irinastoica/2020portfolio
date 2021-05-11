import simpleParallax from "simple-parallax-js";

window.onload=function() {

  const button = document.querySelector('.toggle');
  const overlay = document.querySelector('.overlay');
  const exit = document.querySelector('.exit');
  const logo = document.querySelector('.logo');
  const colors = ['', 'lightPink', 'darkSkyBlue', 'aquamarine', 'electricBlue']
  const sections = [...document.getElementsByTagName('section')];

  const image = document.getElementsByClassName('thumbnail');
  new simpleParallax(image);
  var video = document.getElementsByClassName('video-animation');
  new simpleParallax(video);

  var tl = gsap.timeline({ defaults: { duration: 1, ease: Back.easeOut.config(2) } });

  tl.paused(true);
  tl.to(".overlay", {clipPath: 'circle(100%)'});


  button.addEventListener('click', () => {
    tl.play();
    button.classList.add("isOpen");
    logo.classList.add("logo--white");
  });

  exit.addEventListener('click', () => {
    tl.reverse(.8);
    logo.classList.remove("logo--white");
  });


  window.addEventListener('scroll', function () {

    const scrollFromTop = window.pageYOffset;

    for (let i = 0; sections.length > i; i++) {

      if (scrollFromTop <= sections[i].offsetTop) {
        document.body.className = colors[i];
        break
      }

    }

  });
};

$.fn.moveIt = function(){

  var $window = $(window);
  var instances = [];

  $(this).each(function(){
    instances.push(new moveItItem($(this)));
  });

  window.onscroll = function(){
    var scrollTop = $window.scrollTop();
    instances.forEach(function(inst){
      inst.update(scrollTop);
    });
  }
}

var moveItItem = function(el){

  this.el = $(el);
  this.speed = parseInt(this.el.attr('data-scroll-speed'));
};

moveItItem.prototype.update = function(scrollTop){
  this.el.css('transform', 'translateY(' + -(scrollTop / this.speed) + 'px)');
  this.el.css('transform', 'scale(' + -(scrollTop / this.speed) + 'px)');
};



// Initialization
$(function(){
  $('[data-scroll-speed]').moveIt();
});

/*
 * CSS3 Animate it
 * Copyright (c) 2014 Jack McCourt
 * https://github.com/kriegar/css3-animate-it
 * Version: 0.1.0
 */
(function($) {
  var selectors = [];

  var check_binded = false;
  var check_lock = false;
  var defaults = {
    interval: 200,
    force_process: false
  }
  var $window = $(window);

  var $prior_appeared;

  function process() {
    check_lock = false;
    for (var index = 0; index < selectors.length; index++) {
      var $appeared = $(selectors[index]).filter(function() {
        return $(this).is(':appeared');
      });

      $appeared.trigger('appear', [$appeared]);

      if ($prior_appeared) {

        var $disappeared = $prior_appeared.not($appeared);
        $disappeared.trigger('disappear', [$disappeared]);
      }
      $prior_appeared = $appeared;
    }
  }

  // "appeared" custom filter
  $.expr[':']['appeared'] = function(element) {
    var $element = $(element);
    if (!$element.is(':visible')) {
      return false;
    }

    var window_left = $window.scrollLeft();
    var window_top = $window.scrollTop();
    var offset = $element.offset();
    var left = offset.left;
    var top = offset.top;

    if (top + $element.height() >= window_top &&
      top - ($element.data('appear-top-offset') || 0) <= window_top + $window.height() &&
      left + $element.width() >= window_left &&
      left - ($element.data('appear-left-offset') || 0) <= window_left + $window.width()) {
      return true;
    } else {
      return false;
    }
  }

  $.fn.extend({
    // watching for element's appearance in browser viewport
    appear: function(options) {
      var opts = $.extend({}, defaults, options || {});
      var selector = this.selector || this;
      if (!check_binded) {
        var on_check = function() {
          if (check_lock) {
            return;
          }
          check_lock = true;

          setTimeout(process, opts.interval);
        };

        $(window).scroll(on_check).resize(on_check);
        check_binded = true;
      }

      if (opts.force_process) {
        setTimeout(process, opts.interval);
      }
      selectors.push(selector);
      return $(selector);
    }
  });

  $.extend({
    // force elements's appearance check
    force_appear: function() {
      if (check_binded) {
        process();
        return true;
      };
      return false;
    }
  });
})(jQuery);



(function($){
  '$:nomunge'; // Used by YUI compressor.

  var cache = {},

    // Reused internal string.
    doTimeout = 'doTimeout',

    // A convenient shortcut.
    aps = Array.prototype.slice;

  $[doTimeout] = function() {
    return p_doTimeout.apply( window, [ 0 ].concat( aps.call( arguments ) ) );
  };


  $.fn[doTimeout] = function() {
    var args = aps.call( arguments ),
      result = p_doTimeout.apply( this, [ doTimeout + args[0] ].concat( args ) );

    return typeof args[0] === 'number' || typeof args[1] === 'number'
      ? this
      : result;
  };

  function p_doTimeout( jquery_data_key ) {
    var that = this,
      elem,
      data = {},

      // Allows the plugin to call a string callback method.
      method_base = jquery_data_key ? $.fn : $,

      // Any additional arguments will be passed to the callback.
      args = arguments,
      slice_args = 4,

      id        = args[1],
      delay     = args[2],
      callback  = args[3];

    if ( typeof id !== 'string' ) {
      slice_args--;

      id        = jquery_data_key = 0;
      delay     = args[1];
      callback  = args[2];
    }

    // If id is passed, store a data reference either as .data on the first
    // element in a jQuery collection, or in the internal cache.
    if ( jquery_data_key ) { // Note: key is 'doTimeout' + id

      // Get id-object from the first element's data, otherwise initialize it to {}.
      elem = that.eq(0);
      elem.data( jquery_data_key, data = elem.data( jquery_data_key ) || {} );

    } else if ( id ) {
      // Get id-object from the cache, otherwise initialize it to {}.
      data = cache[ id ] || ( cache[ id ] = {} );
    }

    // Clear any existing timeout for this id.
    data.id && clearTimeout( data.id );
    delete data.id;

    // Clean up when necessary.
    function cleanup() {
      if ( jquery_data_key ) {
        elem.removeData( jquery_data_key );
      } else if ( id ) {
        delete cache[ id ];
      }
    };

    // Yes, there actually is a setTimeout call in here!
    function actually_setTimeout() {
      data.id = setTimeout( function(){ data.fn(); }, delay );
    };

    if ( callback ) {
      // A callback (and delay) were specified. Store the callback reference for
      // possible later use, and then setTimeout.
      data.fn = function( no_polling_loop ) {

        // If the callback value is a string, it is assumed to be the name of a
        // method on $ or $.fn depending on where doTimeout was executed.
        if ( typeof callback === 'string' ) {
          callback = method_base[ callback ];
        }

        callback.apply( that, aps.call( args, slice_args ) ) === true && !no_polling_loop

          // Since the callback returned true, and we're not specifically
          // canceling a polling loop, do it again!
          ? actually_setTimeout()

          // Otherwise, clean up and quit.
          : cleanup();
      };

      // Set that timeout!
      actually_setTimeout();

    } else if ( data.fn ) {

      delay === undefined ? cleanup() : data.fn( delay === false );
      return true;

    } else {
      // Since no callback was passed, and data.fn isn't defined, it looks like
      // whatever was supposed to happen already did. Clean up and quit!
      cleanup();
    }

  };

})(jQuery);


