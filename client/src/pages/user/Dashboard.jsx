import { Route, Routes } from "react-router-dom";
import UserMenu from "./UserMenu";
import SeoMetadata from "../../SEO/seoMetadata";
import UserProfile from "../UserProfile";
import AddressComponent from "../AddressComponent";
import PanCardComponent from "../PanCardComponent";
import Orders from "./Orders";
import Wishlist from "./Wishlist";
import Deactivate from "../Auth/Deactivate";
import Reviews from "./Reviews";
import PaymentCards from "./PaymentCards";

const Dashboard = () => {
    return (
        <>
            <SeoMetadata title="User Dashboard" />
            <div className="px-[50px] py-[5px]">
                <div className="flex text-[14px] mx-[50px] my-[40px] gap-6">
                    <div className="min-w-[30%]">
                        <UserMenu />
                    </div>
                    <div className="w-[70%] bg-white shadow-md rounded-sm">
                        <Routes>
                            <Route path="" element={<UserProfile />} />
                            <Route path="profile" element={<UserProfile />} />
                            <Route
                                path="address"
                                element={<AddressComponent />}
                            />
                            <Route path="pan" element={<PanCardComponent />} />

                            <Route path="orders" element={<Orders />} />
                            <Route path="wishlist" element={<Wishlist />} />
                            <Route
                                path="payment-cards"
                                element={<PaymentCards />}
                            />
                            <Route path="user-review" element={<Reviews />} />
                            <Route path="deactivate" element={<Deactivate />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;
