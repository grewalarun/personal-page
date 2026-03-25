export function inview(node: HTMLElement, callback: (isVisible: boolean) => void) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            callback(entry.isIntersecting);
        });
    }, { threshold: 0.1, rootMargin: '50px' });

    observer.observe(node);

    return {
        destroy() {
            observer.disconnect();
        }
    };
}
