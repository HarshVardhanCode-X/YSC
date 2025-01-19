import SyncLoader from "react-spinners/SyncLoader";
import "./loader.css";

const MainLoader = () => {

    const override = {
        display: "block",
        borderColor: "text-indigo-500",
    };

    return (
        <>
            <div className="h-full w-full flex items-center justify-center">
                <div className="in_screen_loader">
                    <SyncLoader
                        color="text-indigo-500"
                        cssOverride={override}
                        size={15}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                    />
                </div>
            </div>
        </>
    );
};

export default MainLoader;
