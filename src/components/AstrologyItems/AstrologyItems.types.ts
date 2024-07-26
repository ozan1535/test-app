export interface ITarotCard {
    type: string,
    name_short: string,
    name: string,
    value: string,
    value_int: number,
    meaning_up: string,
    meaning_rev: string,
    desc: string,
    suit?: string
}

export interface IZodiacSign {
    name: string,
    date: string,
    mediaLink: string,
    element: string,
    quality: string,
    traits: string,
    description: string
}