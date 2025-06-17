import React from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Paper,
} from '@mui/material';
import styled from 'styled-components';
import BuildIcon from '@mui/icons-material/Build';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import SpeedIcon from '@mui/icons-material/Speed';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import StarIcon from '@mui/icons-material/Star';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

const HeroSection = styled(Box)`
  position: relative;
  min-height: 420px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  text-align: center;
  padding: 64px 0 48px 0;
  background: linear-gradient(90deg, rgba(34,34,34,0.65) 0%, rgba(34,34,34,0.5) 100%), linear-gradient(0deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.04) 100%), url('/images/hero-car.jpg') center/cover no-repeat;
  box-shadow: 0 8px 32px rgba(0,0,0,0.25);
`;


const HeroSubtitle = styled(Typography)`
  font-size: 1.4rem;
  font-weight: 400;
  margin-bottom: 32px;
`;

const HeroButton = styled(Button)`
  background: #fff;
  color: #ff1744;
  font-weight: 700;
  font-size: 1.1rem;
  padding: 14px 36px;
  border-radius: 6px;
  box-shadow: 0 4px 16px rgba(255, 23, 68, 0.15);
  transition: all 0.3s;
  &:hover {
    background: #ff1744;
    color: #fff;
    box-shadow: 0 8px 24px rgba(255, 23, 68, 0.25);
  }
`;

const AdvantageCard = styled(Card)`
  background: #111111;
  color: #fff;
  border-radius: 12px;
  padding: 32px 24px;
  text-align: center;
  box-shadow: 0 4px 16px rgba(255, 23, 68, 0.08);
  min-height: 220px;
`;

const StepBox = styled(Box)`
  background: #111111;
  border-radius: 12px;
  padding: 32px 24px;
  color: #fff;
  text-align: center;
  margin-bottom: 24px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const BlackButton = styled(Button)`
  background: rgba(0,0,0,0.85);
  color: #fff;
  font-weight: 700;
  border-radius: 6px;
  border: 3px solid #fff;
  box-shadow: 0 0 0 3px rgba(255,255,255,0.15);
  padding: 14px 32px;
  font-size: 1.1rem;
  transition: all 0.2s;
  &:hover {
    background: #fff;
    color: #ff1744;
    border-color: #ff1744;
    box-shadow: 0 0 12px 2px #fff;
    transform: translateY(-2px) scale(1.03);
  }
