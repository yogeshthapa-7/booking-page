import React from 'react';
import { Form, Button } from 'antd';

interface SubmitButtonProps {
  label?: string;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ label = 'Book Now' }) => {
  return (
    <Form.Item style={{ marginTop: 24 }}>
      <Button type="primary" htmlType="submit" block size="large" style={{ borderRadius: 20 }}>
        {label}
      </Button>
    </Form.Item>
  );
};

export default SubmitButton;