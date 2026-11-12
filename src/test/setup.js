import '@testing-library/jest-dom/vitest';

// jsdom belum mengimplementasikan scrollIntoView.
Element.prototype.scrollIntoView = vi.fn();

// Jaga-jaga bila jsdom belum mendukung <dialog>: tiru perilaku dasarnya.
if (typeof HTMLDialogElement !== 'undefined') {
    const proto = HTMLDialogElement.prototype;
    proto.showModal = function showModal() { this.setAttribute('open', ''); };
    proto.close = function close() {
        if (!this.hasAttribute('open')) return;
        this.removeAttribute('open');
        this.dispatchEvent(new Event('close'));
    };
}