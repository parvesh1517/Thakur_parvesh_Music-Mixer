(() => {
  console.log('fired!');

  const draggablePieces = document.querySelectorAll('.icon_holder img');
  const dropZones = document.querySelectorAll('.drag_Box');

  // Prevent default dragover behavior
  document.addEventListener("dragover", function(ev) {
    ev.preventDefault();
  });

  // Define dragstart behavior
  draggablePieces.forEach(piece => {
    piece.addEventListener("dragstart", function(ev) {
      console.log('dragging...');
      ev.dataTransfer.setData("text/plain", this.id); // Set data to text/plain format
    });
  });

  // Define drop behavior for drop zones
  dropZones.forEach(zone => {
    zone.addEventListener("dragover", function(ev) {
      ev.preventDefault();
    });
    zone.addEventListener("drop", function(ev) {
      ev.preventDefault();

      console.log('you dropped a track on me');

      if (this.childElementCount > 0) {
        console.log('one track only please!');
        return;
      }

      const data = ev.dataTransfer.getData("text/plain"); // Retrieve data in text/plain format

      console.log(data);

      const targetAudio = document.querySelector(`#${data}`).getAttribute('data-audio'); // Corrected to use getAttribute

      console.log(targetAudio);
      
      const myAudio = new Audio(targetAudio); // Create new audio element
      myAudio.loop = true;

      myAudio.play();

      this.appendChild(document.querySelector(`#${data}`));
    });
  });
})();




//debugger
