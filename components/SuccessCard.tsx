
import { Card } from 'antd';

const SuccessCard = () => (
  <Card
    style={{
      width: 350,
      height: 250,
      textAlign: 'center',
      borderRadius: 12,
      color: '#135200',
      backgroundColor: '#F6FFED', 
      border: '1px solid #B7EB8F',
    }}
  >
    <h3>Booking Successful!</h3>
    <p>Your request has been received.</p>
    <span>Thank you for choosing us!</span>
  </Card>
);

export default SuccessCard;
