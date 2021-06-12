import { screen } from '@testing-library/dom';
import { renderTheme } from '../../styles/render-theme';
import { TextComponent } from '.';

describe('<TextComponent />', () => {
  test('should render a text', () => {
    renderTheme(<TextComponent>Children</TextComponent>);
    expect(screen.getByText('Children')).toBeInTheDocument();
  });
  test('should match snapshot', () => {
    const { container } = renderTheme(<TextComponent>Children</TextComponent>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
