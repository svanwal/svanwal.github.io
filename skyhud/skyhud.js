document.getElementById("button").onclick = function () {
    if (DeviceOrientationEvent.requestPermission) {
        DeviceOrientationEvent.requestPermission()
            .then(response => {
                if (response == "granted") {
                    window.addEventListener("deviceorientation", function (e) {
                        const { alpha, beta, gamma } = e;
                        document.getElementById("alpha").innerText = alpha.toFixed(0);
                        document.getElementById("beta").innerText = beta.toFixed(0);
                        document.getElementById("gamma").innerText = gamma.toFixed(0);
                    });
                } else {
                    alert('Device orientation permission not granted');
                }
            })
            .catch(console.log);
    } else {
        alert("Device orientation permission access method not available");
    }
};

// document.getElementById("horizon").style.transform = `rotate(${-80}deg)`;

window.addEventListener("deviceorientation", function (e) {
    const { alpha, beta, gamma } = e;
    document.getElementById("alpha").innerText = alpha.toFixed(0);
    document.getElementById("beta").innerText = beta.toFixed(0);
    document.getElementById("gamma").innerText = gamma.toFixed(0);
    document.getElementById("horizon").style.transform = `rotate(${90 - beta.toFixed(0)}deg)`;
    // document.getElementById("horizon").style.transform = `rotate(${-10}deg)`;
});

const width = window.innerWidth || document.documentElement.clientWidth ||
    document.body.clientWidth;
const height = window.innerHeight || document.documentElement.clientHeight ||
    document.body.clientHeight;

console.log(width, height);

function matrixMultiplication(A, B) {

    A11 = A[1][1];
    A12 = A[1][2];
    A13 = A[1][3];
    A21 = A[2][1];
    A22 = A[2][2];
    A23 = A[2][3];
    A31 = A[3][1];
    A32 = A[3][2];
    A33 = A[3][3];

    B11 = B[1][1];
    B12 = B[1][2];
    B13 = B[1][3];
    B21 = B[2][1];
    B22 = B[2][2];
    B23 = B[2][3];
    B31 = B[3][1];
    B32 = B[3][2];
    B33 = B[3][3];

    let C11 = (A11 * B11) + (A12 * B21) + (A13 * B31)
    let C12 = (A11 * B12) + (A12 * B22) + (A13 * B32)
    let C13 = (A11 * B13) + (A12 * B23) + (A13 * B33)
    let C21 = (A21 * B11) + (A22 * B21) + (A23 * B31)
    let C22 = (A21 * B12) + (A22 * B22) + (A23 * B32)
    let C23 = (A21 * B13) + (A22 * B23) + (A23 * B33)
    let C31 = (A31 * B11) + (A32 * B21) + (A33 * B31)
    let C32 = (A31 * B12) + (A32 * B22) + (A33 * B32)
    let C33 = (A31 * B13) + (A32 * B23) + (A33 * B33)

    C = [[C11, C12, C13], [C21, C22, C23], [C31, C32, C33]];

    return C;

}

function transposeMatrix(M) {

    M11 = M[1][1];
    M12 = M[1][2];
    M13 = M[1][3];
    M21 = M[2][1];
    M22 = M[2][2];
    M23 = M[2][3];
    M31 = M[3][1];
    M32 = M[3][2];
    M33 = M[3][3];
    Mt = [[M11, M21, M31], [M12, M22, M32], [M13, M23, M33]];

    return Mt;

}


// const text_alpha = document.querySelector('#text_alpha');
// const text_beta = document.querySelector('#text_beta');
// const text_gamma = document.querySelector('#text_gamma');

// // Initializing some variables
// let counter = 0;

// // What happens when the orientation changes
// function handleOrientation(event) {
//     const alpha = event.alpha;
//     const beta = event.beta;
//     const gamma = event.gamma;
//     console.log(alpha);
//     text_alpha.innerText = `The alpha angle is ${alpha} deg`;
//     text_beta.innerText = `The beta angle is ${beta} deg`;
//     text_gamma.innerText = `The gamma angle is ${gamma} deg`;
// }

// // Button callbacks
// const button = document.querySelector('#bouton');
// button.addEventListener('click', function () {

//     // testing
//     // updateScores();

//     // adding detection of orientation when you click
//     if (typeof DeviceMotionEvent.requestPermission === 'function') {
//         // Handle iOS 13+ devices.
//         DeviceMotionEvent.requestPermission()
//             .then((state) => {
//                 if (state === 'granted') {
//                     window.addEventListener('devicemotion', handleOrientation);
//                 } else {
//                     console.error('Request to access the orientation was rejected');
//                 }
//             })
//             .catch(console.error);
//         button.innerText = 'iOS 13+ device detected';
//     } else {
//         // Handle regular non iOS 13+ devices.
//         window.addEventListener('devicemotion', handleOrientation);
//         button.innerText = 'You do not have an iOS 13+ device!';
//     }

// });












// // function updateScores() {
// //     counter += 1;
// //     button.innerText = `You clicked ${counter} times`;
// // }

// // function checkWinning() {
// //     if (scoreOne === scoreMax || scoreTwo === scoreMax) {
// //         setButtons(true); // disable
// //         if (scoreOne === scoreMax) {
// //             textOne.classList.add('has-text-success');
// //             textTwo.classList.add('has-text-danger');
// //         }
// //         else {
// //             textOne.classList.add('has-text-danger');
// //             textTwo.classList.add('has-text-success');
// //         }
// //     }
// // }

// // function setButtons(state) {
// //     buttOne.disabled = state;
// //     buttTwo.disabled = state;
// // }

// // function resetColors() {
// //     textOne.classList.remove('has-text-success', 'has-text-danger');
// //     textTwo.classList.remove('has-text-success', 'has-text-danger');
// // }