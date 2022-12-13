const input = document.querySelector('input');

function marker() {
    const marker = document.createElement('div');
    marker.textContent = 'Marker';
    marker.classList.add('marker');
    document.body.append(marker);
}

function removeMarker() {
    const marker = document.querySelector('div');
    marker.remove();
}

input.addEventListener('focus', function (e) {
    e.preventDefault;
    marker();
});

input.addEventListener('focusout', function (e) {
    e.preventDefault;
    removeMarker();
})