import cartReducer, { addProduct, emptyCart, itemAddHandler, itemRemoveHandler } from "./cartRedux";

describe("cart reducer", () => {
  it("addProduct adds item and updates totals", () => {
    const initialState = { products: [], quantity: 0, total: 0 };
    const product = { _id: "1", price: 10, quantity: 2 };
    const state = cartReducer(initialState, addProduct(product));
    expect(state.products).toHaveLength(1);
    expect(state.quantity).toBe(1);
    expect(state.total).toBe(20);
  });

  it("emptyCart clears cart", () => {
    const start = { products: [{ _id: "1", price: 5, quantity: 1 }], quantity: 1, total: 5 };
    const state = cartReducer(start, emptyCart());
    expect(state.products).toEqual([]);
    expect(state.quantity).toBe(0);
    expect(state.total).toBe(0);
  });

  it("itemAddHandler increases item quantity and total", () => {
    const start = { products: [{ _id: "1", price: 5, quantity: 1 }], quantity: 1, total: 5 };
    const state = cartReducer(start, itemAddHandler("1"));
    expect(state.products[0].quantity).toBe(2);
    expect(state.total).toBe(10);
    expect(state.quantity).toBe(1);
  });

  it("itemRemoveHandler decreases quantity and total", () => {
    const start = { products: [{ _id: "1", price: 5, quantity: 2 }], quantity: 1, total: 10 };
    const state = cartReducer(start, itemRemoveHandler("1"));
    expect(state.products[0].quantity).toBe(1);
    expect(state.total).toBe(5);
    expect(state.quantity).toBe(1);
  });
});
