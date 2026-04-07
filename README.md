# Booking Page

A modern booking form page built with Next.js and Ant Design.

## Features

- Clean, responsive booking form interface
- Form validation with Ant Design components
- Date picker for selecting booking dates
- Radio group for booking options
- Text area for additional notes
- Success card with confirmation message
- Mobile-responsive design (adapts at 768px breakpoint)
- Gradient background

## Tech Stack

- **Framework:** Next.js 16.1.6
- **UI Library:** Ant Design 6.3.5
- **Language:** TypeScript
- **Styling:** CSS with Tailwind CSS 4

## Getting Started

### Prerequisites

- Node.js 18+

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the booking page.

### Build

```bash
npm run build
```

### Start Production Server

```bash
npm run start
```

## Project Structure

```
booking_page/
├── app/
│   ├── globals.css      # Global styles and responsive breakpoints
│   ├── layout.tsx       # Root layout with Ant Design registry
│   └── page.tsx         # Main booking page component
├── components/
│   ├── BookingCard.tsx      # Card wrapper for form
│   ├── BookingForm.tsx      # Main form component
│   ├── DatePicker.tsx       # Date picker input
│   ├── FormField.tsx        # Reusable form field wrapper
│   ├── RadioGroup.tsx       # Radio button group
│   ├── SubmitButton.tsx     # Submit button component
│   ├── SuccessCard.tsx      # Success confirmation card
│   └── TextArea.tsx         # Text area input
├── package.json
└── README.md
```

## Form Fields

- Name input
- Email input
- Phone number input
- Date picker for booking date
- Radio group for booking options
- Text area for additional notes
- Submit button

## Responsive Behavior

- **Desktop (>768px):** Shows info panel + form side by side
- **Mobile (<768px):** Form takes full width, info panel hidden
