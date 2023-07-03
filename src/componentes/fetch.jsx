import { useState, useEffect } from "react";

const Fetch = () => {
    const [Moneda, setMoneda] = useState([{
        name: null,
        currency: null,
    }])

    useEffect(() => {
        const obrenerMoneda = async () => {
            try {
                const res = await fetch("https://countriesnow.space/api/v0.1/countries/currency")
                const data = await res.json()
                const updatedMoneda = data.data.map(e => ({
                    name: e.name,
                    currency: e.currency
                }))
                setMoneda(updatedMoneda)
            } catch (error) {
                console.error(error)
            }
        }
        obrenerMoneda()
    }, [])

    return (
        <>
            {Moneda && Moneda.map((moneda, i) => (
                <div key={i}>
                    <div>
                        <div class="col">Nombre: {moneda.name}, Moneda: {moneda.currency}</div>
                    </div>
                </div>
            ))}
        </>
    )
}
export default Fetch