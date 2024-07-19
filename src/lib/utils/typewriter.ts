export function typewriter(node: any) {
    const text = node.textContent;
    const duration = text.length / (1 * 0.01);

    return {
        duration,
        tick: (t: any) => {
            const i = Math.trunc(text.length * t);
            node.textContent = text.slice(0, i);
        }
    };
}