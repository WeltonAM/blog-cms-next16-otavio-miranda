import { cn } from "@/utils/cn";

export interface SpinLoaderProps {
    externalClasses?: string;
    internalClasses?: string;
}

export const SpinLoader = ({ externalClasses = "", internalClasses = "" }: SpinLoaderProps) => {
    return (
        <div className={`${externalClasses} flex items-center justify-center`}>
            <div
                className={cn(
                    "w-10 h-10",
                    "border-5",
                    "border-slate-900 border-t-transparent",
                    "dark:border-slate-100 dark:border-t-transparent",
                    "rounded-full animate-spin",
                    internalClasses
                )}
            ></div>
        </div>
    );
};