import React from 'react';
import { FooterStyles, FooterContainer, FooterTitle, AppList } from './styles';
import { Typography, Box } from '@material-ui/core';

const Footer = () => {
  return (
    <FooterStyles>
      <FooterContainer>
        <Box sx={{ maxWidth: '400px' }}>
          <FooterTitle>Quem somos</FooterTitle>
          <Typography variant="body2" sx={{ mt: 2 }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
            voluptatibus nam tempora aspernatur laboriosam voluptate esse natus
            laborum, consequatur, temporibus ratione? Odio eaque deserunt
            voluptatibus libero molestias iure dolorem suscipit?
          </Typography>
        </Box>

        <div>
          <FooterTitle>Baixe nossos aplicativos</FooterTitle>
          <AppList>
            <li>
              <a href="/" target="_blank" rel="noopener noreferrer">
                <img src="/img/logos/app-store.png" alt="App Store" />
              </a>
            </li>
            <li>
              <a href="/" target="_blank" rel="noopener noreferrer">
                <img src="/img/logos/google-play.png" alt="Google Play" />
              </a>
            </li>
          </AppList>
        </div>
      </FooterContainer>
    </FooterStyles>
  );
};

export default Footer;
