


export const cards = [{ shop: "Tesco", number: ["9794025000966159"] }, { shop: "Nectar", number: ["29923638967016"] }]

export type Card = Readonly<{
    shop: string, number: readonly string[]
}>
