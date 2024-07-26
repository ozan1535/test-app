import Image from "next/image";

export default function ZodiacCharacteristicModal({ zodiacSign }) {
    return <div className="p-10 flex flex-col">
        <Image height={150} width={150} alt={zodiacSign.name} src={zodiacSign.mediaLink} className="self-center" />
        <br />
        <b className="self-center">{zodiacSign.name}</b> <br /> <br />
        <p>Element: {zodiacSign.element}</p> <br />
        <p>Quality: {zodiacSign.quality}</p> <br />
        <p>Traits: {zodiacSign.traits}</p>
        <br />
        <p>{zodiacSign.description}</p>
    </div>
}