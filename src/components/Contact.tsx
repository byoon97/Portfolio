import React from "react";
import { IoIosPhonePortrait } from "react-icons/io";
import { AiOutlineMail } from "react-icons/ai";
import { IoPinOutline } from "react-icons/io5";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function Contact() {
  const { register, handleSubmit, reset } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const { name, email, subject, message } = data;

    const mailtoLink = `mailto:byoon5397@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    )}`;

    window.location.href = mailtoLink;

    reset();
  };

  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-[#87C233] text-2xl">
        Contact Me
      </h3>

      <div className="flex flex-col space-y-10 text-sm mt-14">
        <div className="space-y-10 w-full flex items-start flex-col">
          <div className="flex items-center space-x-5 justify-center">
            <IoIosPhonePortrait className="text-[#87C233] h-6 w-6 animate-pulse" />
            <p className="text-[14px]">(917) 865-6604</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <AiOutlineMail className="text-[#87C233] h-6 w-6 animate-pulse" />
            <p className="text-[14px]">byoon5397@gmail.com</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <IoPinOutline className="text-[#87C233] h-6 w-6 animate-pulse" />
            <p className="text-[14px]">New York City</p>
          </div>
          {/* form */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col space-y-2 w-fit mx-auto"
          >
            <div className="flex space-x-2">
              <input
                {...register("name")}
                className="outline-none bg-slate-400/10 rounded-sm border-b px-6 py-4 border-[#242424] text-gray-500 placeholder-gray-500 transition-all focus:border-[#87C233]/40 focus:text-[#87C233]/40 hover:border-[#87C233]/40 "
                placeholder="Name"
                type="text"
                required
              />
              <input
                {...register("email")}
                className="outline-none bg-slate-400/10 rounded-sm border-b px-6 py-4 border-[#242424] text-gray-500 placeholder-gray-500 transition-all focus:border-[#87C233]/40 focus:text-[#87C233]/40 hover:border-[#87C233]/40 "
                placeholder="Email"
                type="email"
                required
              />
            </div>

            <input
              {...register("subject")}
              className="outline-none bg-slate-400/10 rounded-sm border-b px-6 py-4 border-[#242424] text-gray-500 placeholder-gray-500 transition-all focus:border-[#87C233]/40 focus:text-[#87C233]/40 hover:border-[#87C233]/40 "
              placeholder="Subject"
              type="text"
              required
            />

            <textarea
              {...register("message")}
              className="outline-none bg-slate-400/10 rounded-sm border-b px-6 py-4 border-[#242424] text-gray-500 placeholder-gray-500 transition-all focus:border-[#87C233]/40 focus:text-[#87C233]/40 hover:border-[#87C233]/40 "
              placeholder="Message"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-[#87C233] py-3 px-10 rounded-md text-black font-bold text-lg"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

