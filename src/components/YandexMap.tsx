import React from 'react';
import { Box } from '@mui/material';

const YandexMap: React.FC = () => {
  return (
    <Box
      sx={{
        borderRadius: 4,
        overflow: 'hidden',
        boxShadow: 6,
        border: '2px solid #ff1744',
        maxWidth: 600,
        margin: '0 auto',
        background: '#111',
      }}
    >
      <iframe
        src="https://yandex.by/map-widget/v1/?from=constructor&ll=30.185791%2C55.200586&mode=search&oid=70052666295&ol=biz&tab=reviews&z=17.8"
        width="100%"
        height="400"
        frameBorder="0"
        allowFullScreen
        style={{ border: 0, borderRadius: '12px', minHeight: 300, position: 'relative' }}
        title="Яндекс.Карта автосервиса DELTA MOTORS"
      />
    </Box>
  );
};

export default YandexMap; 