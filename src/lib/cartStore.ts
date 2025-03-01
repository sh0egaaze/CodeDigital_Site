
import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { Service } from './data'

type CartItem = Service & { quantity: number }

interface CartStore {
  items: CartItem[]
  totalItems: number
  totalPrice: number
  addItem: (item: Service) => void
  removeItem: (id: string) => void
  increaseQuantity: (id: string) => void
  decreaseQuantity: (id: string) => void
  clearCart: () => void
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      totalItems: 0,
      totalPrice: 0,
      
      addItem: (item: Service) => {
        const { items } = get()
        const existingItem = items.find(i => i.id === item.id)
        
        if (existingItem) {
          return
        }
        
        const newItems = [...items, { ...item, quantity: 1 }]
        
        set({
          items: newItems,
          totalItems: newItems.reduce((acc, item) => acc + item.quantity, 0),
          totalPrice: newItems.reduce((acc, item) => acc + (item.price * item.quantity), 0)
        })
      },
      
      removeItem: (id: string) => {
        const { items } = get()
        const newItems = items.filter(i => i.id !== id)
        
        set({
          items: newItems,
          totalItems: newItems.reduce((acc, item) => acc + item.quantity, 0),
          totalPrice: newItems.reduce((acc, item) => acc + (item.price * item.quantity), 0)
        })
      },
      
      increaseQuantity: (id: string) => {
        const { items } = get()
        const newItems = items.map(item => 
          item.id === id 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        )
        
        set({
          items: newItems,
          totalItems: newItems.reduce((acc, item) => acc + item.quantity, 0),
          totalPrice: newItems.reduce((acc, item) => acc + (item.price * item.quantity), 0)
        })
      },
      
      decreaseQuantity: (id: string) => {
        const { items } = get()
        const newItems = items.map(item => 
          item.id === id && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 } 
            : item
        )
        
        set({
          items: newItems,
          totalItems: newItems.reduce((acc, item) => acc + item.quantity, 0),
          totalPrice: newItems.reduce((acc, item) => acc + (item.price * item.quantity), 0)
        })
      },
      
      clearCart: () => {
        set({
          items: [],
          totalItems: 0,
          totalPrice: 0
        })
      }
    }),
    {
      name: 'codedigital-cart'
    }
  )
)
