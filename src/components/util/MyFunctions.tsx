export const randomNumber = () => {

    const generateRandomColor = Math.floor(Math.random() * 16777215)

        .toString(16)

        .padStart(6, '0');

    return `#${generateRandomColor}`;

}