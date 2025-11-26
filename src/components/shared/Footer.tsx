import { cn } from "@/utils/cn";
import Link from "next/link";

export default function Footer() {
    return (
        <footer
            className={cn(
                "flex flex-col justify-center items-center gap-1",
                "pt-4",
                "text-xs border-t",
                "text-zinc-500 dark:text-zinc-400",
                "border-slate-200 dark:border-slate-700",
            )}
        >
            <span className="select-none">The Blog ©</span>
            <span className="select-none">
                Developed with ❤️ by {" "}
                <Link
                    target="_blank"
                    href="https://welton-matos-dev-portfolio.vercel.app/"
                    className="hover:text-teal-500"
                >
                    WeltonMatosDev
                </Link>
            </span>
            <span className="italic selection:bg-teal-500 selection:text-black">Soli Deo Gloria</span>
        </footer>
    );
}