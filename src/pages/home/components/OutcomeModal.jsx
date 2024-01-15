import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Select,
  NumberInputField,
  NumberInput,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper
} from '@chakra-ui/react';

export function OutcomeModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>

    <div className="fixed bottom-10 right-10 flex items-center justify-center">
      {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full flex items-center justify-center" onClick={onOpen}>
      Agregar Gasto
      </button> */}
      <Button colorScheme='blue' onClick={onOpen} size="lg" rounded="full" fontSize="xl">Agregar gasto</Button>
    </div>

<Modal isOpen={isOpen} onClose={onClose}>
<ModalOverlay />
<ModalContent>
  <ModalHeader>Agregar nuevo gasto</ModalHeader>
  <ModalCloseButton />
  <ModalBody>
    <FormControl>
      <FormLabel>Gasto</FormLabel>
      <Input type='text' />
      <FormHelperText>We'll never share your email.</FormHelperText>
      </FormControl>
      <br />
      <FormControl>
      <FormLabel>Categoría</FormLabel>
      <Select placeholder='Seleccione una categoría'>
        <option>United Arab Emirates</option>
        <option>Nigeria</option>
      </Select>
      </FormControl>
      <br />
      <FormControl>
      <FormLabel>Método de pago</FormLabel>
      <Select placeholder='Seleccione una forma de pago'>
        <option>Efectivo</option>
        <option>Tarjeta Débito</option>
        <option>Tarjeta Crédito</option>
      </Select>
      </FormControl>
      <br />
      <FormControl isRequired>
      <FormLabel>Costo</FormLabel>
        <NumberInput max={1000000000} min={50}>
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </FormControl>
  </ModalBody>

  <ModalFooter>
    <Button colorScheme='blue' mr={3} onClick={onClose}>
      Guardar
    </Button>
    <Button variant='ghost' onClick={onClose}>Cancelar</Button>
  </ModalFooter>
</ModalContent>
</Modal>
</>
    )
};