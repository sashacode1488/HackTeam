function toggleTutorial() {
    const tutorial = document.getElementById('tutorial');
    const toggleButton = document.getElementById('toggle-tutorial');

    if (tutorial.style.display === 'none' || tutorial.style.display === '') {
        tutorial.classList.remove('hide');
        tutorial.style.display = 'block';
        toggleButton.textContent = 'Закрити туторіал';
    } else {
        tutorial.classList.add('hide');
        toggleButton.textContent = 'Відкрити туторіал';
        setTimeout(() => {
            tutorial.style.display = 'none';
            tutorial.classList.remove('hide');
        }, 500); // Час повинен відповідати тривалості анімації expandOut
    }
}
