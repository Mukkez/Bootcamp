const train = document.querySelector('#train');

let posTrain = 5,
	runTrainRight = 0,
	runTrainLeft;

window.addEventListener('keyup', (event) => {
	switch (event.key) {
		case 'ArrowRight':
			function animationTrainRight() {
				train.style.left = `${parseInt(train.style.left) + posTrain}px`;
			}
			if (runTrainRight == 0) {
				runTrainRight = setInterval(animationTrainRight, 16);
			}

			break;
		case 'ArrowLeft':
			function animationTrainLeft() {
				train.style.left = `${parseInt(train.style.left) - posTrain}px`;
			}
			if (runTrainLeft == 0) {
				runTrainLeft = setInterval(animationTrainLeft, 16);
			}
			break;
		case 'ArrowDown':
			console.log(runTrainRight);
			clearInterval(runTrainRight);
			clearInterval(runTrainLeft);
			runTrainRight = 0;
			break;
		case 'ArrowUp':
			document.querySelector('#wall').innerHTML = `<img src="assets/img/tree.png" id="tree" class="tree">`;

			function trainCollision() {
				let trainCollision = parseInt(window.getComputedStyle(train).getPropertyValue('left'));
				let treePosi = parseInt(window.getComputedStyle(document.querySelector('#tree')).getPropertyValue('left'));
				if (trainCollision >= treePosi - 50) {
					clearInterval(runTrainRight);
					clearInterval(runTrainLeft);
					runTrainRight = 0;
					explode(treePosi + 100, 300);
					train.remove();
					document.querySelector('#add').innerHTML = `<img src="assets/img/debris.png" class="debris">`;
				}
			}
			runTrainRight = setInterval(trainCollision, 10);
			break;
		case ' ':
			window.location.reload(true);
			break;
	}
});
