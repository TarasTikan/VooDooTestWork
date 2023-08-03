const blackAlert = document.querySelector('#blackAlrert');
const alertText = document.querySelector('#importantText');
const imgArrow = document.querySelector('#imageArrow');
blackAlert.addEventListener('click', handleToggleAlert);

function handleToggleAlert(e) {
  alertText.classList.toggle('hidden');
  imgArrow.classList.toggle('rotate-180');
}
