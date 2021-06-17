import { GridTwoColumns } from '.';
import mock from './mock';

export default {
  title: 'Grid Two Columns',
  component: GridTwoColumns,
  args: mock,
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <GridTwoColumns {...args} />
    </div>
  );
};
