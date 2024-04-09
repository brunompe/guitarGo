export default function calculateAverageRating(products) {
  let totalRating = 0;
  let ratedProductsCount = 0;

  for (const product of products) {
    if (product.rating > 0) {
      totalRating += product.rating;
      ratedProductsCount++;
    }
  }

  if (ratedProductsCount === 0) {
    return null;
  }

  const averageRating = totalRating / ratedProductsCount;

  const roundToHalf = (num) => Math.round(num * 2) / 2;

  return roundToHalf(averageRating);
}
