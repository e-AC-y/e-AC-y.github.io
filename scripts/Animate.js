
const Scaling = [
    { transform: ' scale(1)' },
    { transform: ' scale(0)' }
];

let ScaleTiming = {
    duration: 2000 * 1.25,
    iterations: 1,
}

const Disappearing = [
    { transform: ' rotateX(0deg) rotateY(0deg) scale(0.8)' },
    { transform: ' rotateX(180deg) rotateY(180deg) scale(0.3)'}
];

const DisappearTiming = {
    duration: 50,
    iterations: Infinity,
}


export {Scaling, ScaleTiming, Disappearing, DisappearTiming};