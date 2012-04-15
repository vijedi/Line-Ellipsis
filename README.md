JQuery Plugin For Line Based Ellipsis
=====================================

Line Ellipsis is a jQuery plugin inspired by (jquery-ellipis)[https://github.com/sakura-sky/jquery-ellipsis].

Unlike Ellipsis which works on element height, Line Ellipsis truncates text based on the number of requested lines. The number of requested lines are defined through [jQuery Metadata](https://github.com/jquery/jquery-metadata).

Usage
-----

To invoke Line Ellipsis on a specific element, use the following:

	$('selector').lineEllipsis();

The required peice of Metadata is the number of lines:

	<div class="lineEllipsis {numLines: 2}">This is a whole lot of text that should only render as one line</div>

The plugin also supports truncating a child element. This can be useful with generated elements:

	<div class="lineEllipsis {numLines: 2, child: a}"><a href="http://tejusparikh.com">This is the text that will be truncated</a></div>

Known Issues
-------------

**Performance**: The plugin doesn't do a good job of identifying character widths. Therefore it does more string concatinations than strictly necessary

**Nested Elements**: The plugin does not work with nested elements within the section that will be truncated. If you have nested elements, you will likely lose close tags and your page will look incorrect.