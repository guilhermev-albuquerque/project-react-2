import { screen } from '@testing-library/dom';
import { renderTheme } from '../../styles/render-theme';
import { NavLinks } from '.';
import mock from './mock';
import { theme } from '../../styles/theme';

describe('<NavLinks />', () => {
  test('should render links', () => {
    renderTheme(<NavLinks links={mock} />);
    expect(screen.getAllByRole('link')).toHaveLength(mock.length);
  });

  test('should not render links', () => {
    renderTheme(<NavLinks />);
    expect(screen.queryAllByText(/link/i)).toHaveLength(0);
  });

  test('should render media queries', () => {
    renderTheme(<NavLinks links={mock} />);
    expect(screen.getByText(/link 10/i).parentElement).toHaveStyleRule(
      'flex-flow',
      'column wrap',
      {
        media: theme.media.lteMedium,
      },
    );
  });

  test('should render snapshot', () => {
    const { container } = renderTheme(<NavLinks links={mock} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
