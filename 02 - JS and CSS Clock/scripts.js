const secondHand = document.querySelector('.second-hand');
const hourHand = document.querySelector('.hour-hand');
const minHand = document.querySelector('.min-hand');

function setDate() {
	const now = new Date();
	const seconds = now.getSeconds();
	const hours = now.getHours();
	const mins = now.getMinutes();
	const secondsDegrees = ((seconds / 60) * 360) + 90;
	secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
	const hoursDegrees = ((hours / 12) * 360) + 90;
	hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
	const minDegrees = ((mins / 60) * 360) + 90;
	minHand.style.transform = `rotate(${minDegrees}deg)`;
}

setInterval(setDate, 1000);
