import { TextComponent } from '.';

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse voluptatibus quibusdam quas, quod modi aliquam illum quasi odit vero error blanditiis fugit voluptatum nesciunt mollitia deserunt at veniam dignissimos eius!`,
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <TextComponent {...args} />
    </div>
  );
};
