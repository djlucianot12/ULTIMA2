window.addEventListener('load', function() {
  setTimeout(function() {
    const originalTween = i.to;
    i.to = function(target, duration, options) {
      if (duration === 1.2) {
        duration = 3.2;
      }
      return originalTween(target, duration, options);
    };
  }, 100);
});
