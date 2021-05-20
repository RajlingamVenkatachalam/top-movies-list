import { render, screen } from '@testing-library/react';
import MoviesList from './MoviesList';
import { moviesList } from "../testUtil/testData";

test('renders with selected movie', () => {
  render(<MoviesList selectedMovieId={moviesList[0].id} />);
  const linkElement = screen.getByText(moviesList[0].title);
  expect(linkElement.className).toBe("movie-row__selected");
});
