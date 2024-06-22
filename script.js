const yesButton = document.getElementById('yes');
const noButton = document.getElementById('no');
const cta = document.querySelector('.buttons');

noButton.addEventListener('mouseenter', () =>{
	const yesIndex = Array.from(cta.children).
	indexOf(yesButton);
	const noIndex = Array.from(cta.children).
	indexOf(noButton);
	
	if (yesIndex < noIndex) {
		cta.insertBefore(noButton, yesButton);
	} else {
		cta.insertBefore(yesButton, noButton);
	}
})

window.onload = function() {
	var currentHours = new Date().getHours();
	if(currentHours >= 0 && currentHours <= 12){
		yesButton.href = "https://wa.me/919374413322?text=Hello Jeni,%0AGood morning.%0A%0AI love you too much.";
	}
	else if(currentHours > 12 && currentHours <= 16){
		yesButton.href = "https://wa.me/919374413322?text=Hello Jeni,%0AGood afternoon.%0A%0AI love you too much.";
	}
	else{
		yesButton.href = "https://wa.me/919374413322?text=Hello Jeni,%0AGood evening.%0A%0AI love you too much.";
	}
};
