import Image from "next/image";
import useSWR from "swr";
import { fetcher } from "@/helpers/helpers";
import { IAstrologyModal } from "./AstrologyModal.types";

export default function AstrologyModal({ zodiacSign, timeRange }: IAstrologyModal) {

    const { data } = useSWR(
        `https://horoscope-app-api.vercel.app/api/v1/get-horoscope/${timeRange}?sign=${zodiacSign.name.toLocaleLowerCase()}`,
        fetcher
    );

    if (!data?.data) {
        return null
    }

    return <div className="p-10 flex flex-col items-center">
        <Image height={150} width={150} alt={zodiacSign.name} src={zodiacSign.mediaLink} />
        <br />
        <b>{zodiacSign.name}</b>
        <p>{data.data?.horoscope_data}</p>
        <br />
        {
            data.data?.challenging_days && <p className="self-start">Challenging days: {data.data.challenging_days}</p>
        }
        <br />
        <p className="self-start text-slate-400">{data.data.date || data.data.week || data.data.month}</p>
    </div>
}