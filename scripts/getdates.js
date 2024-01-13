document.addEventListener('DOMContentLoaded', function(){
    const copyrightParagraph = document.getElementById('copyright');
    const currentYear = new Date().getFullYear();
    copyrightParagraph.textContent = `&copy ${currentYear} Jacob Chan, Hong Kong`;
})