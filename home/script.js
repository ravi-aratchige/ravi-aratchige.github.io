// Setting greeting message

let message, today = new Date()

let time = today.getHours()

if (time < 5) {
    document.querySelector('#greeting').innerHTML = 'Late Night?'
} else if (time < 12) {
    document.querySelector('#greeting').innerHTML = 'Good Morning'
} else if (time < 15) {
    document.querySelector('#greeting').innerHTML = 'Good Afternoon'
} else if (time < 22) {
    document.querySelector('#greeting').innerHTML = 'Good Evening'
} else {
    document.querySelector('#greeting').innerHTML = 'Late Night?'
}

// Setting background gradients according to the time of the day

if (time < 5) {
    // early morning gradient
    document.getElementsByTagName('body').style.background="linear-gradient(-45deg, #767d92, #2f4562, #152642, #081b33)";
} else if (time < 12) {
    // morning gradient
    document.getElementsByTagName('body').style.background="linear-gradient(-45deg, #fa4e5e, #f9a9e, #99b9d0, #00b2d2)";
} else if (time < 15) {
    // afternoon gradient
    document.getElementsByTagName('body').style.background="linear-gradient(-45deg, #96adcf, #4570b5, #234181, #1b2966)";
} else if (time < 22) {
    // evening gradient
    document.getElementsByTagName('body').style.background="linear-gradient(-45deg, #fdec6e, #e0943d, #bc361a, #391106)";
} else if (time < 24) {
    // night gradient
    document.getElementsByTagName('body').style.background="linear-gradient(-45deg, #767d92, #2f4562, #152642, #081b33)";
}

// animating gradients

document.getElementsByTagName('body').style.backgroundSize="400% 400%";
document.getElementsByTagName('body').style.animation="gradient 8s ease infinite";