document.addEventListener('DOMContentLoaded', function() {
    const lastModified = new Date(document.lastModified);
    const lastModifiedElement = document.getElementById('last_modified');
    lastModifiedElement.textContent = lastModified.toLocaleString();
  });