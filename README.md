# Love Website - One Month Anniversary

A beautiful website to celebrate one month of being together with your girlfriend.

## Features

- Animated floating hearts
- Background music player
- Countdown to the next month anniversary
- Contact section with phone number
- "100 Things About You" carousel
- Fully responsive design
- Spanish language support
- Beautiful romantic color palette

## Setup Instructions

1. Install dependencies:
   ```
   npm install
   ```

2. Add your photos to the `public/images` directory:
   - smile.jpg
   - laugh.jpg
   - personality.jpg
   - kindness.jpg
   - love.jpg
   - Add more photos as needed

3. Add background music:
   - Place your romantic background music file in `public/music/romantic-background.mp3`

4. Customize the content:
   - Edit the Spanish translations in `src/locales/es.ts`
   - Add more items to the "100 Things About You" carousel in `src/App.tsx`

5. Run the development server:
   ```
   npm run dev
   ```

## Customization

### Adding More Photos

1. Add your photos to the `public/images` directory
2. Update the `thingsAboutYou` array in `src/App.tsx` with new entries:
   ```typescript
   const thingsAboutYou = [
     { title: 'Tu sonrisa', image: '/images/smile.jpg' },
     { title: 'Tu risa', image: '/images/laugh.jpg' },
     // Add more items here
   ];
   ```

### Changing the Background Music

1. Replace the file at `public/music/romantic-background.mp3` with your preferred music

### Modifying Text

Edit the Spanish translations in `src/locales/es.ts` to customize all text content.

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- PrimeReact
- Framer Motion

## Deployment

Build the project for production:
```
npm run build
```

The built files will be in the `dist` directory, ready to be deployed to your hosting service.
