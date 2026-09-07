import Image from "next/image";
import { cn } from "@/lib/utils";

interface ReviewCardProps {
    className?: string;
}

export default function ReviewCard({ className }: ReviewCardProps){

    return (

        <div className={cn("bg-white rounded-xl p-[3px] flex flex-col gap-[3px]", className)}>

            <div className="text-center text-md text-muted-foreground bg-background rounded-lg px-[40px] py-[65px]">Das Team hat unsere Annahmen hinterfragt, die Story vereinfacht und eine modulare Website geliefert, die unser Marketing wirklich selbst pflegen kann. Performance, Barrierefreiheit, Analytics – nichts davon war ein nachträglicher Gedanke.</div>

            <div className="bg-background rounded-lg flex flex-col items-center gap-2 pb-6">
                <div className="bg-white rounded-xl p-4 -mt-8 mb-3">
                    <Image 
                        src="/images/logo.svg"
                        alt=""
                        width={40}
                        height={40}
                        className="w-10 h-10 object-cover"
                    />
                </div>
                <div className="font-mono uppercase text-xl">Alex Chen</div>
                <div className="font-mono uppercase text-sm bg-white py-1 px-2 rounded-lg">Gründer, Nova AI</div>
            </div>

        </div>

    );

}
