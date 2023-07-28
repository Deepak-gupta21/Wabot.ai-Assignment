const spanElements = document.querySelectorAll('.span_container span');

spanElements.forEach(span => {
    span.addEventListener('click', () => {
        // Remove the 'active' class from all spans
        spanElements.forEach(span => span.classList.remove('active'));

        // Add the 'active' class to the clicked span
        span.classList.add('active');
    });
});