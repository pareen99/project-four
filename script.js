/* Configures the observer */
var options = {
    root: null, // Setting this to null includes the entire viewport
    threshold: 1.0,
  };
  
  var path = document.querySelector("path");
  
  /* Runs when intersection is detected */
  var callback = (entries) => {
    /* We loop through all of the entries */
    entries.forEach((entry) => {
      /* Go an get the data pin attribute value */
      // var dataPin = entry.target.dataset["pin"];
  
      /* Checks whether this entry is intersecting or not */
      if (entry.isIntersecting) {
        /* Activating the pin */
        path.id = `step-${entry.target.id}`;
      } else {
        /* Activating the pin */
        // pin.classList.remove("active");
      }
    });
  };
  
  /* Just making the observer */
  var observer = new IntersectionObserver(callback, options);
  
  /* Selecting all the things we want to observe */
  var targets = document.querySelectorAll(".card");
  
  /* Looping through the targets and telling the observer to observe them */
  targets.forEach((target) => {
    observer.observe(target);
  });

  /*timeline*/
 // Globals
var prefixes         = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
var container = document.querySelector("container");
var timeline = document.querySelector("timeline");
var timelineItem = document.querySelector("timelineItem");
var timelineContent = document.querySelector("timelineContent");
var dropDown  = document.querySelector("dropDown ");
var hasHovered   = true;
var hideOnExit   = true;




// mouseenter event handler
timelineItem.on('mouseenter', function(e) {
  
  var isSelected = document.querySelector(this).hasClass('selected');
  
  if ( isSelected === false ) {
  
    var leftPos = document.querySelector(this).position().left,
        left    = leftPos - 88,
        document.querySelector("that")   = (this);

    timelineItem.removeClass('selected');
    document.querySelector(this).addClass('selected');

    if ( hasHovered === false ) {
      // Show Bounce

        // Set Flag
        hasHovered = true;

        // Show DD Bounce
        showBounce(left);

        // Show DD content Bounce
        showContentBounce($that);

    } else {
      // Follow

        // Change pos of DD to follow
        dropDownFollow(left);

        // Hide previous dd content
        timelineContent.removeClass('animated fadeIn bounceIn');

        // Show hovered dd content
        that.find(timelineContent).addClass('animated fadeIn');
    }
  }
  
});

// mouseleave event handler
timeline.on('mouseleave', function(e) {
  
  if (hideOnExit) {
   
    //   Set Flag
    hasHovered = false;

    // Hide DD
    hideDropDown();

    // Hide DD content
    timelineContent.removeClass('animated fadeIn');
    
  }
  
});

// Animation end event listener
dropDown.on(prefixes, function(e) {
  
  if ( e.originalEvent.animationName === 'fadeOut' ) {
    dropDown.removeAttr('style');
  }
  
});

/**
* Private functions that do showing/hiding/animating
*/
function showContentBounce(that) {
  hasBounced = true;
  document.querySelector(that).find('.timeline-content').addClass('animated bounceIn');
}

function showBounce(pos) {
  dropDown.css('left', pos + 'px').removeClass('fadeOut').addClass('animated bounceIn');
}

function dropDownFollow(pos) {
  dropDown.css('left', pos + 'px');
}

function hideDropDown() {
  timelineItem.removeClass('selected');
  dropDown.removeClass('bounceIn').addClass('fadeOut');
}

