export const formatPrice = (price: number) => {
  const fixedPrice = price.toFixed(2)
  const formattedPrice = fixedPrice.replace('.', ',')

  return formattedPrice
}
