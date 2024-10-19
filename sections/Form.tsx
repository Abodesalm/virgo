"use client";
import React, { useState } from "react";

export default function Form() {
  const [fullName, setFullName] = useState<String>();
  const [, set] = useState<String>();
  const [submitValue, setSubmitValue] = useState("Submit");
  return (
    <form className="flex flex-row gap-2 items-start w-[640px] px-4 flex-wrap">
      <input className="input" type="text" placeholder="Full Name" />
      <input className="input" type="text" placeholder="Address" />
      <input className="input" type="tel" placeholder="Phone Number" />
      <input className="input" type="email" placeholder="Email" />
      <input className="input" type="text" placeholder="Department" />
      <input className="input" type="text" placeholder="Jop Title" />
      <input className="input" type="number" placeholder="Salary" />

      <br />

      <div className="flex flex-col p-4">
        <label htmlFor="birthDate">Birth Date</label>
        <input
          className="input cursor-pointer"
          type="date"
          placeholder="Birth Date"
          id="birthDate"
        />
      </div>
      <div className="flex flex-col p-4">
        <label htmlFor="joinDate">Join Date</label>
        <input
          className="input cursor-pointer"
          type="date"
          placeholder="Join Date"
          id="joinDate"
        />
      </div>

      <textarea
        placeholder="notes"
        className="input w-[605px] h-[200px]"
      ></textarea>
      <input type="submit" value={submitValue} className={`btn-prime mt-2`} />
    </form>
  );
}
