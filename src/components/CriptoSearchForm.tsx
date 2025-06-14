import { useState } from "react"
import { currencies } from "../data"
import { useCryptoStore } from "../store"
import { Pair } from "../types"
import ErrorMessage from "./ErrorMessage"

export default function CriptoSearchForm() {
    const cryptocurrencies = useCryptoStore(state => state.cryptocurrencies)
    const fetchData = useCryptoStore(state => state.fetchData)

    const [pair, setPair] = useState<Pair>({
        currency: '',
        cryptocurrency: ''
    })

    const [error, setError] = useState('')

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setPair({
            ...pair,
            [e.target.name]: e.target.value
        })

    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (Object.values(pair).includes('')) {
            setError('Todos los campos son obligatorios')
            return
        }
        setError('')

        fetchData(pair)
    }

    return (
        <form
            className="form"
            onSubmit={handleSubmit}
        >
            {error && <ErrorMessage>{error}</ErrorMessage>}
            <div className="field">
                <label htmlFor="" className="currency">Moneda: </label>
                <select
                    name="currency"
                    id="currency"
                    onChange={handleChange}
                    value={pair.currency}
                >

                    <option value="">---Selecciones---</option>
                    {currencies.map(currency => (
                        <option value={currency.code} key={currency.code}>
                            {currency.name}
                        </option>
                    ))}
                </select>
            </div>

            <div className="field">
                <label htmlFor="" className="cryptocurrency">Criptomoneda: </label>
                <select
                    name="cryptocurrency"
                    id="cryptocurrency"
                    onChange={handleChange}
                    value={pair.cryptocurrency}
                >

                    <option value="">---Selecciones---</option>

                    {cryptocurrencies.map(crypto => (
                        <option
                            value={crypto.CoinInfo.Name}
                            key={crypto.CoinInfo.Name}
                        >
                            {crypto.CoinInfo.FullName}
                        </option>
                    ))}

                </select>
            </div>

            <input type="submit" value={'Cotizar'} />
        </form>
    )
}
