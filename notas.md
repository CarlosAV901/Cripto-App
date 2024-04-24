# Notas importantes

crear types con zod

podemos crear una carpeta de nombre `schemas` donde vamos a crear los tipos de datos que vamos a usar en nuestra aplicación

```
import { z } from "zod";

export const CurrencySchema = z.object({
    code: z.string(),
    name: z.string()
})
```

despues en nuestra carpeta de types debemos de crear el tipo e inferir de el

```
-----------
import { CurrencySchema } from "../schemas/crypto-schema";
import { z } from "zod";


export type Currency = z.infer<typeof CurrencySchema>
------------
```

y por ultimo le asignamos nuestros tipos

```
import { Currency } from "../types";

export const currencies: Currency[] = [
    { code: 'USD', name: 'Dolar de Estados Unidos' },
    { code: 'MXN', name: 'Peso Mexicano' },
    { code: 'EUR', name: 'Euro' },
    { code: 'GBP', name: 'Libra Esterlina' },
]
```
