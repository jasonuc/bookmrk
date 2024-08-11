export function getRandomHexColour() {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    const paddedColor = randomColor.padStart(6, '0');
    return `#${paddedColor}`;
}