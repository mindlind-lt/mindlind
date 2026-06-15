import Image from "next/image";
import { cn } from "@/lib/utils";

interface ReviewCardProps {
    className?: string;
}

export default function ReviewCard({ className }: ReviewCardProps){

    return (

        <div className={cn("bg-white rounded-xl p-[3px] flex flex-col gap-[3px]", className)}>

            <div className="text-center text-md text-muted-foreground bg-background rounded-lg px-[40px] py-[65px]">The team challenged our assumptions, simplified the story, and shipped a modular site our marketers can actually edit. Performance, accessibility, analytics – nothing was an afterthought. I like team.</div>

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
                <div className="font-mono uppercase text-sm bg-white py-1 px-2 rounded-lg">Founder, Nova AI</div>
            </div>

        </div>

    );

}
