import { z } from "zod"

const currency = z.object({
    code: z.string(),
    sort_order: z.number(),
    ticker: z.string(),
    type: z.string(),
    decimals_places: z.number(),
    icon: z.string()
})

type Currency = z.infer<typeof currency>

export {
    currency,
}

export type {
    Currency
}