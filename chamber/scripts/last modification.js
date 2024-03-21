document.addEventListener('DOMContentLoaded', function() {
    const lastModified = new Date(document.lastModified);
    const lastModifiedElement = document.getElementById('last-modified');
    lastModifiedElement.textContent = lastModified.toLocaleString();
  });