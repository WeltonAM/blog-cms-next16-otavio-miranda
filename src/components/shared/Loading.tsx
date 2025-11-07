import { SpinLoader } from "./SpinLoader";

export default function Loading() {
    return (
        <div className="flex flex-col justify-center items-center gap-1">
            <SpinLoader />
            <span>Loading...</span>
        </div>
    );
}