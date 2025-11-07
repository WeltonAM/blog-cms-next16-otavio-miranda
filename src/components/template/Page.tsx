import { cn } from "@/utils/cn";

export interface PageProps {
    children: React.ReactNode;
}

export default function Page({ children }: PageProps) {
    return (
        <div
            className={cn(
                "flex flex-col justify-between items-center min-h-screen"
            )}
        >
            <header>Header</header>

            <main className="flex flex-col justify-center items-center flex-1">
                {children}
            </main>

            <footer>Footer</footer>
        </div>
    );
};