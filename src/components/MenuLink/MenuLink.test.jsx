import { screen } from '@testing-library/dom';
import { renderTheme } from '../../styles/render-theme';
import { MenuLink } from '.';

describe('<MenuLink />', () => {
  test('should render a link', () => {
    renderTheme(<MenuLink link={'http://localhost.com'}>Children</MenuLink>);
    expect(screen.getByRole('link', { name: 'Children' })).toHaveAttribute(
      'target',
      '_self',
    );
  });

  test('should render open in a new tab', () => {
    renderTheme(
      <MenuLink link={'http://localhost.com'} newTab={true}>
        Children
      </MenuLink>,
    );
    expect(screen.getByRole('link', { name: 'Children' })).toHaveAttribute(
      'target',
      '_blank',
    );
  });

  test('should render snapshot', () => {
    const { container } = renderTheme(
      <MenuLink link={'http://localhost.com'} newTab={false}>
        Children
      </MenuLink>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
