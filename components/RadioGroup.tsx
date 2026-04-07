import React from 'react';
import { Form, Radio } from 'antd';

interface RadioGroupProps {
  label: string;
  name: string;
  options: { label: string; value: string }[];
  rules?: object[];
}

const RadioGroup: React.FC<RadioGroupProps> = ({ label, name, options, rules }) => {
  return (
    <Form.Item
      label={<span style={{ fontWeight: 'bold', color: '#000', textAlign: 'center', display: 'block'}}>{label}</span>}
      name={name}
      rules={rules}
    >
     <Radio.Group className="custom-radio-group">
  {options.map((opt) => (
    <Radio key={opt.value} value={opt.value}>
      {opt.label}
    </Radio>
  ))}
</Radio.Group>

    </Form.Item>
  );
};

export default RadioGroup;