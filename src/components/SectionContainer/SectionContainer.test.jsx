import { screen } from '@testing-library/dom';
import { renderTheme } from '../../styles/render-theme';
import { SectionContainer } from '.';

describe('<SectionContainer />', () => {
  test('should render', () => {
    renderTheme(<SectionContainer>Children</SectionContainer>);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
