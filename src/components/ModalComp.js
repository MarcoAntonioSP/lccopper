import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    Button,
    FormControl,
    FormLabel,
    Input,
    useToast,
  } from "@chakra-ui/react";
  import { useState } from "react";
  
  const ModalComp = ({ isOpen, onClose, data, setData, dataEdit, setDataEdit }) => {
    const [name, setName] = useState(dataEdit.name || "");
    const [email, setEmail] = useState(dataEdit.email || "");
    const toast = useToast();
  
    const handleSave = () => {
      if (!name || !email) {
        toast({
          title: "Erro",
          description: "Preencha todos os campos",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
        return;
      }
  
      if (dataEdit.index !== undefined) {
        const newData = [...data];
        newData[dataEdit.index] = { name, email };
        setData(newData);
        localStorage.setItem("cad_cliente", JSON.stringify(newData));
      } else {
        setData([...data, { name, email }]);
        localStorage.setItem("cad_cliente", JSON.stringify([...data, { name, email }]));
      }
  
      onClose();
      setName("");
      setEmail("");
      setDataEdit({});
    };
  
    return (
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{dataEdit.index !== undefined ? "Editar Cliente" : "Nova Vaga"}</ModalHeader>
          <ModalBody>
            <FormControl>
              <FormLabel htmlFor="name">Nome</FormLabel>
              <Input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel htmlFor="email">Descrição da vaga</FormLabel>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose} mr={3}>
              Cancelar
            </Button>
            <Button colorScheme="blue" onClick={handleSave}>
              Salvar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    );
  };
  
  export default ModalComp;
  