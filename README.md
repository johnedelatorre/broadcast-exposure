<<<<<<< HEAD
# Relo Edge - Broadcast Exposure Dashboard

A pixel-perfect implementation of the Figma design for a sports analytics dashboard featuring broadcast exposure data, audience breakdown, and viewership heat maps.

## Features

- ✅ **Responsive Design** - Built with Tailwind CSS for modern, responsive layouts
- ✅ **Interactive Filters** - Collapsible filter panels with multiple filter options
- ✅ **Data Tables** - Sortable tables with pagination
- ✅ **Toggle Controls** - Team/League attribution switches, HH/Ind viewership toggles
- ✅ **Heat Map Section** - Expandable visualization section for geographic data
- ✅ **Modern Stack** - Next.js 14, React 18, TypeScript, Tailwind CSS
- ✅ **Icons** - Font Awesome integration for all icons
- ✅ **Custom Fonts** - Roboto font family as specified in design

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **UI Library**: React 18
- **Styling**: Tailwind CSS
- **Icons**: Font Awesome
- **Language**: TypeScript
- **Font**: Roboto (Google Fonts)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
_relo_edge/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx             # Main dashboard page
│   └── globals.css          # Global styles and Tailwind imports
├── public/                  # Static assets
├── tailwind.config.js       # Tailwind configuration with custom colors
├── tsconfig.json            # TypeScript configuration
├── next.config.js           # Next.js configuration
└── package.json             # Dependencies and scripts
```

## Design Implementation

### Color Palette

- **Primary Blue**: `#009FDF` - Main action buttons, active states
- **Yellow**: `#FFDE00` - Logo background
- **Navigation BG**: `#E8E9EA` - Sidebar and header background
- **Green Scale**: Used for heat map visualization
  - Green 100: `#89E9B8`
  - Green 200: `#50CE8E`
  - Green 300: `#25B771`
  - Green 400: `#179B62`
  - Green 500: `#097F54`

### Components

1. **Sidebar Navigation** (Collapsed)
   - Yellow logo
   - Icon-only navigation items
   - Active state indicator

2. **Top Header**
   - Breadcrumb navigation
   - Attribution toggle switches
   - User profile icon

3. **Team Header**
   - Team logo
   - Team name heading

4. **Tabs Section**
   - Three tabs: Viewership, Sample Exposures, Audience Breakdown
   - HH/Ind viewership toggle

5. **Filters Panel**
   - Collapsible panel
   - Multiple filter dropdowns
   - Date range selector
   - Action buttons (Clear, Save, Update)

6. **Data Table**
   - Sortable columns
   - Striped rows
   - Pagination controls
   - CSV download button

7. **Heat Map Section**
   - Collapsible visualization
   - Legend with color gradient
   - Filter indicators
   - PNG download button

## Customization

### Updating Colors

Edit `tailwind.config.js` to modify the color scheme:

```js
theme: {
  extend: {
    colors: {
      'relo-yellow': '#FFDE00',
      'relo-primary': '#009FDF',
      // ... add more custom colors
    }
  }
}
```

### Adding New Components

Create new components in a `components/` directory and import them into `app/page.tsx`.

### Data Integration

Currently uses mock data. To integrate real data:

1. Create API routes in `app/api/`
2. Use React hooks (useState, useEffect) to fetch data
3. Update table data with fetched results

## Build for Production

```bash
npm run build
npm start
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Future Enhancements

- [ ] Add real data API integration
- [ ] Implement actual US heat map with interactive states
- [ ] Add filter functionality (dropdowns, date pickers)
- [ ] Table sorting and filtering
- [ ] Export functionality (CSV, PNG)
- [ ] Mobile responsive optimizations
- [ ] Dark mode support
- [ ] Animation transitions

## License

Private project - All rights reserved

---

Built with ❤️ using Figma design specifications

=======
# broadcast-exposure
>>>>>>> e776a2a0e0372ac72f04f1739eb605b804576900
