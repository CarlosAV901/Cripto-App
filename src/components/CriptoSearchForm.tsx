import { currencies } from "../data"

export default function CriptoSearchForm() {
    return (
        <form className="form">
            <div className="field">
                <label htmlFor="" className="currency">Moneda: </label>
                <select
                    name="currency"
                    id="currency">

                    <option value="">---Selecciones---</option>
                    {currencies.map(currency => (
                        <option value={currency.code} key={currency.code}>
                            {currency.name}
                        </option>
                    ))}
                </select>
            </div>

            <div className="field">
                <label htmlFor="" className="criptocurrency">Criptomoneda: </label>
                <select
                    name="criptocurrency"
                    id="criptocurrency">

                    <option value="">---Selecciones---</option>

                </select>
            </div>

            <input type="submit" value={'Cotizar'} />
        </form>
    )
}
