var $tabContainer = document.querySelector('.tab-container');
var $tab = document.querySelectorAll('.tab');
var $view = document.querySelectorAll('.view');

$tabContainer.addEventListener('click', function tabContainerCheck(event) {
  if (event.target.matches('.tab')) {
    for (var i = 0; i < $tab.length; i++) {
      if ($tab[i].dataset.view === event.target.dataset.view) {
        $tab[i].className = 'tab active';
      } else {
        $tab[i].className = 'tab';
      }
    }
  }
  if (event.target.matches('.tab')) {
    var pageView = event.target.dataset.view;
    for (var j = 0; j < $view.length; j++) {
      if ($view[j].dataset.view === pageView) {
        $view[j].className = 'view';
      } else {
        $view[j].className = 'view hidden';
      }
    }
  }
});
