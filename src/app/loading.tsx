import LoadingComponent from "@/components/shared/LoadingComponent";
import { cn } from "@/utils/cn";

export default function LoadingPage() {
    return (
        <div
            className={cn(
                "fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-md z-50",
            )}
        >
            <LoadingComponent />
        </div>
    );
}
