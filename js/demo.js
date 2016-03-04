(function() {
  var input = document.querySelector('input');
  var button = document.querySelector('button');
  var results = document.getElementById('results');

  button.addEventListener('click', () => {
    prefetch(input.value, results);
  });

  function prefetch(url, container) {

    //iframeTask(url, container, 320, 480);

    screenshotTask(url, container)
      .then(screenshotTask.bind(null, url, container, 1024, 768));
  }
})();
