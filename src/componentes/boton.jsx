import { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';

const ComponenteInsano = () => {
    const [contador, setContador] = useState(0)

    const handleChange = (e) => {
        setContador(contador + 1)
    }

    return (
        <>
        <Button onClick={handleChange}></Button>
        <p>Contador:{contador}</p>
        </>
    )
}
export default ComponenteInsano