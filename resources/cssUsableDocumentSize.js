const HTML_ROOT_ELEMENT = document.documentElement;
function updateUsableDocumentSize() {
	const CLIENT_WIDTH = String(HTML_ROOT_ELEMENT.clientWidth) + "px";
	const CLIENT_HEIGHT = String(HTML_ROOT_ELEMENT.clientHeight) + "px";
	HTML_ROOT_ELEMENT.style.setProperty("--client-width", CLIENT_WIDTH);
	HTML_ROOT_ELEMENT.style.setProperty("--client-height", CLIENT_HEIGHT);
};
updateUsableDocumentSize();
const ATTRIBUTE_CHANGE_OBSERVER = new MutationObserver(updateUsableDocumentSize);
ATTRIBUTE_CHANGE_OBSERVER.observe(HTML_ROOT_ELEMENT, {
	attributeFilter: ["clientWidth", "clientHeight"]
});