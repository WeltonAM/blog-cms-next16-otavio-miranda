import { cn } from "@/utils/cn";
import Link from "next/link";

export default function Header() {
    return (
        <header
            className={cn(
                "text-4xl sm:text-5xl/normal lg:text-7xl/normal font-extrabold",
            )}
        >
            <Link
                href="/"
            >
                The Blog
            </Link>
        </header>
    );
}