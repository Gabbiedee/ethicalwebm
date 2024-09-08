"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Modal from "../components/Modal";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Button from "../components/Button";
import { FaArrowRightLong } from "react-icons/fa6";

interface formProps {
  email: string;
}

function Page() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<formProps>();

  const [isModal, setIsModal] = useState(false);

  const onSubmit: SubmitHandler<formProps> = (data) => {
    console.log(data);
    setIsModal(true);
    reset();
  };

  const removeModal = () => {
    setIsModal(false);
  };

  return (
    <div className="h-screen bg-gradient-tob3 text-white font-Sarabun font-light">
      <nav className="flex flex-col sm:flex-row justify-between p-5 sm:p-10 mx-5 sm:mx-20">
        <div>
          <h3 className="font-medium text-xl">
            <Link href="/">Ethicalmine</Link>
          </h3>
        </div>
        <div>
          <ul className="flex justify-center sm:justify-start flex-wrap">
            <li className="px-2 text-blue-500">
              <Image src="/simple-icons_x.svg" alt="X" width={15} height={10} />
            </li>
            <li className="px-2">
              <Image
                src="/devicon_linkedin.svg"
                alt="Linkedin"
                width={15}
                height={10}
              />
            </li>
            <li className="px-2">
              <Image src="/bi_medium.svg" alt="Medium" width={15} height={10} />
            </li>
          </ul>
        </div>
      </nav>
      <section className="h-4/5">
        <div className="flex flex-col justify-center items-center text-center h-full">
          <div className="w-full sm:w-3/5 flex flex-col justify-center items-center text-white">
            <p className="text-lg sm:text-base">Coming soon</p>
            <h1 className="bg-gradient-to-r text-4xl sm:text-6xl font-bold bg-clip-text text-transparent my-3">
              Revolutionizing the Mining Industry{" "}
              <span className="text-white">with Blockchain</span>{" "}
            </h1>
            <div className="w-full sm:w-4/5 text-center">
              <p className="tracking-widest text-sm font-light leading-6">
                Our technology ensures that every step of the mining supply chain
                is transparent, ethical, and sustainable.
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center w-full sm:w-3/5 m-5">
            <Button>Watch Video</Button>
            <form className="w-full sm:w-2/4 relative text-center" onSubmit={handleSubmit(onSubmit)}>
              <input
                className="p-3 w-full rounded-md focus:outline-none"
                type="email"
                placeholder="Please enter your email address"
                {...register("email", { required: "Enter valid Email address" })}
              />
              <button
                type="submit"
                className="absolute right-2 top-2 sm:right-5 bg-gradient-tob p-2 rounded-full cursor-pointer"
              >
                <FaArrowRightLong />
              </button>
              {errors.email && (
                <div className="text-red-500 text-xs">{errors.email.message}</div>
              )}
            </form>
          </div>
          <div>
            <p className="text-sm">Notify me when the app is launched</p>
          </div>
        </div>
      </section>
      <footer className="mx-5 sm:mx-20 mb-10 text-center sm:text-left">
        <p className="text-xs sm:text-sm font-thin">
          <span className="text-lg font-bold">800+</span> Partners across African countries
        </p>
      </footer>
      {isModal && <Modal onClick={removeModal} />}
    </div>
  );
}

export default Page;