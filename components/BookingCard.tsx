import React from 'react';
import { Card } from 'antd';

interface BookingCardProps {
  children: React.ReactNode;
}

const BookingCard: React.FC<BookingCardProps> = ({ children }) => {
  return (
    <Card className="booking-form" style={{
      maxWidth: 650,
      width: 600,
      margin: '0 auto',
      borderRadius: 12,
      boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
      backgroundColor: '#F0F5FF'
    }}>
      {children}
    </Card>
  );
};

export default BookingCard;