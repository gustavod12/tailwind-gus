// Funcion para evitar los errores de `consola` en los navegadores que carecen de una consola.
(function() {
  var method;
  var noop = function () {};
  var methods = [
    'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
    'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
    'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
    'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
  ];
  var length = methods.length;
  var console = (window.console = window.console || {});

  while (length--) {
    method = methods[length];

    // Solo metodos stub (talon) indefinidos.
    if (!console[method]) {
      console[method] = noop;
    }
  }
}());

// Para colocar despues de acá cualquier complemento jQuery/helper //