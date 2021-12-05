import '@testing-library/jest-dom'
import {render, fireEvent} from '@testing-library/svelte'
import TaskListDisplay from './TaskListDisplay.svelte';

test("Shows task list name when rendered", () => {
  const {container} = render(TaskListDisplay, {name: "Yeetcode"});
  expect(container).toHaveTextContent("Yeetcode");
});

test("Show add task textbox when 'Add Task' button is clicked", async () => {
  const {container, getByText, getByTestId} = render(TaskListDisplay, {name: "Yeetcode"});
  const addTaskButton = getByText("Add New Task");

  await fireEvent.click(addTaskButton);
  const addTaskContainer = getByTestId("add-task");
  expect(container).toContainElement(addTaskContainer);
})