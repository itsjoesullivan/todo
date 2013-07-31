vim.edit({
	el: document.getElementById('todo')
});
var text = cookie('text') || "#Your todo list.\n- add a task"; 
vim.text(text);

$(window).bind('beforeunload', function(){
	cookie('text',vim.text());
});
