const isPangram = (input) => {
    const str = input.toLowerCase().replace(/[^a-z]/g, '');
    const strSet = new Set(str);
    return strSet.size == 26;
}

export { isPangram };