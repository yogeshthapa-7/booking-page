'use client';

import React, { useState } from 'react';
import { DatePicker, Select, Space, TimePicker, ConfigProvider } from 'antd';

interface PickerWithTypeProps {
  type: string;
  onChange: (value: unknown) => void;
}

const PickerWithType: React.FC<PickerWithTypeProps> = ({ type, onChange }) => {
  const pickerStyle = { width: '100%' };
  
  if (type === 'time') {
    return <TimePicker style={pickerStyle} onChange={onChange} />;
  }
  if (type === 'date') {
    return <DatePicker style={pickerStyle} onChange={onChange} />;
  }
  return <DatePicker style={pickerStyle} picker={type} onChange={onChange} />;
};

const App: React.FC = () => {
  const [type, setType] = useState('time');

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#1890ff',
          borderRadius: 8,
        },
      }}
    >
      <div>

        <Space 
          orientation="vertical" 
          size="middle" 
          style={{ 
            display: 'flex', 
            background: '#fff', 
            padding: '24px', 
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            width: '500px',
            maxWidth: '500px'
          }}
        >
          <div style={{ fontWeight: '600', color: '#130a0aff' }}>Select View Type:</div>
          <Select
            aria-label="Picker Type"
            value={type}
            onChange={setType}
            style={{ width: '100%' }}
            options={[
              { label: '🕒 Time', value: 'time' },
              { label: '📅 Date', value: 'date' },
              { label: '🗓️ Week', value: 'week' },
            ]}
          />
          
          <div style={{ fontWeight: '600', color: '#130a0aff' }}>Choose {type}:</div>
          <PickerWithType type={type} onChange={(value) => console.log(value)} />
        </Space>
      </div>
    </ConfigProvider>
  );
};

export default App;