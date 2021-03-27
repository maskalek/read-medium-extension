;(function() {
    

    function replacePageContent() {
		
		
        fetch(window.location.href, {
                method: 'GET',
                credentials: 'omit',
                mode: 'no-cors',
            }
        )
		.then(response => response.text())
		.then(content => {
            const newHTML = document.open("text/html", "replace"); 
            newHTML.write(content); 
            newHTML.close(); 
        });
    }
	
    replacePageContent();
	
})();