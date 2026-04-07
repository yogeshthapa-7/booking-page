'use client';

import React, { useState } from 'react';
import BookingCard from '@/components/BookingCard';
import BookingForm from '@/components/BookingForm';
import SuccessCard from '@/components/SuccessCard'; 

const Booking = () => {
  const [showCard, setShowCard] = useState(false);

  const handleSubmit = (values: unknown) => {
    console.log('Success:', values);
    setShowCard(true);

    
    setTimeout(() => {
      setShowCard(false);
    }, 4000);
  };

  return (
    <div
  style={{
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #99d4dbff 0%, #35637aff 50%, #53cfeeff 100%)',
    padding: '48px 24px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center', 
    gap: '40px',
  }}
>
  <div 
    style={{ 
      width: 500,
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center', 
      alignItems: 'flex-start',   
      padding: '20px' 
    }}
  >
    <h2 style={{ 
        fontSize: 40, 
        fontWeight: 'bold', 
        color: '#fff', 
        fontFamily: 'Roboto', 
        margin: '0 0 15px 0' 
    }}>
      Why Book With Us?
    </h2>
    
    <p style={{ fontSize: 20, lineHeight: 1.6, fontWeight: '600', margin: '0 0 10px 0', color: '#fff' }}>
      We provide hassle-free booking with instant confirmation. 
      Enjoy exclusive deals, secure payments, and 24/7 customer support.
    </p>
    
    <p style={{ fontSize: 20, lineHeight: 1.6, fontWeight: '600', margin: 0, color: '#fff' }}>
      Fill out the form on the right to reserve your spot today!
    </p>
  </div>

      <BookingCard>
        <h1
          style={{
            fontSize: 28,
            fontWeight: 'bold',
            fontFamily: 'Segoe UI',
            textAlign: 'center',
            marginBottom: 32,
            color: '#000',
          }}
        >
          Booking Form Page
        </h1>
        <BookingForm onFinish={handleSubmit} />
      </BookingCard>

      {showCard && (
        <div
          style={{
            position: 'fixed',
            top: '20%',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 1000,
          }}
        >
          <SuccessCard />
        </div>
      )}
    </div>
  );
};

export default Booking;
