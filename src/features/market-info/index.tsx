import React, { useState, useEffect, memo } from 'react';
import { Card, Row, Col, Statistic, Typography, Tooltip } from 'antd';
import { CartesianGrid, Legend, Line, LineChart, XAxis, YAxis } from 'recharts';
import { MarketData } from '@models/market-data';

const { Title } = Typography;

type ChartData = {
  price: number;
  name: string;
};

const MarketInfo: React.FC<MarketData> = memo((props) => {
  const { pair, price, volume, priceHistory } = props;
  const [priceHistoryData, setPriceHistoryData] = useState<ChartData[]>([]);

  useEffect(() => {
    const formattedData = priceHistory.map((price, index) => ({
      name: index.toString(),
      price: parseFloat(price),
    }));
    setPriceHistoryData(formattedData);
  }, [priceHistory]);

  return (
    <Card style={{ width: '300px' }}>
      <Row gutter={[8, 8]}>
        <Col span={24}>
          <Title level={5}>{`${pair.primary}/${pair.secondary}`}</Title>
        </Col>
        <Col span={12}>
          <Statistic title='Last' value={price.last} precision={2} />
        </Col>
        <Col span={12}>
          <Statistic
            title='Change'
            value={`${price.change.percent}%`}
            precision={2}
            style={{
              color: price.change.direction === 'Up' ? 'green' : 'red',
            }}
          />
        </Col>
        <Col span={24}>
          <Statistic title='Volume' value={volume.primary} precision={2} />
        </Col>
        <Col span={12}>
          <Statistic title='Bid' value={price.bestBid} precision={2} />
        </Col>
        <Col span={12}>
          <Statistic title='Offer' value={price.bestOffer} precision={2} />
        </Col>
      </Row>
      <Row gutter={[8, 8]}>
        <Col span={24}>
          <LineChart
            width={280}
            height={100}
            data={priceHistoryData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis dataKey='name' />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type='monotone'
              dataKey='price'
              stroke='#8884d8'
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </Col>
      </Row>
    </Card>
  );
});

export { MarketInfo };
