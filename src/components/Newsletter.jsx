import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Check,
  Mail,
  ShieldCheck,
  Sparkles,
  Send,
  X,
} from "lucide-react";

const API_URL =
  "https://newsletter-api-aimm.onrender.com/api/subscribe";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const cleanEmail = email.trim();

    if (!cleanEmail) {
      setStatus("error");
      setMessage("Please enter your email address.");
      return;
    }

    // Browser-level validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(cleanEmail)) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }

    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: cleanEmail,
        }),
      });

      let data = {};

      try {
        data = await response.json();
      } catch {
        data = {};
      }

      if (!response.ok) {
        throw new Error(
          data?.message ||
            data?.error ||
            "We could not complete your subscription. Please try again."
        );
      }

      setStatus("success");

      setMessage(
        data?.message ||
          "You're now subscribed to the Kachi Aghasili campaign."
      );

      setEmail("");
    } catch (error) {
      console.error("Newsletter subscription error:", error);

      setStatus("error");

      setMessage(
        error.message ||
          "Something went wrong. Please try again shortly."
      );
    }
  };

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">

      {/* =====================================================
          BACKGROUND EFFECTS
      ====================================================== */}

      <div className="fixed inset-0 pointer-events-none">

        <div className="absolute top-[-300px] left-[-200px] w-[600px] h-[600px] rounded-full bg-[#12f00a]/10 blur-[140px]" />

        <div className="absolute bottom-[-300px] right-[-200px] w-[600px] h-[600px] rounded-full bg-[#12f00a]/5 blur-[140px]" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

      </div>

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <section className="relative z-10 min-h-screen flex items-center py-24">

        <div className="max-w-7xl mx-auto w-full px-6">

          <div className="grid lg:grid-cols-12 gap-16 items-center">

            {/* =================================================
                LEFT CONTENT
            ================================================== */}

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7"
            >

              {/* Label */}

              <div className="inline-flex items-center gap-3 mb-8">

                <span className="w-10 h-[1px] bg-[#12f00a]" />

                <span className="uppercase tracking-[0.35em] text-xs text-[#12f00a]">
                  Stay Connected
                </span>

              </div>

              {/* Heading */}

              <h1 className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-light leading-[0.95] tracking-tight">

                Be Part of
                <br />

                <span className="text-[#12f00a]">
                  the Conversation.
                </span>

              </h1>

              {/* Description */}

              <p className="text-gray-400 text-lg md:text-xl leading-9 max-w-2xl mt-10">

                Stay informed about Kachi Aghasili's campaign,
                manifesto, community engagements and plans for
                Awka North and South.

              </p>

              <p className="text-gray-500 text-base leading-8 max-w-2xl mt-5">

                Subscribe to receive weekly campaign updates,
                important announcements, upcoming events,
                community stories and opportunities to get involved.

              </p>

              {/* Feature points */}

              <div className="grid sm:grid-cols-2 gap-5 mt-12">

                <Feature
                  icon={<Sparkles size={18} />}
                  text="Weekly campaign insights"
                />

                <Feature
                  icon={<Send size={18} />}
                  text="Manifesto & policy updates"
                />

                <Feature
                  icon={<Mail size={18} />}
                  text="Campaign announcements"
                />

                <Feature
                  icon={<Check size={18} />}
                  text="Community stories & events"
                />

              </div>

            </motion.div>


            {/* =================================================
                SUBSCRIPTION CARD
            ================================================== */}

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
              }}
              className="lg:col-span-5"
            >

              <div className="relative">

                {/* Glow */}

                <div className="absolute inset-0 bg-[#12f00a]/10 blur-3xl rounded-full" />

                {/* Card */}

                <div className="relative rounded-[2.5rem] border border-white/10 bg-zinc-950/90 backdrop-blur-xl p-8 md:p-10 shadow-2xl">

                  {/* Top icon */}

                  <div className="w-16 h-16 rounded-2xl bg-[#12f00a]/10 border border-[#12f00a]/20 flex items-center justify-center mb-8">

                    <Mail
                      size={28}
                      className="text-[#12f00a]"
                    />

                  </div>

                  <p className="uppercase tracking-[0.3em] text-xs text-[#12f00a] mb-4">
                    Campaign Newsletter
                  </p>

                  <h2 className="text-3xl md:text-4xl font-light leading-tight">

                    Get the latest
                    <br />
                    from the campaign.

                  </h2>

                  <p className="text-gray-500 leading-7 mt-5">

                    One email a week. Important information,
                    meaningful stories and campaign updates —
                    without the noise.

                  </p>


                  {/* =================================================
                      FORM
                  ================================================== */}

                  <form
                    onSubmit={handleSubmit}
                    className="mt-10"
                  >

                    <label
                      htmlFor="newsletter-email"
                      className="block text-sm text-gray-400 mb-3"
                    >
                      Your email address
                    </label>

                    <div className="relative">

                      <Mail
                        size={19}
                        className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-600"
                      />

                      <input
                        id="newsletter-email"
                        type="email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);

                          if (status !== "idle") {
                            setStatus("idle");
                            setMessage("");
                          }
                        }}
                        placeholder="you@example.com"
                        disabled={status === "loading"}
                        className="w-full bg-black border border-white/10 rounded-2xl py-5 pl-14 pr-5 text-white placeholder:text-gray-700 outline-none focus:border-[#12f00a]/60 focus:ring-4 focus:ring-[#12f00a]/5 transition disabled:opacity-50"
                      />

                    </div>


                    {/* Submit */}

                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="group w-full mt-4 bg-[#12f00a] text-black py-5 rounded-2xl font-semibold flex items-center justify-center gap-3 hover:bg-[#24ff1c] hover:scale-[1.01] transition duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                    >

                      {status === "loading" ? (
                        <>
                          <span className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />

                          Subscribing...
                        </>
                      ) : (
                        <>
                          Subscribe to Updates

                          <ArrowRight
                            size={19}
                            className="group-hover:translate-x-1 transition"
                          />
                        </>
                      )}

                    </button>

                  </form>


                  {/* =================================================
                      STATUS MESSAGE
                  ================================================== */}

                  <AnimatePresence mode="wait">

                    {status === "success" && (

                      <motion.div
                        initial={{
                          opacity: 0,
                          y: 10,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                        }}
                        exit={{
                          opacity: 0,
                        }}
                        className="mt-6 rounded-2xl border border-[#12f00a]/20 bg-[#12f00a]/10 p-5 flex gap-4"
                      >

                        <div className="w-8 h-8 shrink-0 rounded-full bg-[#12f00a] text-black flex items-center justify-center">

                          <Check size={17} />

                        </div>

                        <div>

                          <p className="font-medium text-[#12f00a]">
                            You're on the list.
                          </p>

                          <p className="text-sm text-gray-400 mt-1 leading-6">
                            {message}
                          </p>

                        </div>

                      </motion.div>

                    )}


                    {status === "error" && (

                      <motion.div
                        initial={{
                          opacity: 0,
                          y: 10,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                        }}
                        exit={{
                          opacity: 0,
                        }}
                        className="mt-6 rounded-2xl border border-red-500/20 bg-red-500/10 p-5 flex gap-4"
                      >

                        <div className="w-8 h-8 shrink-0 rounded-full bg-red-500/10 text-red-400 flex items-center justify-center">

                          <X size={17} />

                        </div>

                        <div>

                          <p className="font-medium text-red-400">
                            Subscription unsuccessful
                          </p>

                          <p className="text-sm text-gray-500 mt-1 leading-6">
                            {message}
                          </p>

                        </div>

                      </motion.div>

                    )}

                  </AnimatePresence>


                  {/* Privacy */}

                  <div className="flex gap-3 mt-8 pt-7 border-t border-white/10">

                    <ShieldCheck
                      size={18}
                      className="text-gray-600 shrink-0 mt-1"
                    />

                    <p className="text-xs text-gray-600 leading-6">

                      Your email is used only for campaign
                      communications. You can unsubscribe from
                      campaign emails at any time.

                    </p>

                  </div>

                </div>

              </div>

            </motion.div>

          </div>


          {/* =====================================================
              BOTTOM MESSAGE
          ====================================================== */}

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-24 pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between gap-6 text-sm text-gray-600"
          >

            <p>
              Kachi Aghasili Initiative
            </p>

            <p>
              Leadership • Opportunity • Community
            </p>

          </motion.div>

        </div>

      </section>

    </main>
  );
}


/* =========================================================
   FEATURE COMPONENT
========================================================= */

function Feature({ icon, text }) {
  return (
    <div className="flex items-center gap-3 text-gray-400">

      <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#12f00a]">
        {icon}
      </div>

      <span className="text-sm">
        {text}
      </span>

    </div>
  );
}