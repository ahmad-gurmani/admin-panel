import { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";

import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils"
import InputForm from "../input-form/input-form.component";

import Spinner from "../spinner/spinner.component";

const defaultFormField = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
}

const SignUpForm = () => {
    const navigate = useNavigate();
    const [spinner, setSpinner] = useState(false);
    // const [isLoading, setIsLoading] = useState(true);


    //     function upload() {
    //         setSpinner(true);

    //         //some async process
    //         fetch('my/API/Endpoint'), {
    //             method: 'post', .0
    //  body: body,
    //         }).then(function (data) {
    //             setSpinner(false);
    //         };
    //     }

    const [formFields, setFormFields] = useState(defaultFormField);
    const { displayName, email, password, confirmPassword } = formFields;

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert("password do not match");
            return;
        }
        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password);

            if (user.uid) {
                await createUserDocumentFromAuth(user, { displayName });
                resetFromfield();
                navigate("/");
            } if (!user.uid) {
                <Spinner />
            }

        } catch (error) {

            if (error.code === "auth/email-already-in-use") {
                alert("can't create a user, email already in use")
            } else if (error.code === "auth/weak-password") {
                alert("Password should be at least 6 characters")
            } else {
                console.log("Error", error.message);
            }
        }
    }

    const resetFromfield = () => {
        setFormFields(defaultFormField);
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    }

    return (
        <Fragment>
            <div className="h-screen w-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8 bg-gradient-to-r from-pink-500  to-amber-500">
                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                        <div className="sm:mx-auto sm:w-full sm:max-w-md mb-3">
                            <h2 className="text-center text-3xl font-bold text-gray-900">Sign up</h2>
                        </div>
                        <form onSubmit={handleSubmit} className="space-y-6" >
                            <InputForm
                                label="Display Name"
                                inputOptions={{
                                    id: "displayName",
                                    name: "displayName",
                                    type: "text",
                                    autoComplete: "displayName",
                                    required: true,
                                    onChange: handleChange,
                                    value: displayName,
                                }}
                            />
                            <InputForm
                                label="Email"
                                inputOptions={{
                                    id: "email",
                                    name: "email",
                                    type: "email",
                                    autoComplete: "email",
                                    required: true,
                                    onChange: handleChange,
                                    value: email,
                                }}
                            />
                            <InputForm
                                label="Password"
                                inputOptions={{
                                    id: "password",
                                    name: "password",
                                    type: "password",
                                    autoComplete: "password",
                                    required: true,
                                    onChange: handleChange,
                                    value: password,
                                }}
                            />
                            <InputForm
                                label="Confirm Password"
                                inputOptions={{
                                    id: "confirmpassword",
                                    name: "confirmPassword",
                                    type: "password",
                                    autoComplete: "confirm-password",
                                    required: true,
                                    onChange: handleChange,
                                    value: confirmPassword,
                                }}
                            />
                            <div>
                                <button className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-orange-500 to-amber-500 hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500">Sign up</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default SignUpForm;