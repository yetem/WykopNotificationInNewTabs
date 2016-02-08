
function openInNewTabs(){
	$(".type-light-warning").each(function(index){
		window.open(
			$(this).find("a").last().attr("href")
		)
	});
}

$(document).ready(function(){
	$(".nav.bspace").find("ul").first().append("<li><a style='cursor:pointer;' id='wykop-plugin-button'>Otwórz w nowych zakładkach</a></li>");
	$("#wykop-plugin-button").click(openInNewTabs);
});

