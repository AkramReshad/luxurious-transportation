"use client";

import { useSearchParams } from "next/navigation";
import { FormEvent, useState } from "react";
import { services } from "@/lib/site-data";

type FormState = "idle" | "sending" | "success" | "error";

export function InquiryForm() {
  const params = useSearchParams();
  const [state, setState] = useState<FormState>("idle");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("sending");
    const form = event.currentTarget;

    try {
      const result = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form)))
      });

      setState(result.ok ? "success" : "error");
      if (result.ok) form.reset();
    } catch {
      setState("error");
    }
  }

  const selectedVehicle = params.get("vehicle");

  return (
    <form className="inquiry-form" onSubmit={submit} aria-label="Pricing inquiry">
      <div className="form-grid">
        <label>Full name<input name="name" autoComplete="name" maxLength={100} required /></label>
        <label>Email<input type="email" name="email" autoComplete="email" maxLength={254} required /></label>
        <label>Phone<input type="tel" name="phone" autoComplete="tel" maxLength={30} required /></label>
        <label>
          Event type
          <select name="eventType" defaultValue="" required>
            <option value="" disabled>Select an occasion</option>
            {services.map((service) => <option key={service.slug}>{service.name}</option>)}
            <option>Other</option>
          </select>
        </label>
        <label>Date<input type="date" name="date" required /></label>
        <label>Passenger count<input type="number" name="passengers" min="1" max="100" required /></label>
        <label className="full">Pickup location<input name="pickup" maxLength={200} required /></label>
        <label className="full">Destination or planned stops<input name="destination" maxLength={300} required /></label>
        <label className="full">
          Tell us about the trip
          <textarea
            name="message"
            rows={5}
            maxLength={2000}
            defaultValue={selectedVehicle ? `I’m interested in the ${selectedVehicle}.` : ""}
          />
        </label>
        <label className="honeypot" aria-hidden="true">
          Website<input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <button className="gold-button submit-button" disabled={state === "sending"}>
        {state === "sending" ? "Sending…" : "Send inquiry"}
      </button>
      <div className="form-status" aria-live="polite">
        {state === "success" && "Your inquiry has been received. We’ll follow up using the contact details provided."}
        {state === "error" && <>The form could not be delivered. Please call <a href="tel:+17024709700">702-470-9700</a>.</>}
      </div>
    </form>
  );
}
