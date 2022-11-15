const text_alpha = document.querySelector('#text_alpha');
const text_beta = document.querySelector('#text_beta');
const text_gamma = document.querySelector('#text_gamma');

// Initializing some variables
let counter = 0;

// What happens when the orientation changes
function handleOrientation(event) {
    const alpha = event.alpha;
    const beta = event.beta;
    const gamma = event.gamma;
    text_alpha.innerText = `The alpha angle is ${alpha} deg`;
    text_beta.innerText = `The beta angle is ${beta} deg`;
    text_gamma.innerText = `The gamma angle is ${gamma} deg`;
}

// Button callbacks
const button = document.querySelector('#bouton');
button.addEventListener('click', function () {

    // testing
    // updateScores();

    // adding detection of orientation when you click
    if (typeof DeviceMotionEvent.requestPermission === 'function') {
        // Handle iOS 13+ devices.
        DeviceMotionEvent.requestPermission()
            .then((state) => {
                if (state === 'granted') {
                    window.addEventListener('devicemotion', handleOrientation);
                } else {
                    console.error('Request to access the orientation was rejected');
                }
            })
            .catch(console.error);
        console.log('You do not have an iOS 13+ device!');
    } else {
        // Handle regular non iOS 13+ devices.
        window.addEventListener('devicemotion', handleOrientation);
        console.log('You do not have an iOS 13+ device!');
    }

});












// function updateScores() {
//     counter += 1;
//     button.innerText = `You clicked ${counter} times`;
// }

// function checkWinning() {
//     if (scoreOne === scoreMax || scoreTwo === scoreMax) {
//         setButtons(true); // disable
//         if (scoreOne === scoreMax) {
//             textOne.classList.add('has-text-success');
//             textTwo.classList.add('has-text-danger');
//         }
//         else {
//             textOne.classList.add('has-text-danger');
//             textTwo.classList.add('has-text-success');
//         }
//     }
// }

// function setButtons(state) {
//     buttOne.disabled = state;
//     buttTwo.disabled = state;
// }

// function resetColors() {
//     textOne.classList.remove('has-text-success', 'has-text-danger');
//     textTwo.classList.remove('has-text-success', 'has-text-danger');
// }