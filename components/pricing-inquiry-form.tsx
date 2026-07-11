"use client";

import { FormEvent, useState } from "react";
import { ArrowUpRight, CheckCircle, WarningCircle } from "@phosphor-icons/react";

type FormStatus = "idle" | "submitting" | "success" | "error";

const initialState = { name: "", email: "", phone: "", eventType: "", date: "", passengers: "", pickup: "", dropoff: "", message: "", website: "" };

export function PricingInquiryForm() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [statusMessage, setStatusMessage] = useState("");

  function updateField(field: keyof typeof initialState, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setStatusMessage("");

    try {
      const response = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      const payload = (await response.json()) as { message?: string };
      if (!response.ok) throw new Error(payload.message ?? "We could not send the inquiry.");
      setStatus("success");
      setStatusMessage(payload.message ?? "Thanks — your inquiry is on its way to our team.");
      setForm(initialState);
    } catch (error) {
      setStatus("error");
      setStatusMessage(error instanceof Error ? error.message : "We could not send the inquiry.");
    }
  }

  return (
    <form className="inquiry-form" onSubmit={handleSubmit} noValidate>
      <div className="inquiry-form__intro"><p className="eyebrow">Pricing & availability</p><h2 className="display">Give us the shape of the night.</h2><p>We’ll follow up with vehicle options, timing, and a clear quote.</p></div>
      <div className="inquiry-form__grid">
        <label className="field"><span>Name *</span><input required name="name" value={form.name} onChange={(event) => updateField("name", event.target.value)} autoComplete="name" /></label>
        <label className="field"><span>Email *</span><input required type="email" name="email" value={form.email} onChange={(event) => updateField("email", event.target.value)} autoComplete="email" /></label>
        <label className="field"><span>Phone *</span><input required type="tel" name="phone" value={form.phone} onChange={(event) => updateField("phone", event.target.value)} autoComplete="tel" /></label>
        <label className="field"><span>Event type *</span><select required name="eventType" value={form.eventType} onChange={(event) => updateField("eventType", event.target.value)}><option value="">Choose one</option><option>Nightclub crawl</option><option>Bachelor or bachelorette party</option><option>Prom</option><option>EDC</option><option>Golf outing</option><option>Quinceañera</option><option>NFR</option><option>CES / convention</option><option>Other</option></select></label>
        <label className="field"><span>Event date *</span><input required type="date" name="date" value={form.date} onChange={(event) => updateField("date", event.target.value)} /></label>
        <label className="field"><span>Passengers *</span><input required type="number" min="1" max="1000" name="passengers" value={form.passengers} onChange={(event) => updateField("passengers", event.target.value)} inputMode="numeric" /></label>
        <label className="field"><span>Pickup location *</span><input required name="pickup" value={form.pickup} onChange={(event) => updateField("pickup", event.target.value)} placeholder="Hotel, venue, or address" /></label>
        <label className="field"><span>Drop-off / route</span><input name="dropoff" value={form.dropoff} onChange={(event) => updateField("dropoff", event.target.value)} placeholder="Optional" /></label>
        <label className="field field--wide"><span>Tell us about the plan</span><textarea name="message" rows={5} value={form.message} onChange={(event) => updateField("message", event.target.value)} placeholder="Stops, timing, special details, or questions" /></label>
        <label className="field field--honeypot" aria-hidden="true"><span>Website</span><input tabIndex={-1} name="website" value={form.website} onChange={(event) => updateField("website", event.target.value)} /></label>
      </div>
      <div className="inquiry-form__submit">
        <button className="button button--gold" type="submit" disabled={status === "submitting"}>{status === "submitting" ? "Sending…" : "Send inquiry"} <ArrowUpRight size={18} /></button>
        <p className="form-note">By submitting, you’re asking our team to contact you about availability. Your details stay with Luxurious Transportation Services.</p>
      </div>
      {statusMessage && <div className={`form-status form-status--${status}`} role="status">{status === "success" ? <CheckCircle size={21} /> : <WarningCircle size={21} />}<span>{statusMessage}</span></div>}
    </form>
  );
}
