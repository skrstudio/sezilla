function enlargeImage(img) {
    const modal = document.createElement('div');
    modal.style.position = 'fixed';
    modal.style.top = '0';
    modal.style.left = '0';
    modal.style.width = '100%';
    modal.style.height = '100%';
    modal.style.background = 'rgba(0, 0, 0, 0.8)';
    modal.style.display = 'flex';
    modal.style.justifyContent = 'center';
    modal.style.alignItems = 'center';
    modal.style.zIndex = '1000';
    modal.onclick = () => document.body.removeChild(modal);

    const imgElement = document.createElement('img');
    imgElement.src = img.src;
    imgElement.classList.add('modal-img');

    modal.appendChild(imgElement);
    document.body.appendChild(modal);
}
