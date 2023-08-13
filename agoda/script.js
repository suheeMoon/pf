// script.js
const controller = new ScrollMagic.Controller();

document.querySelectorAll('.image-Container').forEach(container => {
  const scene = new ScrollMagic.Scene({
    triggerElement: container,
    triggerHook: 0.8, // Adjust this trigger point as needed
    reverse: false
  })
  .setClassToggle(container, 'fade-in')
  .addTo(controller);
});