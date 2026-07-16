import useCartStore from "../store/cart.store";

export const useCartItems = () => useCartStore((state) => state.items);

export const useCartTotalPrice = () =>
  useCartStore((state) =>
    state.items.reduce((total, item) => total + item.price * item.quantity, 0),
  );

export const useCartQuantity = () =>
  useCartStore((state) =>
    state.items.reduce((total, item) => total + item.quantity, 0),
  );

export const useAddItem = () => useCartStore((state) => state.addItem);

export const useRemoveItem = () => useCartStore((state) => state.removeItem);

export const useIncreaseQuantity = () =>
  useCartStore((state) => state.increaseQuantity);

export const useDecreaseQuantity = () =>
  useCartStore((state) => state.decreaseQuantity);

export const useClearCart = () => useCartStore((state) => state.clearCart);

export const useSaveNote = () => useCartStore((state) => state.saveNote);
