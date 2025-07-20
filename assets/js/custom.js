window.addEventListener('load', function() {
  setTimeout(function() {
    const originalTween = i.to;
    let count = 0;
    i.to = function(target, duration, options) {
      if (count < 2) {
        duration = 5;
      } else {
        duration = 8;
      }
      count++;
      return originalTween(target, duration, options);
    };
  }, 100);
});
