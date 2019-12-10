// Your code here
let dodger = document.getElementById('dodger');

document.addEventListener('keydown', function(e) {
	switch (e.key) {
		case 'ArrowLeft':
			moveDodgerLeft();
			break;
		case 'ArrowRight':
			moveDodgerRight();
			break;
		// case 'ArrowDown':
		// 	moveDodgerDown();
		// 	break;
		// case 'ArrowUp':
		// 	moveDodgerUp();
		// 	break;
	}
});

function moveDodgerLeft() {
	let leftNumbers = dodger.style.left.replace('px', '');
	let left = parseInt(leftNumbers, 10);

	if (left > 0) {
		dodger.style.left = `${left - 1}px`;
	}
}

function moveDodgerRight() {
	let leftNumbers = dodger.style.left.replace('px', '');
	let left = parseInt(leftNumbers, 10);

	if (left > 0) {
		dodger.style.left = `${left + 1}px`;
	}
}

// function moveDodgerUp() {
// 	let upNumbers = dodger.style.up.replace('px', '');
// 	let up = parseInt(upNumbers, 10);

// 	if (up > 0) {
// 		dodger.style.up = `${up - 1}px`;
// 	}
// }

// function moveDodgerDown() {
// 	let downNumbers = dodger.style.down.replace('px', '');
// 	let down = parseInt(downNumbers, 10);

// 	if (down > 0) {
// 		dodger.style.down = `${down - 1}px`;
// 	}
// }