`;

const services = [
  {
    title: 'Диагностика',
    description: 'Комплексная компьютерная диагностика всех систем автомобиля',
    icon: <SpeedIcon sx={{ fontSize: 40 }} />,
    image: '/images/diagnostic.jpg',
  },
  {
    title: 'Ремонт двигателя',
    description: 'Профессиональный ремонт двигателей любой сложности',
    icon: <BuildIcon sx={{ fontSize: 40 }} />,
    image: '/images/engine.jpg',
  },
  {
    title: 'Техобслуживание',
    description: 'Регулярное техническое обслуживание по регламенту',
    icon: <DirectionsCarIcon sx={{ fontSize: 40 }} />,
    image: '/images/service.jpg',
  },
];

const advantages = [
  {
    icon: <EmojiEventsIcon sx={{ fontSize: 40, color: '#ff1744' }} />, 
    text: 'Опытные специалисты с многолетним стажем',
  },
  {
    icon: <BuildIcon sx={{ fontSize: 40, color: '#ff1744' }} />, 
    text: 'Современное диагностическое оборудование',
  },
  {
    icon: <VerifiedUserIcon sx={{ fontSize: 40, color: '#ff1744' }} />, 
    text: 'Гарантия на все виды работ',
  },
  {
    icon: <MonetizationOnIcon sx={{ fontSize: 40, color: '#ff1744' }} />, 
    text: 'Доступные цены и прозрачная система оплаты',
  },
];

const steps = [
  'Выберите услугу',
  'Оставьте заявку',
  'Отдайте машину в ремонт',
  'Получите автомобиль',
];

const reviews = [
  {
    name: 'Алексей К.',
    text: 'Очень доволен сервисом! Быстро нашли и устранили проблему, цены адекватные. Рекомендую!',
    rating: 5,
  },
  {
    name: 'Ирина П.',
    text: 'Обслуживаю здесь уже несколько лет. Всегда вежливый персонал, качественный ремонт и честные цены.',
    rating: 5,
  },
  {
    name: 'Владимир С.',
    text: 'Понравился подход мастеров — всё объяснили, показали старые детали. Сделали быстро и аккуратно.',
    rating: 4,
  },
];

const ReviewCard = styled(Card)`
  background: #111111;
  color: #fff;
  border-radius: 12px;
  padding: 24px 20px;
  min-height: 180px;
  box-shadow: 0 4px 16px rgba(255, 23, 68, 0.08);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Home: React.FC = () => {
  return (
    <>
      <HeroSection>
        <Container>
          <Typography
            variant="h1"
            sx={{
              fontWeight: 900,
              fontSize: { xs: '2.2rem', md: '3.5rem' },
              letterSpacing: 2,
              color: '#fff',
              mb: 2,
              textShadow: '0 4px 24px rgba(0,0,0,0.25)',
            }}
          >
            DELTA MOTORS
          </Typography>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              color: '#ff1744',
              mb: 3,
              fontSize: { xs: '1.3rem', md: '2rem' },
              textShadow: '0 2px 12px rgba(0,0,0,0.18)',
            }}
          >
            Ремонт автомобилей в Витебске
          </Typography>
          <HeroSubtitle>
            Все виды работ — диагностика, ремонт, ТО. Современное оборудование и опытные мастера.
            <br />
            <b>Работаем с 2008 года</b>
          </HeroSubtitle>
          <StyledLink to="/services">
            <HeroButton variant="contained">Смотреть услуги</HeroButton>
          </StyledLink>
        </Container>
      </HeroSection>

      <section>
        <Container>
          <Typography variant="h2" align="center" gutterBottom sx={{ color: '#ff1744', fontWeight: 700 }}>
            Наши преимущества
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {advantages.map((adv, idx) => (
              <Grid item xs={12} md={4} key={idx}>
                <AdvantageCard>
                  {adv.icon}
                  <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>{adv.text}</Typography>
                </AdvantageCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </section>

      <section>
        <Container>
          <Typography variant="h2" align="center" gutterBottom sx={{ color: '#ff1744', fontWeight: 700 }}>
            Как это работает
          </Typography>
          <Grid container spacing={3} justifyContent="center">
            {steps.map((step, idx) => (
              <Grid item xs={12} sm={6} md={3} key={idx}>
                <StepBox>
                  <Typography variant="h4" sx={{ color: '#ff1744', fontWeight: 700, mb: 1 }}>
                    {idx + 1}
                  </Typography>
                  <Typography variant="body1">{step}</Typography>
                </StepBox>
              </Grid>
            ))}
          </Grid>
        </Container>
      </section>

      <Container sx={{ py: 8 }}>
        <Typography variant="h3" component="h2" textAlign="center" gutterBottom>
          Наши услуги
        </Typography>
        <Grid container spacing={4} sx={{ mt: 2 }}>
          {services.map((service) => (
            <Grid item key={service.title} xs={12} md={4}>
              <Card
                sx={{
                  background: '#111111',
                  color: '#fff',
                  borderRadius: 3,
                  boxShadow: '0 4px 16px rgba(255, 23, 68, 0.08)',
                  transition: 'all 0.3s',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 8px 24px rgba(255, 23, 68, 0.18)',
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={service.image}
                  alt={service.title}
                />
                <CardContent>
                  <Box display="flex" alignItems="center" mb={2}>
                    {service.icon}
                    <Typography variant="h5" component="h3" ml={1} sx={{ color: '#ff1744', fontWeight: 700 }}>
                      {service.title}
                    </Typography>
                  </Box>
                  <Typography variant="body1" color="text.secondary">
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box textAlign="center" mt={6}>
          <StyledLink to="/services">
            <Button
              variant="outlined"
              color="primary"
              size="large"
            >
              Все услуги
            </Button>
          </StyledLink>
        </Box>
      </Container>

      <section>
        <Container>
          <Typography variant="h2" align="center" gutterBottom sx={{ color: '#ff1744', fontWeight: 700 }}>
            Почему выбирают нас?
          </Typography>
          <Grid container spacing={3} justifyContent="center" alignItems="stretch">
            {advantages.map((item, idx) => (
              <Grid item xs={12} sm={6} md={3} key={idx}>
                <Paper
                  elevation={4}
                  sx={{
                    p: 3,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: '#1a1a1a',
                    borderRadius: 3,
                    height: '100%',
                    minHeight: 170,
                  }}
                >
                  {item.icon}
                  <Typography
                    variant="subtitle1"
                    align="center"
                    sx={{ color: '#fff', mt: 2, fontWeight: 500 }}
                  >
                    {item.text}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
          <Box textAlign="center" mt={4}>
            <StyledLink to="/contact">
              <BlackButton size="large">
                Записаться на консультацию
              </BlackButton>
            </StyledLink>
          </Box>
        </Container>
      </section>

      <section>
        <Container>
          <Typography variant="h2" align="center" gutterBottom sx={{ color: '#ff1744', fontWeight: 700 }}>
            Отзывы клиентов
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {reviews.map((review, idx) => (
              <Grid item xs={12} md={4} key={idx}>
                <ReviewCard>
                  <Box display="flex" alignItems="center" mb={1}>
                    {[...Array(review.rating)].map((_, i) => (
                      <StarIcon key={i} sx={{ color: '#ff1744', fontSize: 22 }} />
                    ))}
                  </Box>
                  <Typography variant="body1" sx={{ mb: 2 }}>
                    {review.text}
                  </Typography>
                  <Typography variant="subtitle2" sx={{ color: '#ff1744', fontWeight: 700 }}>
                    {review.name}
                  </Typography>
                </ReviewCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </section>
    </>
  );
};

export default Home; 