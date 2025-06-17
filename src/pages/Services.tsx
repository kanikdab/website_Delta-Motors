import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
} from '@mui/material';
import styled from 'styled-components';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import BuildIcon from '@mui/icons-material/Build';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import SpeedIcon from '@mui/icons-material/Speed';
import SettingsIcon from '@mui/icons-material/Settings';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

const ServiceCard = styled(Card)`
  background: #111111;
  color: #fff;
  border-radius: 12px;
  height: 100%;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
  box-shadow: 0 4px 16px rgba(255, 23, 68, 0.08);
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 24px rgba(255, 23, 68, 0.18);
  }
  .MuiTypography-h5 {
    color: #ff1744;
    font-weight: 700;
  }
  .MuiButton-contained {
    background: #ff1744;
    color: #fff;
    font-weight: 600;
    border-radius: 6px;
    margin-top: 8px;
    &:hover {
      background: #b2102f;
    }
  }
`;

const services = [
  {
    title: 'Диагностика',
    icon: <SpeedIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
    description: 'Комплексная компьютерная диагностика всех систем автомобиля',
    features: [
      'Компьютерная диагностика двигателя',
      'Проверка электронных систем',
      'Диагностика подвески и тормозов',
      'Проверка системы кондиционирования',
    ],
    price: 'от 30 BYN',
  },
  {
    title: 'Ремонт двигателя',
    icon: <BuildIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
    description: 'Профессиональный ремонт двигателей любой сложности',
    features: [
      'Капитальный ремонт двигателя',
      'Замена маслосъемных колпачков',
      'Ремонт ГРМ',
      'Замена прокладок и сальников',
    ],
    price: 'от 100 BYN',
  },
  {
    title: 'Техобслуживание',
    icon: <DirectionsCarIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
    description: 'Регулярное техническое обслуживание по регламенту',
    features: [
      'Замена масла и фильтров',
      'Проверка и замена тормозных колодок',
      'Замена ремней и роликов',
      'Проверка и долив технических жидкостей',
    ],
    price: 'от 50 BYN',
  },
  {
    title: 'Ремонт подвески',
    icon: <SettingsIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
    description: 'Диагностика и ремонт ходовой части',
    features: [
      'Замена амортизаторов',
      'Ремонт рычагов подвески',
      'Замена шаровых опор',
      'Регулировка развал-схождения',
    ],
    price: 'от 40 BYN',
  },
  {
    title: 'Ремонт тормозной системы',
    icon: <LocalShippingIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
    description: 'Обслуживание и ремонт тормозной системы',
    features: [
      'Замена тормозных колодок и дисков',
      'Ремонт суппортов',
      'Замена тормозной жидкости',
      'Проверка тормозных шлангов',
    ],
    price: 'от 35 BYN',
  },
];

const Services: React.FC = () => {
  return (
    <Box>
      <Box bgcolor="primary.main" color="white" py={6}>
        <Container>
          <Typography variant="h3" component="h1" textAlign="center" gutterBottom>
            Наши услуги
          </Typography>
          <Typography variant="h6" textAlign="center">
            Профессиональный ремонт и обслуживание автомобилей
          </Typography>
        </Container>
      </Box>

      <Container sx={{ py: 8 }}>
        <Grid container spacing={4}>
          {services.map((service) => (
            <Grid item key={service.title} xs={12} md={6} lg={4}>
              <ServiceCard>
                <CardContent>
                  <Box display="flex" alignItems="center" mb={2}>
                    {service.icon}
                    <Typography variant="h5" component="h2" ml={2}>
                      {service.title}
                    </Typography>
                  </Box>
                  <Typography variant="body1" color="text.secondary" paragraph>
                    {service.description}
                  </Typography>
                  <List>
                    {service.features.map((feature) => (
                      <ListItem key={feature}>
                        <ListItemIcon>
                          <CheckCircleIcon color="primary" />
                        </ListItemIcon>
                        <ListItemText primary={feature} />
                      </ListItem>
                    ))}
                  </List>
                  <Box mt={2} textAlign="center">
                    <Typography variant="h6" color="primary" gutterBottom>
                      {service.price}
                    </Typography>
                    <Button
                      variant="contained"
                      color="primary"
                      fullWidth
                    >
                      Записаться
                    </Button>
                  </Box>
                </CardContent>
              </ServiceCard>
            </Grid>
          ))}
        </Grid>

        <Box mt={6} textAlign="center">
          <Typography variant="h5" gutterBottom>
            Не нашли нужную услугу?
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            Свяжитесь с нами для получения консультации по интересующему вас вопросу
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            href="/contact"
          >
            Связаться с нами
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Services; 