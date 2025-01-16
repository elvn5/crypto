import { z } from "zod";

const change = z.object({
    direction: z.string(),
    percent: z.string(),
    amount: z.string(),
})

const price = z.object({
    last: z.string(),
    bestBid: z.string(),
    bestOffer: z.string(),
    change: change
})

const pair = z.object({
    primary: z.string(),
    secondary: z.string(),
})

const volume = z.object({
    primary: z.string(),
    secondary: z.string(),
})

const priceHistory = z.array(z.string())

const marketData =  z.object({
    pair: pair,
    price: price,
    volume: volume,
    priceHistory: priceHistory,
})

export {
    marketData
}

type MarketData = z.infer<typeof marketData>
type Change = z.infer<typeof change>
type Price = z.infer<typeof price>
type Pair = z.infer<typeof pair>
type Volume = z.infer<typeof volume>
type PriceHistory = z.infer<typeof priceHistory>

export type {
    MarketData,
    Change,
    Price,
    Pair,
    Volume,
    PriceHistory
}
