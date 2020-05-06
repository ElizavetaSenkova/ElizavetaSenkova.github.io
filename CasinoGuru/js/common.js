$(function() {

	// tabs
  $('#my-tabs a').click(function (e) {
    e.preventDefault()
    $(this).tab('show')
  });

  $('#my-tabs li:first-child a').tab('show');
  // tabs

  // blog-grid
  let magicGrid = new MagicGrid({
    container: ".grid-container",
    animate: true,
    gutter: 30,
    static: true,
    useMin: true
  });

  magicGrid.listen();
  // blog-grid

});
