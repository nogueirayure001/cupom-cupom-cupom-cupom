function createPaginationArray(page, totalPages, buttonsQuantity) {
  const pagesArray = [];

  if (buttonsQuantity > totalPages) buttonsQuantity = totalPages;

  let lowerQuantity, upperQuantity;

  const evenQuantity = !(buttonsQuantity % 2);

  if (evenQuantity) {
    lowerQuantity = Math.floor(buttonsQuantity / 2) - 1;
    upperQuantity = Math.floor(buttonsQuantity / 2);
  } else {
    lowerQuantity = upperQuantity = Math.floor(buttonsQuantity / 2);
  }

  if (page - lowerQuantity > 0 && page + upperQuantity <= totalPages) {
    if (evenQuantity) {
      for (let i = page - lowerQuantity; i <= page + upperQuantity; i++) {
        pagesArray.push(i);
      }

      return pagesArray;
    }

    for (let i = page - lowerQuantity; i <= page + upperQuantity; i++) {
      pagesArray.push(i);
    }
  } else if (page + upperQuantity >= totalPages) {
    if (evenQuantity) {
      for (let i = totalPages - buttonsQuantity + 1; i <= totalPages; i++) {
        pagesArray.push(i);
      }

      return pagesArray;
    }

    for (let i = totalPages - buttonsQuantity + 1; i <= totalPages; i++) {
      pagesArray.push(i);
    }
  } else {
    for (let i = 1; i <= buttonsQuantity; i++) {
      pagesArray.push(i);
    }
  }

  return pagesArray;
}

export { createPaginationArray };
