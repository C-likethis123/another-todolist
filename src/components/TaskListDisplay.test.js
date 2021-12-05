import '@testing-library/jest-dom'
import {render, fireEvent} from '@testing-library/svelte'
import TaskListDisplay from './TaskListDisplay.svelte';

test("Shows task list name when rendered", () => {
  const {container} = render(TaskListDisplay, {name: "Yeetcode"});
  expect(container).toHaveTextContent("Yeetcode");
})