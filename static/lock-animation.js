document.addEventListener('DOMContentLoaded', () => {
    const lockIcon = document.getElementById('lock-icon');

    lockIcon.addEventListener('click', () => {
        if (lockIcon.classList.contains('fa-lock')) {
            // Change to open lock
            lockIcon.classList.remove('fa-lock');
            lockIcon.classList.add('fa-lock-open', 'lock-open');
        } else {
            // Change to closed lock
            lockIcon.classList.remove('fa-lock-open', 'lock-open');
            lockIcon.classList.add('fa-lock');
        }
    });
});
