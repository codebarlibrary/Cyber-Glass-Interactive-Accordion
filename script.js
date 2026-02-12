function toggleAccordion(header) {
    const item = header.parentElement;
    const isActive = item.classList.contains('active');

    if (!isActive) {
        item.classList.add('active');
    } else {
        item.classList.remove('active');
    }
}