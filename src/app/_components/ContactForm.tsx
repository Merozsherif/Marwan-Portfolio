"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { send } from "@emailjs/browser";
import { motion } from "framer-motion";
import Input from "./Input";
import Button from "./Button";
import toast from "react-hot-toast";

function ContactForm() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [isLoading, setIsSending] = useState<boolean>(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !message.trim()) {
      toast.error("Please Fill All Required Forms!");
      return;
    }

    handleReset();
    setIsSending(true);

    // Here I used emailjs to handle sending emails functionality
    try {
      await send(
        "service_iep96sj",
        "template_vdofo32",
        { name, email, message },
        "jf4ZMeImhM7dXxMDU",
      );

      // On sucess message/reset inputs
      toast.success("Message sent successfully!");
      handleReset();
    } catch (err) {
      console.error(err);
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setIsSending(false);
    }
  }

  function handleReset() {
    setName("");
    setEmail("");
    setMessage("");
  }

  return (
    <motion.form
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      onSubmit={handleSubmit}
      className="space-y-6 p-6 rounded-xl border border-(--border-color) bg-(--custom-bg) shadow-lg h-fit delay"
    >
      {/* Heading */}
      <h2 className="text-3xl text-(--text-color) mb-6">
        <span>Send a </span>
        <span className="text-(--orange-text)">Message</span>
      </h2>

      {/* Inputs */}
      <div className="space-y-6">
        {/* Name */}
        <label
          htmlFor="name"
          className="block text-(--text-color-secondary) mb-2"
        >
          Name
        </label>
        <Input
          type="text"
          id="name"
          name="name"
          value={name}
          autoComplete="username"
          placeholder="Your Name"
          disabled={isLoading}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setName(e.target.value)
          }
          addedClasses="w-full"
        />

        {/* Email */}
        <label
          htmlFor="email"
          className="block text-(--text-color-secondary) mb-2"
        >
          Email
        </label>
        <Input
          type="email"
          id="email"
          name="email"
          autoComplete="email"
          value={email}
          placeholder="your.email@example.com"
          disabled={isLoading}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
          addedClasses="w-full"
        />

        {/* Message */}
        <label
          htmlFor="message"
          className="block text-(--text-color-secondary) mb-2"
        >
          Message
        </label>
        <Input
          type="textarea"
          id="message"
          name="message"
          value={message}
          placeholder="Your message here..."
          disabled={isLoading}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            setMessage(e.target.value)
          }
          addedClasses="h-[170px] max-h-[200px] min-h-[170px] w-full"
        />

        {/* Submit button */}
        <Button
          type="submit"
          variation="orange"
          addedClasses="px-6 py-3 w-full justify-center"
          disabled={isLoading}
        >
          <Send />
          Send Message
        </Button>
      </div>
    </motion.form>
  );
}

export default ContactForm;
