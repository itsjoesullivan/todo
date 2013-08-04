/* Instantiate vim */

vim.edit({
	el: document.getElementById('todo')
});

/* Grab text, set vim */

var text = cookie('text') || "#Your todo list.\n- add a task"; 
vim.text(text);


/* Add useful commands */

// :w -> save
vim.addCommand({
	mode: "command",
	match: /:w\n/,
	fn: function() {
		cookie('text',vim.text());
	}
});

// :wq -> save and quit
vim.addCommand({
	mode: "command",
	match: /:wq\n/,
	fn: function() {
		vim.exec(':w\n');
		window.open('', '_self', ''); 
		window.close(); 
		}
});

// ZZ -> :wq
vim.addCommand({
	mode: "command",
	match: /^ZZ/,
	fn: function() {
		vim.exec(':wq\n');
	}
});

