export function tooltip(element, params) {
	let div;
	function mouseOver(event) {
		const { title, zIndex } = params
		
		const rightAlign = event.pageX > 500
		if (!div) {
			div = document.createElement('div');
		}
		div.innerHTML = title;
		div.style = `
			border: 1px solid #ddd;
			box-shadow: 1px 1px 1px #ddd;
			background: white;s
			border-radius: 4px;
			padding: 4px;
			position: absolute;
   max-width: 300px;
   font-size: 11px;
			top: ${event.pageX + 5}px;
			left: ${event.pageY}px;
			transform: translateX(${rightAlign ? -150 : 0}px);
			width: ${rightAlign ? '150px' : 'auto'};
   z-index: ${zIndex};
		`;
		document.body.appendChild(div);
	}
	function mouseMove(event) {
		div.style.left = `${event.pageX + 5}px`;
		div.style.top = `${event.pageY + 5}px`;
	}
	function mouseLeave() {
		document.body.removeChild(div);
	}
	
	element.addEventListener('mouseover', mouseOver);
 element.addEventListener('mouseleave', mouseLeave);
	element.addEventListener('mousemove', mouseMove);
	
	return {
		destroy() {
			element.removeEventListener('mouseover', mouseOver);
			element.removeEventListener('mouseleave', mouseLeave);
			element.removeEventListener('mousemove', mouseMove);
		}
	}
}