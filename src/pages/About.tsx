import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  Avatar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import styled from 'styled-components';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import BuildIcon from '@mui/icons-material/Build';
import PeopleIcon from '@mui/icons-material/People';
import SecurityIcon from '@mui/icons-material/Security';

const TeamMemberCard = styled(Card)`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px;
`;

const AchievementCard = styled(Card)`
  height: 100%;
  background: linear-gradient(45deg, #1976d2 30%, #42a5f5 90%);
  color: white;
`;

const teamMembers = [
  {
    name: 'Иван Петров',
    position: 'Главный механик',
    experience: '15 лет опыта',
    avatar: '/images/team/mechanic1.jpg',
  },
  {
    name: 'Алексей Сидоров',
    position: 'Специалист по диагностике',
    experience: '10 лет опыта',
    avatar: '/images/team/mechanic2.jpg',
  },
  {
    name: 'Дмитрий Иванов',
    position: 'Мастер по кузовному ремонту',
    experience: '12 лет опыта',
    avatar: '/images/team/mechanic3.jpg',
  },
];

const achievements = [
  {
    title: 'Более 10 000',
    description: 'Успешно отремонтированных автомобилей',
    icon: <BuildIcon sx={{ fontSize: 40 }} />,
  },
  {
    title: 'Команда профессионалов',
    description: 'Опытные специалисты с многолетним стажем',
    icon: <PeopleIcon sx={{ fontSize: 40 }} />,
  },
  {
    title: 'Гарантия качества',
    description: 'Гарантия на все виды работ',
    icon: <SecurityIcon sx={{ fontSize: 40 }} />,
  },
  {
    title: 'Признание',
    description: 'Лучший автосервис 2023 года',
    icon: <EmojiEventsIcon sx={{ fontSize: 40 }} />,
  },
];

const About: React.FC = () => {
  return (
    <Box>
      <Box bgcolor="primary.main" color="white" py={6}>
        <Container>
          <Typography variant="h3" component="h1" textAlign="center" gutterBottom>
            О компании
          </Typography>
          <Typography variant="h6" textAlign="center">
            Профессиональный автосервис с 2010 года
          </Typography>
        </Container>
      </Box>

      <Container sx={{ py: 8 }}>
        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" gutterBottom>
              Наша история
            </Typography>
            <Typography variant="body1" paragraph>
              DELTA MOTORS - это современный автосервис, основанный в 2010 году группой
              профессиональных автомехаников с многолетним опытом работы. За время
              существования компании мы выросли из небольшой мастерской в полноценный
              автосервисный центр, оснащенный самым современным оборудованием.
            </Typography>
            <Typography variant="body1" paragraph>
              Мы гордимся тем, что за эти годы помогли тысячам автовладельцев
              решить проблемы с их автомобилями, завоевав доверие и репутацию
              надежного партнера в сфере автосервиса.
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="h4" gutterBottom>
              Наши преимущества
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon>
                  <BuildIcon color="primary" />
                </ListItemIcon>
                <ListItemText
                  primary="Современное оборудование"
                  secondary="Используем новейшие диагностические и ремонтные системы"
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <PeopleIcon color="primary" />
                </ListItemIcon>
                <ListItemText
                  primary="Опытные специалисты"
                  secondary="Команда профессионалов с многолетним опытом"
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <SecurityIcon color="primary" />
                </ListItemIcon>
                <ListItemText
                  primary="Гарантия качества"
                  secondary="Предоставляем гарантию на все виды работ"
                />
              </ListItem>
            </List>
          </Grid>
        </Grid>

        <Box mt={8}>
          <Typography variant="h4" textAlign="center" gutterBottom>
            Наша команда
          </Typography>
          <Grid container spacing={4} sx={{ mt: 2 }}>
            {teamMembers.map((member) => (
              <Grid item key={member.name} xs={12} md={4}>
                <TeamMemberCard>
                  <Avatar
                    src={member.avatar}
                    alt={member.name}
                    sx={{ width: 150, height: 150, mb: 2 }}
                  />
                  <Typography variant="h6" gutterBottom>
                    {member.name}
                  </Typography>
                  <Typography variant="subtitle1" color="primary" gutterBottom>
                    {member.position}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {member.experience}
                  </Typography>
                </TeamMemberCard>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Box mt={8}>
          <Typography variant="h4" textAlign="center" gutterBottom>
            Наши достижения
          </Typography>
          <Grid container spacing={4} sx={{ mt: 2 }}>
            {achievements.map((achievement) => (
              <Grid item key={achievement.title} xs={12} sm={6} md={3}>
                <AchievementCard>
                  <CardContent sx={{ textAlign: 'center' }}>
                    <Box mb={2}>{achievement.icon}</Box>
                    <Typography variant="h5" gutterBottom>
                      {achievement.title}
                    </Typography>
                    <Typography variant="body1">
                      {achievement.description}
                    </Typography>
                  </CardContent>
                </AchievementCard>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default About; 