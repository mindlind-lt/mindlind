'use client'

import { ChevronRight } from 'lucide-react';
import { useState } from 'react';

function FloatingInput({ label, name, type = 'text', required }: { label: string; name: string; type?: string; required?: boolean }) {
  const [filled, setFilled] = useState(false);
  return (
    <div className="relative">
      <input
        type={type}
        name={name}
        required={required}
        placeholder=" "
        onFocus={() => setFilled(true)}
        onBlur={e => setFilled(e.target.value !== '')}
        className="peer w-full h-16 rounded-2xl bg-[#EFF0F2] px-5 pt-5 pb-2 text-lg font-semibold focus:outline-none focus:ring-1 focus:ring-gray-300 transition"
      />
      <label className={`absolute left-5 text-gray-400 font-semibold pointer-events-none transition-all duration-200 ${
        filled ? 'top-2 text-xs' : 'top-1/2 -translate-y-1/2 text-lg'
      } peer-focus:top-2 peer-focus:-translate-y-0 peer-focus:text-xs`}>
        {label}
      </label>
    </div>
  );
}

function FloatingTextarea({ label, name, rows, required }: { label: string; name: string; rows?: number; required?: boolean }) {
  const [filled, setFilled] = useState(false);
  return (
    <div className="relative">
      <textarea
        name={name}
        rows={rows}
        required={required}
        placeholder=" "
        onFocus={() => setFilled(true)}
        onBlur={e => setFilled(e.target.value !== '')}
        className="peer w-full rounded-2xl bg-[#EFF0F2] px-5 pt-7 pb-3 text-lg font-semibold focus:outline-none focus:ring-1 focus:ring-gray-300 transition resize-none"
      />
      <label className={`absolute left-5 text-gray-400 font-semibold pointer-events-none transition-all duration-200 ${
        filled ? 'top-2 text-xs' : 'top-5 text-lg'
      } peer-focus:top-2 peer-focus:text-xs`}>
        {label}
      </label>
    </div>
  );
}

export default function ContactForm() {
  const [result, setResult] = useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    formData.append("access_key", "996516a0-2c5b-4373-bb44-ac664f95c62a");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    setResult(data.success ? "Form submitted successfully!" : "Something went wrong. Please try again.");
  };

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4 w-full">
      <FloatingInput label="Full Name" name="name" required />
      <FloatingInput label="Email Address" name="email" type="email" required />
      <FloatingInput label="Phone Number" name="phone" type="tel" required />
      <FloatingTextarea label="Your Message" name="message" rows={5} required />
      <div>
        <button
          type="submit"
          className="flex items-center gap-6 rounded-2xl bg-black px-7 py-4 h-16 text-lg font-semibold text-white hover:bg-gray-800 active:bg-gray-900 transition cursor-pointer"
        >
          <div className='pb-0.5'>Senden</div>
          <ChevronRight />
        </button>
      </div>

      {result && (
        <p className="text-center text-sm font-semibold text-gray-600">{result}</p>
      )}
    </form>
  );
}
