


export const cards = [{ shop: "Tesco", number: ["abc"] }, { shop: "Nectar", number: ["123"] }]

export type Card = Readonly<{
    shop: string, number: readonly string[]
}>
