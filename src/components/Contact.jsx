import { useState } from 'react';
import { contact } from '../data/site';
import Reveal from './Reveal';
import Section from './Section';

const emptyForm = { name: '', email: '', subject: '', message: '' };

const details = [
  { label: 'Phone', value: contact.phone, href: contact.phoneHref },
  { label: 'Email', value: contact.email, href: `mailto:${contact.email}` },
  { label: 'Location', value: `${contact.location}, ${contact.region}` },
];

export default function Contact() {
  const [form, setForm] = useState(emptyForm);
  const [sent, setSent] = useState(false);

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  // There is no backend yet, so the form hands the message to the visitor's own email app.
  // To switch to a form service later, replace the mailto line with a fetch() to that service.
  const handleSubmit = (event) => {
    event.preventDefault();
    const body = `${form.message}\n\n${form.name}\n${form.email}`;
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <Section
      id="contact"
      tone="surface"
      label="Contact"
      title="Get in touch"
      intro="Interested in collaboration or learning more about our research? We'd love to hear from you."
    >
      <Reveal className="border-t border-line-strong pt-8">
        <dl className="flex flex-col gap-6 sm:flex-row sm:flex-wrap sm:gap-x-14">
          {details.map((detail) => (
            <div key={detail.label}>
              <dt className="label">{detail.label}</dt>
              <dd className="mt-1.5 font-medium break-all text-ink sm:break-normal">
                {detail.href ? (
                  <a href={detail.href} className="underline-offset-4 hover:text-accent hover:underline">
                    {detail.value}
                  </a>
                ) : (
                  detail.value
                )}
              </dd>
            </div>
          ))}
        </dl>

        <form onSubmit={handleSubmit} className="mt-10 max-w-2xl space-y-5 border-t border-line pt-8">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium text-ink">
                Full name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                autoComplete="name"
                value={form.name}
                onChange={handleChange}
                className="field"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-ink">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                value={form.email}
                onChange={handleChange}
                className="field"
              />
            </div>
          </div>

          <div>
            <label htmlFor="subject" className="mb-2 block text-sm font-medium text-ink">
              Subject
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              required
              placeholder="Research collaboration"
              value={form.subject}
              onChange={handleChange}
              className="field"
            />
          </div>

          <div>
            <label htmlFor="message" className="mb-2 block text-sm font-medium text-ink">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              placeholder="Tell us about your inquiry..."
              value={form.message}
              onChange={handleChange}
              className="field resize-none"
            />
          </div>

          <button type="submit" className="btn btn-primary w-full sm:w-auto">
            Send message
          </button>

          <div aria-live="polite">
            {sent && (
              <p className="border-l-2 border-accent pl-4 text-sm leading-relaxed text-ink">
                Your email app should now be open with the message ready to send. If nothing opened, write to us
                directly at{' '}
                <a href={`mailto:${contact.email}`} className="font-medium break-all underline underline-offset-4">
                  {contact.email}
                </a>
                .
              </p>
            )}
          </div>
        </form>
      </Reveal>

      <Reveal className="mt-12">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15950.058814040784!2d30.09871421472356!3d-1.9470947684327524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca774626f129f%3A0x6226e99fffd9a3ed!2sRemera%2C%20Kigali!5e0!3m2!1sen!2srw!4v1761997718045!5m2!1sen!2srw"
          title="BioRep Labs Location - Remera, Kigali"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          className="block h-72 w-full rounded-lg border-0 bg-line sm:h-80"
        />
      </Reveal>
    </Section>
  );
}
