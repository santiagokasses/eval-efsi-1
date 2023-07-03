import { useState, useEffect } from "react";

const ComponenteInsano = () => {
    const [texto, setTexto] = useState("")
    const [contador, setContador] = useState(0)

    const handleChange = (e) => {
        setTexto(e.target.value)
    }
    useEffect(() => {
        setContador(contador + 1)
    }, [texto])

    return (
        <>
        <input onChange={handleChange} />
        <p>Texto: {texto}</p>
        <p>Contador:{contador}</p>
        </>
    )
}
export default ComponenteInsano