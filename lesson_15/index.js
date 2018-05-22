const parentEl = document.body;

function init(arr, num) {
	let list = parentEl.appendChild(document.createElement('ul'));

	for (i = 0; i < arr.length; i++) {
		let obj = arr[i];
		for (j = 0; j < num; j++) {
			let listLi = list.appendChild(document.createElement('li'));
			listLi.className = obj.className;

			for (key in obj.attributes) {
				listLi.setAttribute(key, obj.attributes[key])
			}
			// listLi.innerHTML = arr.content;
			listLi.appendChild(document.createTextNode(obj.content));
		}
	}
}

function listen() {
	document.querySelector('button').addEventListener('click', function(){
		let list = document.querySelector('ul');
		if (list) {
			document.body.removeChild(list);
			// return console.log(true);
			return true;
		} else {
			// return console.log(false);
			return false;
		}
	});
}