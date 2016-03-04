(function(exports) {
  exports.iframeTask = function(url, container, width, height) {
    width = width || 200;
    height = height || 200;
    return new Promise(resolve => {
      var iframe = document.createElement('iframe');
      iframe.setAttribute('mozbrowser', 'true');
      iframe.setAttribute('remote', 'true');
      iframe.style.width = `${width}px`;
      iframe.style.height = `${height}px`;
      iframe.src = url;

      iframe.addEventListener('mozbrowserloadend', function loadEnd() {
        iframe.removeEventListener('mozbrowserloadend', loadEnd);
        resolve(iframe);
      });

      container.appendChild(iframe);
    });
  };
})(window);
