import { Currency } from '@models/currency';

import { Card, Col, Image } from 'antd';
import { Typography } from 'antd';
import { memo } from 'react';

const { Title, Text } = Typography;

const CurrencyTile: React.FC<Currency> = memo((props) => {
  const { code, ticker, type, icon } = props;
  return (
    <Col xs={24} sm={12} md={8} lg={6} xl={4}>
      <Card
        hoverable
        style={{
          width: 200,
          margin: '10px',
          padding: '15px',
          textAlign: 'center',
        }}
      >
        <Image
          src={`data:image/svg+xml;base64,${icon}`}
          width={100}
          height={100}
        />
        <Title level={5}>{code}</Title>
        <Text>{ticker}</Text> <Text type='secondary'>{type}</Text>
      </Card>
    </Col>
  );
});

export default CurrencyTile;
