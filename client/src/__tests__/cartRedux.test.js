import cartReducer, { addProduct, emptyCart, itemAddHandler, itemRemoveHandler } from "../redux/cartRedux";

describe("cart reducers", () => {
  test("addProduct adds an item", () => {
    const state = { products: [], quantity: 0, total: 0 };
    const product = { _id: "1", price: 10, quantity: 2 };
    const next = cartReducer(state, addProduct(product));
    expect(next.quantity).toBe(1);
    expect(next.products).toHaveLength(1);
    expect(next.products[0]).toEqual(product);
    expect(next.total).toBe(20);
  });

  test("emptyCart resets the cart", () => {
    const state = { products: [{ _id: "1", price: 5, quantity: 1 }], quantity: 1, total: 5 };
    const next = cartReducer(state, emptyCart());
    expect(next).toEqual({ products: [], quantity: 0, total: 0 });
  });

  test("itemAddHandler increments quantity", () => {
    const state = { products: [{ _id: "1", price: 5, quantity: 1 }], quantity: 1, total: 5 };
    const next = cartReducer(state, itemAddHandler("1"));
    expect(next.products[0].quantity).toBe(2);
    expect(next.total).toBe(10);
  });

  test("itemRemoveHandler decrements quantity", () => {
    const state = { products: [{ _id: "1", price: 5, quantity: 2 }], quantity: 1, total: 10 };
    const next = cartReducer(state, itemRemoveHandler("1"));
    expect(next.products[0].quantity).toBe(1);
    expect(next.total).toBe(5);
  });
});
