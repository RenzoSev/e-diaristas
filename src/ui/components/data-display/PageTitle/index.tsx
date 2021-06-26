import React from 'react';
import { 
  PageSubtitleStyled, PageTitleContainer, PageTitleStyled 
} from './styles';

interface PageTitleProps{
  title: string;
  subtitle: string;
}

const PageTitle: React.FC<PageTitleProps > = (props) => {
  const { title, subtitle } = props;
  
  return (
    <PageTitleContainer>
      <PageTitleStyled>
        {title}
      </PageTitleStyled>
      <PageSubtitleStyled>
        {subtitle}
      </PageSubtitleStyled>
    </PageTitleContainer>
  )
}

export default PageTitle;
