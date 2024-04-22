# Notas importantes

crear types con zod

```
import { z } from "zod";

export const CurrencySchema = z.object({
    code: z.string(),
    name: z.string()
})


-----------
import { CurrencySchema } from "../schemas/crypto-schema";
import { z } from "zod";


export type Currency = z.infer<typeof CurrencySchema>
------------


import { Currency } from "../types";

export const currencies: Currency[] = [
    { code: 'USD', name: 'Dolar de Estados Unidos' },
    { code: 'MXN', name: 'Peso Mexicano' },
    { code: 'EUR', name: 'Euro' },
    { code: 'GBP', name: 'Libra Esterlina' },
]
```
