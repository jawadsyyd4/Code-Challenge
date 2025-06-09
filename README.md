# Skip Size Selector

A modern, responsive React application for selecting skip sizes with an intuitive user interface. This project demonstrates best practices in component architecture, responsive design, and user experience.

## 🚀 Features

- **Interactive Skip Selection**: Users can browse and select from various skip sizes
- **Responsive Design**: Fully responsive layout that works seamlessly on mobile, tablet, and desktop
- **Multiple View Options**: Toggle between grid and list views
- **Real-time Price Calculation**: Automatic VAT calculation and total price display
- **Progress Tracking**: Visual progress bar showing the user's position in the booking process
- **Detailed Information**: Clear display of skip features including road placement and heavy waste allowance
- **Selection Summary**: Comprehensive overlay showing selected skip details

## 🏗️ Project Structure

The project follows a component-based architecture for better maintainability and reusability:

```
src/
  components/
    ├── SkipSelector.jsx      # Main container component
    ├── ProgressBar.jsx       # Progress tracking component
    ├── SkipCard.jsx         # Individual skip display component
    ├── ViewToggle.jsx       # Grid/List view toggle component
    └── SelectedSkipSummary.jsx  # Selection overlay component
```

## 💡 Technical Approach

### Component Architecture

1. **SkipSelector (Main Component)**

   - Manages application state
   - Handles API integration
   - Coordinates child components
   - Implements main layout structure

2. **ProgressBar**

   - Displays booking progress steps
   - Responsive design with mobile optimization
   - Visual indicators for completed, active, and upcoming steps

3. **SkipCard**

   - Displays individual skip information
   - Handles selection state
   - Adapts layout based on view mode (grid/list)
   - Shows pricing and features

4. **ViewToggle**

   - Manages view mode switching
   - Provides visual feedback for current view

5. **SelectedSkipSummary**
   - Shows detailed information for selected skip
   - Handles confirmation and back actions
   - Implements responsive overlay design

### Design Decisions

- **Responsive First**: Built with mobile-first approach ensuring compatibility across all devices
- **Component Separation**: Clear separation of concerns for better maintainability
- **State Management**: Centralized state management in the main component
- **Flexible Layout**: Adaptive layout system using CSS Grid and Flexbox
- **User Experience**: Focus on intuitive interactions and clear visual feedback

### Styling Approach

- **Tailwind CSS**: Utilized for rapid development and consistent styling
- **Responsive Classes**: Implemented breakpoint-specific styles
- **Custom Animations**: Added smooth transitions and animations for better UX
- **Dark Theme**: Modern dark theme with appropriate contrast ratios

## 🔧 Technical Details

### API Integration

The application integrates with an external API endpoint:

```javascript
https://app.wewantwaste.co.uk/api/skips/by-location
```

Data fetching includes:

- Error handling
- Loading states
- Data transformation for display

### Responsive Breakpoints

The application uses the following breakpoints:

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

### Key Features Implementation

1. **Skip Card Selection**

   - Visual feedback on selection
   - Smooth scaling animation
   - Accessible click targets

2. **View Switching**

   - Seamless transition between grid and list views
   - Optimized layouts for each view mode
   - Persistent view state

3. **Selection Summary**
   - Modal overlay with backdrop blur
   - Responsive layout adjustments
   - Clear call-to-action buttons

## 🚀 Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## 🛠️ Built With

- React
- Tailwind CSS
- Axios for API calls
- Modern JavaScript (ES6+)

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!
