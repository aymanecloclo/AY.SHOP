import React, { useState } from "react";
import Register_bg from "../assets/images/Register_bg.png";
import png_file_icon from "../assets/images/png_file_icon.png";
import Button from "../shared/Button";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    profileImage: null,
  });
  const [errors, setErrors] = useState({});

  // Fonction pour gérer les changements d'entrée
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Gestion de l'image
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({ ...prev, profileImage: file }));
    }
  };

  // Validation du formulaire
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email.";
    if (!formData.password) newErrors.password = "Password is required.";
    else if (formData.password.length < 8) newErrors.password = "Password must be at least 8 characters long.";
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
    }
    if (!formData.profileImage) newErrors.profileImage = "Profile image is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Soumission du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      toast.error("Please correct the errors in the form");
      return;
    }

    const data = new FormData();
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("password", formData.password);
    data.append("profileImage", formData.profileImage);

    try {
      // Remplacez l'URL ci-dessous par celle de votre backend
      await axios.post("/register", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      toast.success("Registration successful");
    } catch (error) {
      toast.error("An error occurred during registration");
    }
  };

  return (
    <div className="font-[sans-serif] bg-white md:h-screen">
      <div className="grid md:grid-cols-2 items-center gap-8 h-full">
        {/* Image Section */}
        <div className="max-md:order-1 p-4 h-full order-2">
          <img
            src={Register_bg}
            className="lg:max-w-[80%] w-full h-full object-contain block mx-auto"
            alt="Register Background"
          />
        </div>

        {/* Form Section */}
        <div className="flex items-center p-6 h-full order-6">
          <form className="max-w-lg w-full mx-auto" onSubmit={handleSubmit}>
            <h3 className="text-blue-600 md:text-3xl text-2xl font-extrabold mb-12 max-md:text-center">
              Create an account
            </h3>
      
            {/* Name Field */}
            <div className="mb-6">
              <label className="text-gray-800 text-xs block mb-2">Full Name</label>
              <input
                name="name"
                type="text"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full bg-transparent text-sm border-b border-gray-300 focus:border-blue-500 px-2 py-3 outline-none"
                placeholder="Enter name"
              />
              {errors.name && <span className="text-red-500">{errors.name}</span>}
            </div>

            {/* Email Field */}
            <div className="mb-6">
              <label className="text-gray-800 text-xs block mb-2">Email</label>
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full bg-transparent text-sm border-b border-gray-300 focus:border-blue-500 px-2 py-3 outline-none"
                placeholder="Enter email"
              />
              {errors.email && <span className="text-red-500">{errors.email}</span>}
            </div>

            {/* Password Field */}
            <div className="mb-6">
              <label className="text-gray-800 text-xs block mb-2">Password</label>
              <input
                name="password"
                type="password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full bg-transparent text-sm border-b border-gray-300 focus:border-blue-500 px-2 py-3 outline-none"
                placeholder="Enter password"
              />
              {errors.password && <span className="text-red-500">{errors.password}</span>}
            </div>

            {/* Confirm Password Field */}
            <div className="mb-6">
              <label className="text-gray-800 text-xs block mb-2">Password Confirmation</label>
              <input
                name="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                className="w-full bg-transparent text-sm border-b border-gray-300 focus:border-blue-500 px-2 py-3 outline-none"
                placeholder="Confirm password"
              />
              {errors.confirmPassword && <span className="text-red-500">{errors.confirmPassword}</span>}
            </div>

          
 <div className="mb-6 flex flex-col items-center ">
              <label className="text-gray-800 text-xs block mb-2">Upload your photo</label>
              <div className="p-3 drop-shadow-2xl bg-gradient-to-bl  to-indigo-600 md:w-48 md:h-48 h-32 w-32 aspect-square rounded-full relative border-2 border-blue-500 bg-gray-50 flex justify-center items-center shadow-lg overflow-hidden">
                {formData.profileImage ? (
                  <img
                    src={URL.createObjectURL(formData.profileImage)}
                    alt="Preview"
                    className="h-full w-full object-cover rounded-lg"
                  />
                ) : (
                  <div className="text-gray-500 text-center">
                    <img src={png_file_icon} alt="File Icon" className="mx-auto w-12 mb-2" />
                    Drag & drop your file or click to upload
                  </div>
                )}
                <input
                  type="file"
                  className="absolute inset-0 opacity-0 cursor-pointer"
                  onChange={handleImageChange}
                />
              </div>
              {errors.profileImage && <span className="text-red-500">{errors.profileImage}</span>}
            </div>
            <button onClick={(e)=>handleSubmit(e)} type="button" className="w-full py-3 px-6 text-sm tracking-wider font-semibold rounded-md bg-blue-600 hover:bg-blue-700 text-white focus:outline-none">
                Creat an account
              </button>
          </form>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default Register;
