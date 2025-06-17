import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: #000000;
    color: #ffffff;
    line-height: 1.6;
  }

  a {
    color: #ff1744;
    text-decoration: none;
    transition: all 0.3s ease;
    &:hover {
      color: #b2102f;
    }
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
    font-family: inherit;
    transition: all 0.3s ease;
  }

  input, textarea {
    font-family: inherit;
    outline: none;
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(255, 255, 255, 0.05);
    color: #ffffff;
    padding: 12px;
    border-radius: 4px;
    transition: all 0.3s ease;
    &:focus {
      border-color: #ff1744;
      box-shadow: 0 0 0 2px rgba(255, 23, 68, 0.2);
    }
    &::placeholder {
      color: rgba(255, 255, 255, 0.5);
    }
  }

  /* Стили для скроллбара */
  ::-webkit-scrollbar {
    width: 8px;
    background: #000000;
  }

  ::-webkit-scrollbar-track {
    background: #111111;
  }

  ::-webkit-scrollbar-thumb {
    background: #ff1744;
    border-radius: 4px;
    &:hover {
      background: #b2102f;
    }
  }

  /* Общие стили для секций */
  section {
    padding: 80px 0;
    position: relative;
  }

  /* Стили для заголовков */
  h1, h2, h3, h4, h5, h6 {
    margin-bottom: 1rem;
    line-height: 1.2;
  }

  /* Стили для параграфов */
  p {
    margin-bottom: 1rem;
  }

  /* Стили для контейнеров */
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }

  /* Стили для кнопок */
  .btn {
    display: inline-block;
    padding: 12px 24px;
    background: #ff1744;
    color: #ffffff;
    border-radius: 4px;
    font-weight: 500;
    text-align: center;
    transition: all 0.3s ease;
    &:hover {
      background: #b2102f;
      transform: translateY(-2px);
      box-shadow: 0 4px 8px rgba(255, 23, 68, 0.3);
    }
  }

  /* Стили для карточек */
  .card {
    background: #111111;
    border-radius: 8px;
    padding: 24px;
    transition: all 0.3s ease;
    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 16px rgba(255, 23, 68, 0.2);
    }
  }
`;

export default GlobalStyle; 