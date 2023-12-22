function concatClasses(defaultClasses: string, extendedClasses?: string) {
  return extendedClasses
    ? `${defaultClasses} ${extendedClasses}`
    : defaultClasses;
}

export { concatClasses };
