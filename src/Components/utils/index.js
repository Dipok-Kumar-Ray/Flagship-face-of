import toast from "react-hot-toast";
import Favorites from "../../Pages/Favorites";

export const getFavorites = () => {
    const favorites = localStorage.getItem('favorites')
    if(favorites) return JSON.parse(favorites)
        return []
}

export const addFavorite = phone => {
    const favorites = getFavorites()
    const isExist = favorites.find(phone.id === phone.id)
    if(isExist) return toast.error('Phone Already added');
    favorites.push = [phone]
    toast.success('Phone Added Successfully !!!')
    localStorage.setItem('favorites', JSON.stringify(favorites))
}

export const removeFavorites = id =>{
    const favorites = getFavorites()
    const remainingFavorites = favorites.filter(phone=> phone.id !== id)
    localStorage.setItem('favorites', JSON.stringify(remainingFavorites))
    toast.success('Removed Successfully !!!')    
}




// Cart....
export const getCart = () => {
    const cart = localStorage.getItem('cart')
    if(cart) return JSON.parse(cart)
        return []
}

export const addToCart = phone => {
    const cart = getCart()
    const isExist = cart.find(phone.id === phone.id)
    if(isExist) return toast.error('Phone Already added');
    cart.push = [phone]
    
    localStorage.setItem('cart', JSON.stringify(cart))
}

export const removeCart = id =>{
    const cart = getCart()
    const remainingCart = cart.filter(phone=> phone.id !== id)
    localStorage.setItem('cart', JSON.stringify(remainingCart))
    
}