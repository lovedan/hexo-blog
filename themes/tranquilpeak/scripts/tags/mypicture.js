'use strict';

var pathRegex = new RegExp(
  '((([A-Za-z]{3,9}:(?:\\/\\/)?)(?:[-;:&=+$,\\w]+@)?' +
  '[A-Za-z0-9.-]+|(?:www.|[-;:&=+$,\\w]+@)[A-Za-z0-9.-]+)' +
  '((?:\\/[\\+~%\\/.\\w-_]*)?\\??(?:[-+=&;%@.\\w_]*)' +
  '#?(?:[.!\\/\\w]*))|^[A-Za-z0-9_\\/-]+\\.\\w{2,4})');

/**
 * image tag
 *
 * Syntax: {% img %}
 */
 
hexo.extend.tag.register('img', function(args, content){
  var id = args[0];
  return 'http://img.jiangnan.pw';
});
hexo.extend.tag.register('baidu', function(args){
  var thumbnail = args[0];
  return 'http://d.139.sh/520904808' + thumbnail ;
});
hexo.extend.tag.register('embed', function(args){
  var id = args[0];
  return '<div class="video-container"><iframe width="560" height="315" src="http://www.youtube.com/embed/' + id + '" frameborder="0" allowfullscreen></iframe></div>';
});