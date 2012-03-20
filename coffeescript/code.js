$(document).ready(function() {
	$('.code').each(function() {
		var html = $(this).text();
		//html = html.replace(/('|")([\w\s]*?)('|")/igm, '<span class="string">\'$2\'</span>')

		html = html.replace(/(new|function|return|super|for|var|\sextends|class|@\w+|->|this)/igm, '<span class="rule">$1</span>');
		$(this).html(html);
	});
});