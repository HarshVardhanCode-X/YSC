import { useNavigate } from "react-router-dom";

const NotFound = () => {

    const navigate = useNavigate();

    return (
        <div className="vh100">
            <div className="h-100 d-flex align-items-center justify-content-around">
                <div>
                    <div className="w-100 h-100 overflow-hidden side_image">
                        <img src="./images/notFound.png" className="img-fluid" width={350} />
                    </div>
                </div>

                <div className="bg-white rounded_right">
                    <div className="d-flex align-items-center justify-content-between h-100 position-relative">
                        <div className="login_form m-auto d-flex align-items-center flex-column gap-3">
                            <div>
                                <h2>We seem you have lost</h2>
                                <h4>Or the page you're trying to access does not exist</h4>
                            </div>
                            <button onClick={() => navigate(-1)}>Go Back</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
