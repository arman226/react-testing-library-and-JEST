import { render, screen, cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";
import Todos from "components/todo";

afterEach(() => {
  //this is to unount every react component which is mounted with render
  cleanup();
});

/** this test asserts that ReactDOM can render the
 * @see Todos Component with completed task
 * and should CONTAIN a @strike element
 **/
test("should render completed todo component", () => {
  const id = 2;
  const text = "hello, world!";
  const completed = true;
  //to see whether or not a React component is possible to be rendered
  render(<Todos text={text} id={id} completed={completed} />);
  const todoElement = screen.getByTestId(`todo-${id}`);
  expect(todoElement).toBeInTheDocument();
  expect(todoElement).toHaveTextContent(text);
  expect(todoElement).toContainHTML("strike");
});

/** this test asserts that ReactDOM can render the
 * @see Todos Component with non-completed task
 * and should NOT contain a @strike element
 **/
test("should render not completed todo component", () => {
  const id = 2;
  const text = "hello, world!";
  const completed = false;

  render(<Todos text={text} id={id} completed={completed} />);
  const todoElement = screen.getByTestId(`todo-${id}`);
  expect(todoElement).toBeInTheDocument();
  expect(todoElement).toHaveTextContent(text);
  expect(todoElement).not.toContainHTML("strike");
});

/**using SNAPSHOT
 * this type of test is more fragile that's why everytime you change something to your component
 * you have to press "u" to update the associated file under the __snapshots__ folder
 **/
test("matches snapshot", () => {
  const id = 2;
  const text = "hello, world!";
  const completed = true;

  const tree = renderer
    .create(<Todos text={text} id={id} completed={completed} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
