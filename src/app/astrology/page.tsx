import { Metadata } from "next";
import AstrologyItems from "@/components/AstrologyItems/AstrologyItems";

export const metadata: Metadata = {
    title: 'Testarot - Astrology',
    description: 'Discover daily, weekly, and monthly horoscopes, zodiac sign insights, and personalized astrological readings on our Astrology page. Unlock the secrets of the stars and your future today!',
    keywords: "astrology, horoscopes, zodiac signs, astrological readings, daily horoscope, weekly horoscope, monthly horoscope, astrology insights, personalized astrology"
}

export default function Astrology() {
    return <AstrologyItems />
}