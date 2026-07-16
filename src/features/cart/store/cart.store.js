import { create } from "zustand";
import { persist } from "zustand/middleware";

const useCartStore = create(
  persist(
    (set) => ({
      items: [],

      addItem: (menu) => {
        set((state) => {
          const findItem = state.items.find((item) => item.id === menu.id);

          if (findItem) {
            return {
              items: state.items.map((item) =>
                item.id === menu.id
                  ? {
                      ...item,
                      quantity: item.quantity + 1,
                    }
                  : item,
              ),
            };
          }

          return {
            items: [
              ...state.items,
              {
                id: menu.id,
                name: menu.name,
                price: menu.price,
                image: menu.image,
                quantity: 1,
                note: "",
              },
            ],
          };
        });
      },

      removeItem: () => {},

      increaseQuantity: (id) => {
        set((state) => ({
          items: state.items.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
          ),
        }));
      },

      decreaseQuantity: (id) => {
        set((state) => ({
          items: state.items
            .map((item) =>
              item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
            )
            .filter((item) => item.quantity > 0),
        }));
      },

      clearCart: () => {
        set({ items: [] });
      },

      saveNote: (id, note) => {
        set((state) => ({
          items: state.items.map((item) =>
            item.id === id ? { ...item, note } : item,
          ),
        }));
      },
    }),
    {
      name: "cart-store",
    },
  ),
);

export default useCartStore;
