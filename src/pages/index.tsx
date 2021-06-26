import {
  Button,
  Typography,
  Container,
  CircularProgress,
} from '@material-ui/core';

import SafeEnvironment from 'ui/components/feedback/SafeEnvironment';
import PageTitle from 'ui/components/data-display/PageTitle';
import UserInformation from 'ui/components/data-display/UserInformation';
import TextFieldMask from 'ui/components/inputs/TextFieldMask';
import {
  FormElementsContainer,
  ProfissionaisPaper,
  ProfissionaisContainer,
} from 'ui/styles/pages/index.styles';
import useIndex from 'data/hooks/pages/useIndex.page';

export default function Home() {
  const {
    cep,
    setCep,
    cepValido,
    buscarProfissionais,
    erro,
    diaristas,
    buscaFeita,
    carregando,
    diaristasRestantes,
  } = useIndex();

  return (
    <div>
      <SafeEnvironment />
      <PageTitle
        title={'Conheça os profissionais'}
        subtitle={
          'Preencha o seu endereço e veja os profissionais da sua localidade'
        }
      />
      <Container>
        <FormElementsContainer>
          <TextFieldMask
            mask="99.999-999"
            label="Digite seu CEP"
            fullWidth
            variant="outlined"
            value={cep}
            onChange={(e) => setCep(e.target.value)}
          />

          {erro && <Typography color="error">{erro}</Typography>}

          <Button
            variant="contained"
            color="secondary"
            sx={{ width: '220px' }}
            disabled={!cepValido || carregando}
            onClick={() => buscarProfissionais(cep)}
          >
            {carregando ? <CircularProgress size={20} /> : 'Buscar'}
          </Button>
        </FormElementsContainer>

        {buscaFeita &&
          (diaristas.length > 0 ? (
            <ProfissionaisPaper>
              <ProfissionaisContainer>
                {diaristas.map((item, index) => {
                  return (
                    <UserInformation
                      key={index}
                      name={item.nome_completo}
                      picture={item.foto_usuario}
                      rating={item.reputacao}
                      description={item.cidade}
                    />
                  );
                })}
              </ProfissionaisContainer>

              <Container sx={{ textAlign: 'center' }}>
                {diaristasRestantes > 0 && (
                  <Typography sx={{ mt: 5 }}>
                    ...e mais {diaristasRestantes}{' '}
                    {diaristasRestantes > 1
                      ? 'profissionais atendem'
                      : 'profissional atende'}{' '}
                    na sua região
                  </Typography>
                )}
                <Button variant="contained" color="secondary" sx={{ mt: 5 }}>
                  Contratar um profissional
                </Button>
              </Container>
            </ProfissionaisPaper>
          ) : (
            <Typography align="center" color="textPrimary">
              Ainda não temos nenhuma diarista disponível em sua região
            </Typography>
          ))}
      </Container>
    </div>
  );
}