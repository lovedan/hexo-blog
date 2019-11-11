'use strict';

var pathRegex = new RegExp(
  '((([A-Za-z]{3,9}:(?:\\/\\/)?)(?:[-;:&=+$,\\w]+@)?' +
  '[A-Za-z0-9.-]+|(?:www.|[-;:&=+$,\\w]+@)[A-Za-z0-9.-]+)' +
  '((?:\\/[\\+~%\\/.\\w-_]*)?\\??(?:[-+=&;%@.\\w_]*)' +
  '#?(?:[.!\\/\\w]*))|^[A-Za-z0-9_\\/-]+\\.\\w{2,4})');

/**
 * image tag
 *
 * Syntax: {% dropbox ShareX/2017/02/2017-02-03_14-27-46.png 50 %}
 */
 
hexo.extend.tag.register('img', function(args, content){
  var id = args[0];
  return 'http://img.jiangnan.pw';
});
hexo.extend.tag.register('dropbox', function(args, content){
  var image = args[0];
  var width = args[1];
  return '<img width="'+ width +'" src="https://dl.dropboxusercontent.com/u/24907579/'+ image + '">' ;
});
hexo.extend.tag.register('jiangnan', function(args){
  var thumbnail = args[0];
  return '<img src="http://file.jiangnan.pw/520904808/' + thumbnail + '">' ;
});
hexo.extend.tag.register('embed', function(args){
  var id = args[0];
  return '<div class="video-container"><iframe width="560" height="315" src="http://www.youtube.com/embed/' + id + '" frameborder="0" allowfullscreen></iframe></div>';
});