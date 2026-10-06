const menu = document.querySelector('.mobile-nav');

if (menu) {
  const summary = menu.querySelector('summary');

  document.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape' || !menu.open) return;

    const restoreFocus = menu.contains(document.activeElement);
    menu.open = false;
    event.preventDefault();
    if (restoreFocus) summary.focus({ preventScroll: true });
  });

  menu.addEventListener('focusout', () => {
    // Wait until the new focus target is set; moving between menu links keeps it open.
    setTimeout(() => {
      if (!menu.contains(document.activeElement)) menu.open = false;
    }, 0);
  });
}
