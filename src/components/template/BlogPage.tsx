import { cn } from "@/utils/cn";
import Header from "../shared/Header";
import Footer from "../shared/Footer";

export interface PageProps {
    children: React.ReactNode;
}

export default function BlogPage({ children }: PageProps) {
    return (
        <div
            className={cn(
                "text-slate-900 bg-slate-100",
                "dark:text-slate-100 dark:bg-slate-900"
            )}
        >
            <div
                className={cn(
                    "flex flex-col min-h-screen mx-auto",
                    "w-full max-w-5xl",
                    "py-4",
                    "px-4 sm:px-6 lg:px-8",
                )}
            >
                <Header />

                <main className="flex flex-col justify-center items-center flex-1 py-6">
                    {children}
                </main>

                <Footer />
            </div>
        </div>
    );
};