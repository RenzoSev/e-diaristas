import React from 'react';
import { SafeEnvironmentContainer } from './styles';
import { Container } from '@material-ui/core';

const SafeEnvironment = () => {
  return (
    <SafeEnvironmentContainer>
      <Container>
        Ambiente seguro <i className={'twf-lock'} />
      </Container>
    </SafeEnvironmentContainer>
  )
};

export default SafeEnvironment;