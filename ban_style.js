function ban_style(styletoban, query_sel = '*') {
	if(!query_sel) {
		query_sel = "*";
	}
	removed_from_count = 0;
	dom = document.querySelectorAll(query_sel)
	for (var i = dom.length - 1; i >= 0; i--) {
		has_text_shadow = (dom[i].style[styletoban] !== "" ? true : false)
		if(has_text_shadow) {
			dom[i].style[styletoban] = 'none';
			orig_title = dom[i].getAttribute('title')
			if(orig_title !== null) {
				dom[i].setAttribute('title', orig_title+' // This element had a text shadow applied.');
			} else {
				dom[i].setAttribute('title', 'This element had a text shadow applied.');
			}
			removed_from_count++;
		}
	}
	if(removed_from_count > 0 & !query_sel) {
		alert("===NO "+unCamelCase(styletoban).toUpperCase()+"===\n"+removed_from_count+" elements had their text shadows removed");
	}
}

function unCamelCase (str){
    return str
        // insert a space between lower & upper
        .replace(/([a-z])([A-Z])/g, '$1 $2')
        // space before last upper in a sequence followed by lower
        .replace(/\b([A-Z]+)([A-Z])([a-z])/, '$1 $2$3')
        // uppercase the first character
        .replace(/^./, function(str){ return str.toUpperCase(); })
}

ban_style('textShadow', 'font, a, h2, h1, h3, h4, h5, p, li')
