import { Counter } from "./Counter";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../app/store";
describe("Given a Counter component", () => {
  test("when its rendered then seven buttons are displayed", () => {
    render(
      <Provider store={store}>
        <Counter />
      </Provider>
    );

    const buttons = screen.getAllByRole("button");

    expect(buttons.length).toBe(7);
  });

  test("when the decrement button is clicked once it should call a function", () => {
    render(
      <Provider store={store}>
        <Counter />
      </Provider>
    );
    const decrementValue = jest.fn();
    const decrementButton = screen.getByText("-");
    fireEvent.click(decrementButton, (onclick = decrementValue()));
    expect(decrementValue).toHaveBeenCalledTimes(1);
  });
  test("when the increment button is clicked once it should call a function", () => {
    render(
      <Provider store={store}>
        <Counter />
      </Provider>
    );
    const incrementValue = jest.fn();
    const incrementButton = screen.getByText("+");
    fireEvent.click(incrementButton, (onclick = incrementValue()));
    expect(incrementValue).toHaveBeenCalledTimes(1);
  });

  test("when the add amount button is clicked once it should call a function", () => {
    render(
      <Provider store={store}>
        <Counter />
      </Provider>
    );
    const addAmountValue = jest.fn();
    const addAmontButton = screen.getByText("Add Amount");
    fireEvent.click(addAmontButton, (onclick = addAmountValue()));
    expect(addAmountValue).toHaveBeenCalledTimes(1);
  });

  test("when the increment async button is clicked once it should call a function", () => {
    render(
      <Provider store={store}>
        <Counter />
      </Provider>
    );
    const incrementAsyncValue = jest.fn();
    const incrementAsyncButton = screen.getByText("Add Async");
    fireEvent.click(incrementAsyncButton, (onclick = incrementAsyncValue()));
    expect(incrementAsyncValue).toHaveBeenCalledTimes(1);
  });

  test("when the add if odd button is clicked once it should call a function", () => {
    render(
      <Provider store={store}>
        <Counter />
      </Provider>
    );
    const addIfOdd = jest.fn();
    const addIfOddButton = screen.getByText("Add If Odd");
    fireEvent.click(addIfOddButton, (onclick = addIfOdd()));
    expect(addIfOdd).toHaveBeenCalledTimes(1);
  });

  test("when the reset button is clicked once it should call a function", () => {
    render(
      <Provider store={store}>
        <Counter />
      </Provider>
    );
    const reset = jest.fn();
    const resetButton = screen.getByText("Reset");
    fireEvent.click(resetButton, (onclick = reset()));
    expect(reset).toHaveBeenCalledTimes(1);
  });
  test("when the init from API button is clicked once it should call a function", () => {
    render(
      <Provider store={store}>
        <Counter />
      </Provider>
    );
    const initFromApi = jest.fn();
    const initFromApiButton = screen.getByText("Init from API");
    fireEvent.click(initFromApiButton, (onclick = initFromApi()));
    expect(initFromApi).toHaveBeenCalledTimes(1);
  });

  test("when the input changes it should call a function", () => {
    render(
      <Provider store={store}>
        <Counter />
      </Provider>
    );
    const setIncrementAmount = jest.fn();
    const setIncrementAmountInput = screen.getByRole("textbox");
    fireEvent.change(
      setIncrementAmountInput,
      (onchange = setIncrementAmount())
    );
    expect(setIncrementAmount).toHaveBeenCalledTimes(1);
  });
});
