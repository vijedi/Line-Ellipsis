(function($) {
	$.fn.lineEllipsis = function() {
        return this.each(function() {
                var el = $(this);
                var md = el.metadata();
                if(null != md && md.numLines && el.height() > 0) {

                	if(el.css('display') == 'none') {
                		el.css('visibility', 'hidden').css('display', 'block');
                	}
				    var container = el;
				    if(md.child) {
				    	container = el.find(md.child);
				    }

                	var tmp = $('<span style="visibility: hidden;">WXinabcdy</span>').appendTo(container);
				    var charWidth = Math.ceil(tmp.width() / 9);
				   	var charHeight = tmp.height();
				    tmp.remove();

				   	var text = container.html();

				   	var t = $(container[0].cloneNode(true))
                            .css('visibility', 'hidden')
                            .css('position', 'relative')
                            .css('overflow', 'visible')
                            .width(container.width())
                            .height('auto')
                            ;

                    container.after(t);

                	var numLines = md.numLines;
                    var height = numLines * charHeight;
                    var charsPerLine = Math.ceil(container.width() / charWidth);
                    text = text.substr(0, numLines * (charsPerLine) * 1.6);
                    var times = 0;
                    while (text.length > 0 && (t.height() > height)) {
                        text = text.substr(0, text.length - 1);
                        t.html(text + "...");
                        times++;
                        
                    }
                    container.html(t.html());
                    t.remove();
                    el.css('visibility', 'visible');
                }
        });
    };
})(jQuery);