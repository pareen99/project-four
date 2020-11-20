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