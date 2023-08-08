function handleContinueClick() {
    const target = document.getElementById('scroll-target');
    if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
        document.body.classList.remove('no-scroll');
    }
}

document.addEventListener('DOMContentLoaded', function () {
    document.body.classList.add('no-scroll');
});