//listen for click in iframe

console.log('hi');
focus();
var listener = window.addEventListener('blur', function() {
    if (document.activeElement === document.getElementById('iframe')) {
        console.log('clicked');
		var sheet = document.createElement('style')
		sheet.innerHTML = "iframe {opacity: 1 !important; -webkit-filter: grayscale(0%) !important; filter: grayscale(0%) !important; mix-blend-mode: normal !important;}";
		document.body.appendChild(sheet);
    }
    window.removeEventListener('blur', listener);
});