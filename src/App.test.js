import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import Box from './Box'
import BoxList from './BoxList';
import NewBoxForm from './NewBoxForm';

import ToDoList from './ToDoList';
import ToDo from './ToDo'
import ToDoForm from './ToDoForm';

test('renders Box', () => {
  render(<Box width="30" height="40" color="red" />);
});

test('renders BoxList', () => {
  render(<BoxList />);
});

test('renders NewBoxForm', () => {
  render(<NewBoxForm />);
});

test('if Box matches snapshot', () => {
  const { asFragment } = render(<Box width="30" height="40" color="red" />)
  expect(asFragment()).toMatchSnapshot();
})

test('if BoxList matches snapshot', () => {
  const { asFragment } = render(<BoxList boxesData={[{
    width: 30,
    height: 40,
    color: "red"
  }]} />)
  expect(asFragment()).toMatchSnapshot();
})

test('if Form matches snapshot', () => {
  const { asFragment } = render(<NewBoxForm />)
  expect(asFragment()).toMatchSnapshot();
})

test('if box can be added on the screen', () => {
  const { getByLabelText, queryByText, queryAllByTestId } = render(<BoxList />)

  const inputWidth = getByLabelText('Width');
  const inputHeight = getByLabelText('Height');
  const inputColor = getByLabelText('Color');
  const btn = queryByText("Add")

  expect(queryAllByTestId('box').length).toEqual(0)

  fireEvent.change(inputWidth, { target: { value: 100 } })
  fireEvent.change(inputHeight, { target: { value: 300 } })
  fireEvent.change(inputColor, { target: { value: "yellow" } })
  fireEvent.click(btn)

  const { getAllByTestId } = render(<BoxList />)
  expect(getAllByTestId('box')[0].style.backgroundColor).toEqual("yellow")
  expect(getAllByTestId('box')[0].style.width).toEqual("100px")
  expect(getAllByTestId('box')[0].style.height).toEqual("300px")
})

test('renders ToDoList', () => {
  render(<ToDoList />)
})

test('renders ToDo', () => {
  render(<ToDo />)
})

test('renders ToDoForm', () => {
  render(<ToDoForm />)
})

test('ToDoList same as fragment', () => {
  const { asFragment } = render(<ToDoList />)

  expect(asFragment()).toMatchSnapshot()
})

test('ToDo same as fragment', () => {
  const { asFragment } = render(<ToDo />)

  expect(asFragment()).toMatchSnapshot()
})

test('ToDoForm same as fragment', () => {
  const { asFragment } = render(<ToDoForm />)

  expect(asFragment()).toMatchSnapshot()
})

test('adding a task', () => {
  const { getByLabelText, queryByText } = render(<ToDoList />)

  const input = getByLabelText('Task')
  const btn = queryByText('Add')

  fireEvent.change(input, { target: { value: "get eggs" } })
  fireEvent.click(btn)

  expect(queryByText('get eggs')).toBeInTheDocument()
  expect(queryByText("X")).toBeInTheDocument()

})

test('deleting a task', () => {
  const { getByLabelText, queryByText } = render(<ToDoList />)

  const input = getByLabelText('Task')
  const btn = queryByText('Add')

  fireEvent.change(input, { target: { value: "get eggs" } })
  fireEvent.click(btn)

  const deleteBtn = queryByText("X")

  expect(queryByText('get eggs')).toBeInTheDocument()
  expect(deleteBtn).toBeInTheDocument()

  fireEvent.click(deleteBtn)

  expect(queryByText('get eggs')).not.toBeInTheDocument()


})