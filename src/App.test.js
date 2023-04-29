import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import Box from './Box'
import BoxList from './BoxList';
import NewBoxForm from './NewBoxForm';

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

// test('if box is on the screen', () => {
//   const { getAllByTestId } = render(<BoxList boxesData={[{
//     width: 30,
//     height: 40,
//     color: "red"
//   }]} />)
//   expect(getAllByTestId('box')[0].style.backgroundColor).toEqual("red")
//   expect(getAllByTestId('box')[0].style.width).toEqual("30px")
//   expect(getAllByTestId('box')[0].style.height).toEqual("40px")
// })

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