import React from 'react';
import { Form, Input } from 'antd';

interface FormFieldProps {
  label: string;
  name: string;
  placeholder: string;
  rules?: object[];
}

const FormField: React.FC<FormFieldProps> = ({ label, name, placeholder, rules }) => {
  return (
    <Form.Item
      label={<span style={{ fontWeight: 'bold', color: '#000' }}>{label}</span>}
      name={name}
      rules={rules}
    >
      <Input placeholder={placeholder} style={{ borderRadius: 15, border: '1px solid black', height: '40px'}} />
    </Form.Item>
  );
};

export default FormField;