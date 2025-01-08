import { render, screen } from '@testing-library/react';
import Hero from './Hero';

describe('Hero Component', () => {
    it('renders the hero image', () => {
        render(<Hero />);
        const heroImage = screen.getByAltText('Professional Image');
        expect(heroImage).toBeInTheDocument();
    });

    it('renders the main heading', () => {
        render(<Hero />);
        const heading = screen.getByText('Quality home services, on demand');
        expect(heading).toBeInTheDocument();
    });

    it('renders the subheading', () => {
        render(<Hero />);
        const subheading = screen.getByText('Experienced, hand-picked Professionals to serve you at your doorstep');
        expect(subheading).toBeInTheDocument();
    });

    it('renders the city dropdown', () => {
        render(<Hero />);
        const dropdown = screen.getByRole('combobox');
        expect(dropdown).toBeInTheDocument();
    });

    it('renders the correct number of dropdown options', () => {
        render(<Hero />);
        const options = screen.getAllByRole('option');
        expect(options.length).toBe(4); // Including the "Select your city" option
    });
});