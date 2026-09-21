import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Loader } from "../components/Loader";
import { User, Mail, Phone, ShieldCheck, LogOut } from "lucide-react"
import api from "../services/api";

export const Profile = () => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const { logout } = useAuth();

    useEffect(() => {
        const fetchProfile = async () => {
            try{
                const response = await api.get("/auth/me")

                setUser(response.data.user);
            }
            catch(error){
                console.log(error);
            }
            finally{
                setLoading(false);
            }
        };

        fetchProfile();
    }, []);

    if(loading){
        return (
            <Loader />
        )
    }

    if(!user){
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p className="text-red-500">Unable to load profile.</p>
            </div>
        )
    }


  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
        <div className="max-w-4xl mx-auto">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-slate-900">
                    My Profile
                </h1>

                <p className="text-gray-500 mt-1">
                    Manage your RentalX account information
                </p>
            </div>

            <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
                <div className="bg-slate-900 p-6 sm:p-8">
                    <div className="flex items-center gap-5">
                        <div className="w-15 h-15 rounded-full bg-orange-500 flex items-center justify-center">
                            <User size={38} className="text-white" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-white">
                                {user.firstName} {user.lastName}
                            </h2>
                            <p className="text-gray-300 mt-1">
                                {user.email}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="p-6 sm:p-8">
                    <h3 className="text-lg font-semibold text-slate-900 mb-6">
                        Account Information
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-orange-50 rounded-xl">
                                <User size={20} className="text-orange-500" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">
                                    Full Name
                                </p>
                                <p className="font-medium text-slate-900 mt-1">
                                    {user.firstName} {user.lastName}
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-orange-50 rounded-xl">
                                <Mail size={20} className="text-orange-500"/>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">
                                    Email Address
                                </p>
                                <p className="font-medium text-slate-900 mt-1 break-all">
                                    {user.email}
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-orange-50 rounded-xl">
                                <Phone size={20} className="text-orange-500"/>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">
                                    Phone Number
                                </p>
                                <p className="font-medium text-slate-900 mt-1">
                                    {user.phone}
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-orange-50 rounded-xl">
                                <ShieldCheck size={20} className="text-orange-500"/>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">
                                    Account Status
                                </p>
                                <p className="font-medium text-green-600 mt-1">
                                    Active
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-gray-100">
                        <button onClick={logout} className="flex items-center gap-2 px-5 py-3 rounded-xl bg-red-100 text-red-600 font-medium hover:bg-red-200 transition cursor-pointer">
                            <LogOut size={18}/>
                            Logout
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
