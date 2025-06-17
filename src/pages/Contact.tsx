import React, { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
  Snackbar,
  Alert,
  Paper,
} from '@mui/material';
import styled from 'styled-components';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const ContactCard = styled(Card)`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px;
`;

const MapContainer = styled(Box)`
  width: 100%;
  height: 400px;
  margin-top: 40px;
  border-radius: 8px;
  overflow: hidden;
`;

const SERVICE_ADDRESS = 'г. Витебск, ул. Мичурина, 5В';
const MAP_COORDS = [55.200586, 30.185791];

const contactInfo = [
  {
    icon: <PhoneIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
    title: 'Телефон',
    content: '+375 (29) 123-45-67',
    secondary: 'Ежедневно с 9:00 до 19:00',
  },
  {
    icon: <EmailIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
    title: 'Email',
    content: 'info@delta-motors.by',
    secondary: 'Ответим в течение 24 часов',
  },
  {
    icon: <LocationOnIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
    title: 'Адрес',
    content: 'г. Витебск, ул. Мичурина, 5В',
    secondary: 'Рядом с ТЦ "Корона"',
  },
  {
    icon: <AccessTimeIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
    title: 'Режим работы',
    content: 'Пн-Вс: 08:00 - 20:00',
    secondary: '',
  },
];

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success' as 'success' | 'error',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет логика отправки формы
    setSnackbar({
      open: true,
      message: 'Спасибо за обращение! Мы свяжемся с вами в ближайшее время.',
      severity: 'success',
    });
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  const handleCloseSnackbar = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  return (
    <Box>
      <Box bgcolor="primary.main" color="white" py={6}>
        <Container>
          <Typography variant="h3" component="h1" textAlign="center" gutterBottom>
            Контакты
          </Typography>
          <Typography variant="h6" textAlign="center">
            Свяжитесь с нами для получения консультации
          </Typography>
        </Container>
      </Box>

      <Container sx={{ py: 8 }}>
        <Grid container spacing={4}>
          {contactInfo.map((info) => (
            <Grid item key={info.title} xs={12} sm={6} md={3}>
              <ContactCard>
                <Box mb={2}>{info.icon}</Box>
                <Typography variant="h6" gutterBottom>
                  {info.title}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  {info.content}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {info.secondary}
                </Typography>
              </ContactCard>
            </Grid>
          ))}
        </Grid>

        <Grid container spacing={6} sx={{ mt: 4 }}>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" gutterBottom>
              Напишите нам
            </Typography>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    label="Ваше имя"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    label="Телефон"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    label="Сообщение"
                    name="message"
                    multiline
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="large"
                    fullWidth
                  >
                    Отправить сообщение
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="h4" gutterBottom>
              Как нас найти
            </Typography>
            <Paper sx={{ p: 3, mb: 4 }}>
              <Typography variant="h6">Адрес:</Typography>
              <Typography variant="body1" gutterBottom>
                г. Витебск, ул. Мичурина, 5 В
              </Typography>
              <Typography variant="h6">Телефон:</Typography>
              <Typography variant="body1" gutterBottom>
                +375 (29) 123-45-67
              </Typography>
              <Typography variant="h6">Email:</Typography>
              <Typography variant="body1" gutterBottom>
                info@deltamotors.by
              </Typography>
            </Paper>
            <Box
              sx={{
                height: { xs: 300, md: 400 },
                mb: 4,
                overflow: 'hidden',
                borderRadius: 3,
                boxShadow: '0 8px 24px rgba(255, 23, 68, 0.18)',
                border: '2px solid #ff1744',
                background: '#111',
                maxWidth: '100%',
              }}
            >
              <iframe
                src="https://yandex.by/map-widget/v1/?from=constructor&ll=30.185791%2C55.200586&mode=search&oid=70052666295&ol=biz&z=17.8"
                width="100%"
                height="100%"
                frameBorder="0"
                allowFullScreen
                style={{ border: 0, borderRadius: '12px', minHeight: 300 }}
                title="Яндекс.Карта автосервиса DELTA MOTORS"
              />
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact; 