console.log('docs');
$( window ).bind( "create.xrayhtml", function( e ) {
    $('pre code').each(function(i, block) {
    hljs.highlightBlock(block);
  });
});
