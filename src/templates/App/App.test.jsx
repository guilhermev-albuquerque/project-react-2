import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { theme } from '../../styles/theme';
import Home from './index';

test('renders learn react link', () => {
  renderTheme(<Home />);
  const headingContainer = screen.getByRole('heading', {
    name: 'Dale',
  }).parentElement;
  expect(headingContainer).toHaveStyle({ background: theme.colors.mainBg });
  expect(headingContainer).toHaveStyleRule('background', 'darkred');
  expect(headingContainer).toMatchSnapshot();
});
