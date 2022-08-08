function createPaginationArray(page, numOfPages, buttonsQuantity) {
  const pagesArray = [];

  if (buttonsQuantity > numOfPages) buttonsQuantity = numOfPages;

  let lowerQuantity, upperQuantity;

  const evenQuantity = !(buttonsQuantity % 2);

  if (evenQuantity) {
    lowerQuantity = Math.floor(buttonsQuantity / 2) - 1;
    upperQuantity = Math.floor(buttonsQuantity / 2);
  } else {
    lowerQuantity = upperQuantity = Math.floor(buttonsQuantity / 2);
  }

  if (page - lowerQuantity > 0 && page + upperQuantity <= numOfPages) {
    if (evenQuantity) {
      for (let i = page - lowerQuantity; i <= page + upperQuantity; i++) {
        pagesArray.push(i);
      }

      return pagesArray;
    }

    for (let i = page - lowerQuantity; i <= page + upperQuantity; i++) {
      pagesArray.push(i);
    }
  } else if (page + upperQuantity >= numOfPages) {
    if (evenQuantity) {
      for (let i = numOfPages - buttonsQuantity + 1; i <= numOfPages; i++) {
        pagesArray.push(i);
      }

      return pagesArray;
    }

    for (let i = numOfPages - buttonsQuantity + 1; i <= numOfPages; i++) {
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
