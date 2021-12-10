const pluralize = (n, word, suffix = 's') => {
  return `${n} ${word}${n !== 1 ? suffix : ''}`;
}

export { pluralize };
