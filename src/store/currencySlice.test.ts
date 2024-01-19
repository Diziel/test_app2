import currencyReducer, { addCurrency, removeCurrency } from "./currencySlice";

describe("currencySlice reducer", () => {
  it("should handle initial state", () => {
    const initialState = { list: [] };
    const result = currencyReducer(undefined, { type: "unknown" });
    expect(result).toEqual(initialState);
  });

  it("should handle addCurrency", () => {
    const initialState = { list: [] };
    const result = currencyReducer(initialState, addCurrency("EUR"));
    expect(result.list).toEqual(["EUR"]);
  });

  it("should handle removeCurrency", () => {
    const initialState = { list: ["EUR", "USD"] };
    const result = currencyReducer(initialState, removeCurrency("EUR"));
    expect(result.list).toEqual(["USD"]);
  });
});

describe("currencySlice actions", () => {
  it("should create an action to add a currency", () => {
    const currency = "EUR";
    const expectedAction = { type: addCurrency.type, payload: currency };
    expect(addCurrency(currency)).toEqual(expectedAction);
  });

  it("should create an action to remove a currency", () => {
    const currency = "USD";
    const expectedAction = { type: removeCurrency.type, payload: currency };
    expect(removeCurrency(currency)).toEqual(expectedAction);
  });
});
