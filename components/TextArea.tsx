import React from 'react';
import { Input } from 'antd';
const { TextArea: AntTextArea } = Input;

const TextArea = () => {
  const onChange = e => {
    console.log('Change:', e.target.value);
  };

  return (
    <div style={{ marginBottom: '24px' }}>
      <p
        style={{
          fontWeight: '500',
          color: 'black',
          marginBottom: '8px',
          fontSize: '16px',
        }}
      >
        Special Request
      </p>
      <AntTextArea
        showCount
        maxLength={200}
        onChange={onChange}
        placeholder="Tell us about your special requests..."
        style={{
          height: 140,
          width: 540,
          borderRadius: '12px',
          padding: '12px',
          border: '1px solid #d9d9d9',
          fontSize: '16px',
          boxShadow: '0 8px 12px rgba(0,0,0,0.15)',
        }}
      />
    </div>
  );
};

export default TextArea;
