document.addEventListener('DOMContentLoaded', function() {
    const markerContainer = document.getElementById('marker-container');
    const image = document.getElementById('image');
    let markerCount = 0;

    image.addEventListener('click', function(event) {
        if (markerCount < 100) {
            const markerText = prompt('Enter marker text:');
            if (markerText !== null && markerText.trim() !== '') {
                const marker = document.createElement('div');
                marker.className = 'marker';
                marker.style.left = `${event.offsetX}px`;
                marker.style.top = `${event.offsetY}px`;
                marker.innerText = markerText;

                markerContainer.appendChild(marker);
                markerCount++;
            }
        } else {
            alert('You have reached the maximum limit of markers (100).');
        }
    });
});
