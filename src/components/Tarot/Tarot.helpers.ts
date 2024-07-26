import { Dispatch, SetStateAction } from "react"

export const descriptions = ["The first card reveals influences from your past that are affecting your current situation.",
    "The second card provides insight into your present circumstances and challenges.",
    "The third card uncovers hidden factors or influences that are impacting your question or situation.",
    "The fourth card offers guidance and advice on how to proceed or what actions to take.",
    "The fifth card indicates the potential outcome or future developments based on the current path."
]

export const handlePrevious = (counter: number, setCounter: Dispatch<SetStateAction<number>>) => {
    if (counter > 0) {
        setCounter(prev => prev - 1)
    }
}

export const handleNext = (counter: number, setCounter: Dispatch<SetStateAction<number>>) => {
    if (counter < 4) {
        setCounter(prev => prev + 1)
    }
}

export const selectAndUnselectedCard = (cardIndex: number, selectedCards: number[], setSelectedCards: Dispatch<SetStateAction<number[]>>) => {
    if (selectedCards.some(selectedCard => selectedCard === cardIndex)) {
        setSelectedCards(prev => prev.filter(item => item !== cardIndex))
    } else {
        if (selectedCards.length < 5) {
            setSelectedCards(prev => [...prev, cardIndex])
        }
    }
}