"use client";

import React, { useEffect, useState, ChangeEvent, FormEvent } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import "react-phone-input-2/lib/style.css";

const PhoneInput = dynamic(() => import("react-phone-input-2"), { ssr: false });

interface Country {
  name: string;
  iso2: string;
  long: number;
  lat: number;
}

interface State {
  name: string;
}

export default function Infoform() {
  const [hasMounted, setHasMounted] = useState(false);
  const [countries, setCountries] = useState<Country[]>([]);
  const [states, setStates] = useState<State[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const [phone, setPhone] = useState<string>("");

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    fetch("https://countriesnow.space/api/v0.1/countries/positions")
      .then((res) => res.json())
      .then((data) => {
        if (data && data.data) {
          setCountries(data.data);
        }
      })
      .catch(() => {
        console.log("Error fetching countries");
      });
  }, []);

  const oneCountryChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const countryName = e.target.value;
    setSelectedCountry(countryName);
    setStates([]);

    if (countryName) {
      fetch("https://countriesnow.space/api/v0.1/countries/states", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ country: countryName }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data && data.data && data.data.states) {
            setStates(data.data.states);
          }
        })
        .catch(() => {
          console.log("Error fetching states");
        });
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries()) as Record<string, string>;
    data.phone = phone;
    console.log("Form Data:", data);
    alert("Form submitted successfully!");
  };

  if (!hasMounted) return null; // Prevent hydration mismatch

  return (
    <div className="py-4 lg:py-6">
      <div className="lg:bg-[url('https://officebanao.com/wp-content/uploads/2023/09/luxury-working-room-.jpg')] py-4 lg:py-16 bg-cover bg-center">
        <div className="container">
          <div className="lg:flex justify-center">
            <div className="bg-[#032035] md:w-[65%] w-full text-white rounded-xl px-4 py-8 lg:p-14">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-5xl font-normal">
                  Get Started with{" "}
                  <span className="text-[#0B96F3]">Your Application!</span>
                </h2>
              </div>
              <form className="w-full" onSubmit={handleSubmit}>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="tracking-wide text-base text-white mb-2">
                      First Name*
                    </label>
                    <input
                      className="appearance-none block w-full border-b border-gray-500 py-3 mb-3 leading-tight focus:outline-none bg-transparent text-white"
                      required
                      name="firstName"
                      type="text"
                      placeholder="Jane"
                    />
                  </div>
                  <div className="w-full md:w-1/2 px-3">
                    <label className="tracking-wide text-base text-white mb-2">
                      Your Email*
                    </label>
                    <input
                      className="appearance-none block w-full border-b border-gray-500 py-3 leading-tight focus:outline-none bg-transparent text-white"
                      required
                      name="email"
                      type="email"
                      placeholder="Example@gmail.com"
                    />
                  </div>
                </div>

                <div className="flex flex-wrap -mx-2 mb-2">
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block text-base text-white mb-2">
                      Country*
                    </label>
                    <div className="relative">
                      <select
                        onChange={oneCountryChange}
                        value={selectedCountry}
                        required
                        name="country"
                        className="block appearance-none w-full border-b border-gray-500 text-white py-3 pr-8 leading-tight focus:outline-none bg-[#032035]"
                      >
                        <option value="">- Select -</option>
                        {countries.map((item, index) => (
                          <option key={index} value={item.name}>
                            {item.name}
                          </option>
                        ))}
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
                        <svg className="fill-current h-4 w-4" viewBox="0 0 20 20">
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block text-base text-white mb-2">
                      State*
                    </label>
                    <div className="relative">
                      <select
                        required
                        name="state"
                        disabled={!states.length}
                        className="block appearance-none w-full border-b border-gray-500 text-white py-3 pr-8 leading-tight focus:outline-none bg-[#032035]"
                      >
                        <option value="">- Select -</option>
                        {states.map((state, idx) => (
                          <option key={idx} value={state.name}>
                            {state.name}
                          </option>
                        ))}
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
                        <svg className="fill-current h-4 w-4" viewBox="0 0 20 20">
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-black mt-10">
                  <span className="text-white text-base block mb-4">
                    Mobile Number
                  </span>
                  <PhoneInput
                    country={"in"}
                    value={phone}
                    onChange={(value: string) => setPhone(value)}
                    inputProps={{ required: true, name: "phone" }}
                    inputStyle={{
                      backgroundColor: "transparent",
                      borderTop: "0px",
                      borderRight: "0px",
                      borderLeft: "0px",
                      color: "white",
                      borderRadius: 0,
                    }}
                    buttonStyle={{
                      backgroundColor: "transparent",
                      border: "none",
                      padding: "0 8px",
                      borderRadius: 0,
                    }}
                    enableSearch
                  />
                </div>

                <div className="mt-7">
                  <label htmlFor="textarea" className="block text-base py-2">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    id="textarea"
                    placeholder="Your Message here..."
                    className="border-b py-4 outline-0 w-full bg-transparent text-white"
                    rows={3}
                    required
                  ></textarea>
                </div>

                <div className="lg:flex mt-8 justify-between gap-10">
                  <div className="text-center mt-8 lg:text-right lg:mt-0">
                    <button
                      type="submit"
                      className="py-3 px-10 rounded flex items-center gap-3 justify-center text-base text-white bg-[#0B96F3] hover:bg-[#2f2a4f] cursor-pointer"
                    >
                      Submit
                      <Image src="/arrowb.svg" alt="arrow" width={20} height={20} />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
