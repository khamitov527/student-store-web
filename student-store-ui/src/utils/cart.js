export const removeFromCart = (cart, item) => {	
  const newCart = {	
      ...cart,	
      [item.name]: cart[item.name] - 1,	
      [item.id]: cart[item.id]-1	
  }	
  if(!newCart[item.id]){	
      delete newCart[item.id]	
  }	
  if (!newCart[item.name]) {	
      delete newCart[item.name]	
  }	
  return newCart	
}

export const addToCart = (cart, item) => {
  if (cart.hasOwnProperty(item.id)) {
    return {
      ...cart,
      [item.id]: cart[item.id] + 1,
    }
  }

  return {
    ...cart,
    [item.id]: 1,
  }
}

export const getQuantityOfItemInCart = (cart, item) => {
  return cart[item.id] || 0
}

export const getTotalItemsInCart = (cart) => {
  const ids = Object.keys(cart)
  if (!ids?.length) return 0

  return ids.reduce((acc, id) => {
    return acc + cart[id]
  }, 0)
}
