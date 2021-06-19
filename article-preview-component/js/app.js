const shareBtn = document.querySelector('.share-icon');
const shareExpanded = document.querySelector('.share-expanded');
const shareIcon = document.querySelector('.share-icon');
const shareIconSVG = document.querySelector('.share-icon img');

shareBtn.addEventListener('click', function() {
    if (shareExpanded.classList.contains('hide')) {
        shareExpanded.classList.remove('hide');
        shareIcon.classList.add('filter');
        shareIconSVG.classList.add('filter');
    } else {
        shareExpanded.classList.add('hide');
        shareIcon.classList.remove('filter');
        shareIconSVG.classList.remove('filter');
    }
});