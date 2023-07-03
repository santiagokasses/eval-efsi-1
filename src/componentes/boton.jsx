import { useState} from "react";
import { Button } from 'react-bootstrap';

const Boton = () => {
    const [contador, setContador] = useState(0)

    const handleChange = (e) => {
        setContador(contador + 1)
    }

    return (
        <>
        <Button  variant="primary" onClick={handleChange}> boton</Button>
        <p>Contador:{contador}</p>
        </>
    )
}
export default Boton