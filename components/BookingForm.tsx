import React from 'react';
import { Form, Row, Col } from 'antd'; // Added Row and Col
import FormField from './FormField';
import RadioGroup from './RadioGroup';
import SubmitButton from './SubmitButton';
import PickerWithType from './DatePicker';
import TextArea from './TextArea';

interface BookingFormProps {
  onFinish: (values: unknown) => void;
}

const BookingForm: React.FC<BookingFormProps> = ({ onFinish }) => {
  const [form] = Form.useForm();

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
      style={{ width: '100%'}}
    >
      <Row gutter={24}> {/* gutter adds space between columns */}
        {/* First & Last Name Row */}
        <Col span={12}>
          <FormField
            label="First Name"
            name="firstName"
            placeholder="Yogesh"
            rules={[{ required: true, message: 'Required' }]}
          />
        </Col>
        <Col span={12}>
          <FormField
            label="Last Name"
            name="lastName"
            placeholder="Thapa"
            rules={[{ required: true, message: 'Required' }]}
          />
        </Col>

        {/* Email & Mobile Row */}
        <Col span={12}>
          <FormField
            label="Email"
            name="email"
            placeholder="thapa.yogesh@gmail.com"
            rules={[
              { required: true, message: 'Required' },
              { type: 'email', message: 'Invalid email' }
            ]}
          />
        </Col>
        <Col span={12}>
          <FormField
            label="Mobile Number"
            name="mobile"
            placeholder="98********"
            rules={[{ required: true, message: 'Required' }]}
          />
        </Col>

        {/* Address (Full Width) */}
        <Col span={24}>
          <FormField
            label="Temporary Address"
            name="address"
            placeholder="Lalbandi"
            rules={[{ required: true, message: 'Required' }]}
          />
        </Col>

         <Col span={24}>
          <FormField
            label="Permanent Address"
            name="address"
            placeholder="Kathmandu"
            rules={[{ required: true, message: 'Required' }]}
          />
        </Col>

        {/* Gender & Picker Row */}
        <Col span={12}>
          <RadioGroup
            label="Gender"
            name="gender"
            options={[
              { label: 'Male', value: 'male' },
              { label: 'Female', value: 'female' },
              { label: 'Other', value: 'other' }
            ]}
            rules={[{ required: true, message: 'Required' }]}
          />
        </Col>
          
          <Row span={12}>
          <p style={{fontFamily: 'serif', fontWeight: 'bold', color: 'black'}}
          >Select your preferred date and time:</p>
              <PickerWithType />
              
          </Row>

            <Col span={12}>
          <TextArea/>
            </Col>

        {/* Submit Button */}
        <Col span={24}>
          <SubmitButton />
        </Col>
      </Row>
    </Form>
  );
};

export default BookingForm;