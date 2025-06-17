import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import styled from 'styled-components';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const FooterContainer = styled.footer`
  background-color: #f5f5f5;
  padding: 40px 0;
  margin-top: auto;
`;


const ContactItem = styled(Box)`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  color: #666;
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" color="primary" gutterBottom>
              DELTA MOTORS
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Профессиональный автосервис с многолетним опытом работы.
              Мы предлагаем полный спектр услуг по ремонту и обслуживанию автомобилей.
            </Typography>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h6" color="primary" gutterBottom>
              Контакты
            </Typography>
            <ContactItem>
              <PhoneIcon sx={{ mr: 1 }} />
              <Typography variant="body2">
                +375 (29) 123-45-67
              </Typography>
            </ContactItem>
            <ContactItem>
              <EmailIcon sx={{ mr: 1 }} />
              <Typography variant="body2">
                info@delta-motors.by
              </Typography>
            </ContactItem>
            <ContactItem>
              <LocationOnIcon sx={{ mr: 1 }} />
              <Typography variant="body2">
                г. Витебск, ул. Мичурина, 5В
              </Typography>
            </ContactItem>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h6" color="primary" gutterBottom>
              Режим работы
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Понедельник - Пятница: 9:00 - 19:00
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Суббота: 9:00 - 17:00
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Воскресенье: Выходной
            </Typography>
          </Grid>
        </Grid>

        <Box mt={4} textAlign="center">
          <Typography variant="body2" color="textSecondary">
            © {new Date().getFullYear()} DELTA MOTORS. Все права защищены.
          </Typography>
        </Box>
      </Container>
    </FooterContainer>
  );
};

export default Footer; 
