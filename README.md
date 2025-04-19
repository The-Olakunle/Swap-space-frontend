# Swap Space Frontend

A modern web application for swapping and exchanging items built with Next.js, TypeScript, and Tailwind CSS.

## Features

- Modern and responsive design
- Component-based architecture
- Type-safe development with TypeScript
- Utility-first styling with Tailwind CSS
- Mobile-first approach
- Reusable UI components

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/swap-space-frontend.git
cd swap-space-frontend
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
swap-space-frontend/
├── app/
│   ├── components/     # Reusable UI components
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout component
│   └── page.tsx        # Home page component
├── public/            # Static assets
└── package.json       # Project dependencies
```

## Components

- `Button`: Reusable button component with different variants and sizes
- `Card`: Card component for displaying items with image and content
- `MobileMenu`: Responsive mobile navigation menu

## Styling

The project uses Tailwind CSS for styling. Custom styles can be added in `globals.css` or through Tailwind's configuration.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
