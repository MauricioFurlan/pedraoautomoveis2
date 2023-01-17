import Routes from './routes';

import { useQuery } from "graphql-hooks";
import { Loading } from './components/Loading';

const HOMEPAGE_QUERY = `
query Veiculo {
  allVeiculos {
    id
    nomeCarro
    opcionaisDoVeiculo
    obs
    preco
    finalPlaca
    descricao {
      anoModelo
      cambio
      combustivel
      cor
      km
      marca
      modelo
      versao
    }
    destaque {
      url
    }
    fotos {
      url
    }
  }
}
`;


function App() {
  const { loading, error, data } = useQuery(HOMEPAGE_QUERY, {
    variables: {
      limit: 10
    }
  });
  console.log('daataa', data?.allVeiculos)

  return (
    <>
    {
     !loading !== false ? (<Routes cars={data.allVeiculos}/>) : <Loading/>
    }
    </>
  );
}

export default App;
