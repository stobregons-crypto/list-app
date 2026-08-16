export function MyModal() {
    const myModal = document.getElementById('DeleteElementModal');
    if (!myModal) return;

    const modal = window.bootstrap?.Modal?.getOrCreateInstance(myModal);
    modal?.show();

    myModal.addEventListener('shown.bs.modal', () => {
        const myInput = document.getElementById('Data-input');
        if (myInput) myInput.focus();
    }, { once: true });
}

