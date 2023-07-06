import { Fragment, useState } from "react";
import { Link } from "react-router-dom";

import { signInWithGooglePopup, createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";

import InputForm from "../input-form/input-form.component";
import Spinner from "../spinner/spinner.component";

const defaultFormField = {
    email: "",
    password: "",
};

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormField);
    const [spinner, setSpinner] = useState(false);
    const { email, password } = formFields;

    const signInWithGoogle = async () => {
        //when we call something from database we use async function
        const { user } = await signInWithGooglePopup();
        await createUserDocumentFromAuth(user);
    }

    // const navigate = useNavigate();

    const resetFormFields = () => {
        setFormFields(defaultFormField);
    }

    const submitHandler = async (event) => {
        event.preventDefault();

        try {
            const response = await signInAuthUserWithEmailAndPassword(email, password);
            console.log(response);
            resetFormFields();
        } catch (error) {
            switch (error.code) {
                case "auth/wrong-password":
                    alert("invalid password");
                    break;
                case "auth/user-not-found":
                    alert("user not found");
                    break;
                default:
                    console.log(error);
            }
        }

        // navigate('/dashboard');
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    }

    return (
        <Fragment>
            <div className="h-screen w-full flex flex-col justify-center py-12 sm:px-6 lg:px-8 bg-gradient-to-r from-pink-500  to-amber-500">
                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                        <div className="sm:mx-auto sm:w-full sm:max-w-md mb-3">
                            <img
                                className="mx-auto h-12 w-auto"
                                src="https://assets.stickpng.com/thumbs/6102f6007bcc7d000476ae45.png"
                                alt="food-logo" />
                            <h2 className="mt-2 text-center text-3xl font-bold text-gray-900">Sign in to your account</h2>
                        </div>
                        <form className="space-y-6" onSubmit={submitHandler}>
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

                            <div className="w-full flex justify-center py-2  border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-orange-500 to-amber-500 hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500">
                                {!spinner ? <button className="w-full h-full">Sign in</button> : <Spinner />}
                            </div>
                        </form>

                        <div className="mt-6">
                            <div className="relative">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-gray-300" />
                                </div>
                                <div className="relative flex justify-center text-sm">
                                    <span className="px-2 bg-white text-gray-500">Or continue with</span>
                                </div>
                            </div>

                            <div className="mt-6 grid grid-cols-2 gap-3">
                                <div>
                                    <Link to="/signup" className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-blue-500 hover:text-white">
                                        Sign up
                                    </Link>
                                </div>
                                <div>
                                    <button className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-blue-500 hover:text-white" onClick={signInWithGoogle}>
                                        Sign in with google
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default SignInForm;