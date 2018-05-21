const parentEl = document.body;

function init(arr, num) {
	let list = parentEl.appendChild(document.createElement('ul'));

	for (i = 0; i < num; i++) {
		let listLi = list.appendChild(document.createElement('li'));
		listLi.className = arr.className;

		for (key in arr.attributes) {
			listLi.setAttribute(key, arr.attributes[key])
		}
		listLi.innerHTML = arr.content;
	}
}

function listen() {
	let list = document.querySelector('ul');
	document.querySelector('button').addEventListener('click', function(){
		if (document.body.lastChild === list) {
			document.body.removeChild(list);
			return true;
		} else {
			return false;
		}
	});
}