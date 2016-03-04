(function(exports) {
  exports.screenshotTask = function(url, container, width, height) {
    width = width || 320;
    height = height || 480;
    return new Promise(resolve => {
      var offscreen = document.createElement('div');
      //offscreen.style.transform = 'translateX(-100000px)';
      container.appendChild(offscreen);

      var result = document.createElement('div');
      result.style.width = `${width}px`;
      result.style.height = `${height}px`;
      result.style.backgroundSize = 'contain';
      result.style.backgroundRepeat = 'no-repeat';

      container.appendChild(result);

      iframeTask(url, offscreen, width, height).then(iframe => {
        var request = iframe.getScreenshot(width, height);

        request.onsuccess = function() {
          var blob = request.result;
          var url = URL.createObjectURL(blob);
          result.style.backgroundImage = `url(${url})`;

          offscreen.remove();
          resolve();
        };
      });
    });
  };
})(window);
