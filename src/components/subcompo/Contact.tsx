// components/Contact.tsx
import { useState } from 'react';
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { toast } from 'react-toastify';

export default function Contact() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message')
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success('Message sent successfully', {
          autoClose: 1500
        });
        (e.target as HTMLFormElement).reset(); // Reset form after successful submission
      } else {
        toast.error('Failed to send message', {
          autoClose: 1500
        });
      }
    } catch (error) {
      toast.error('Failed to send message', {
        autoClose: 1500
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-4">Contact Me</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block mb-2">Name</label>
          <Input id="name" name="name" placeholder="Your Name" autoComplete="off" required />
        </div>
        <div>
          <label htmlFor="email" className="block mb-2">Email</label>
          <Input id="email" name="email" type="email" placeholder="your.email@example.com" required />
        </div>
        <div>
          <label htmlFor="message" className="block mb-2">Message</label>
          <Textarea id="message" rows={10} className="resize-none" name="message" placeholder="Your message here..." required />
        </div>
        <div className="flex justify-center sm:justify-start">
          <Button type="submit" disabled={loading}>
            {loading ? 'Sending...' : 'Send Message'}
          </Button>
        </div>
      </form>
    </section>
  );
}
