import { Box, Table, Thead, Tr, Th, Tbody, Td } from '@chakra-ui/react';

const TabelaVagas = ({ dadosVagas }) => {
  return (
    <Box>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Nome da Vaga</Th>
            <Th>Descrição da Vaga</Th>
          </Tr>
        </Thead>
        <Tbody>
          {dadosVagas.map((vaga, index) => (
            <Tr key={index}>
              <Td>{vaga.name}</Td>
              <Td>{vaga.email}</Td> 
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default TabelaVagas;