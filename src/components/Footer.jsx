import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaXTwitter,
  FaArrowRight,
} from "react-icons/fa6";
import { Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 ">

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 py-24">

        <div className="text-center max-w-4xl mx-auto">

          <p className="uppercase tracking-[0.35em] text-[#12f00a] text-sm mb-6">
            Stay Connected
          </p>

          <h2 className="text-5xl md:text-7xl font-light leading-tight">
            Let's Build
            <br />
            The Future Together.
          </h2>

          <p className="mt-8 text-gray-400 text-lg leading-9">
            Join our growing community and receive updates on leadership,
            community projects, youth empowerment initiatives and campaign
            activities.
          </p>

          <Link
            to="/startconversation"
            className="inline-flex items-center gap-3 mt-12 bg-white text-black px-8 py-5 rounded-full hover:scale-105 transition"
          >
            Start a Conversation
            <FaArrowRight />
          </Link>

        </div>

      </section>

      {/* Newsletter */}

      <section className="max-w-7xl mx-auto px-6 pb-24">

        <div className="rounded-[2.5rem] border border-white/10 bg-white/5 backdrop-blur-xl p-8 md:p-12">

          <div className="grid lg:grid-cols-2 gap-10 items-center">

            <div>

              <h3 className="text-4xl font-light mb-5">
                Monthly Insights
              </h3>

              <p className="text-gray-400 leading-8">
                Leadership updates, speeches, cultural projects,
                technology initiatives and upcoming events.
              </p>

            </div>

            <form className="flex flex-col md:flex-row gap-4">

              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 bg-black/40 border border-white/10 rounded-full px-7 py-5 outline-none focus:border-[#12f00a]"
              />

              <button className="bg-[#12f00a] text-black rounded-full px-8 py-5 font-medium hover:scale-105 transition">
                Subscribe
              </button>

            </form>

          </div>

        </div>

      </section>

      {/* Main Footer */}

      <section className="max-w-7xl mx-auto px-6 pb-20">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-14">

          {/* Brand */}

          <div>

            <h3 className="text-3xl font-light mb-6">
              Kachi Aghasili
              <br />
              Initiative
            </h3>

            <p className="text-gray-400 leading-8">
              Creating sustainable impact through leadership,
              innovation, youth empowerment and cultural preservation.
            </p>

          </div>

          {/* Explore */}

          <div>

            <h4 className="uppercase tracking-[0.3em] text-[#12f00a] text-sm mb-8">
              Explore
            </h4>

            <div className="space-y-5">

              <Link to="/about" className="block hover:text-[#12f00a]">
                About
              </Link>

              <Link to="/whatwedo" className="block hover:text-[#12f00a]">
                What We Do
              </Link>

              <Link to="/media" className="block hover:text-[#12f00a]">
                Media
              </Link>

              <Link to="/speeches" className="block hover:text-[#12f00a]">
                Speeches
              </Link>

              <Link to="/impact" className="block hover:text-[#12f00a]">
                Philanthropy
              </Link>

            </div>

          </div>

          {/* Contact */}

          <div>

            <h4 className="uppercase tracking-[0.3em] text-[#12f00a] text-sm mb-8">
              Contact
            </h4>

            <div className="space-y-6">

              <div className="flex gap-4">

                <Mail size={18} className="text-[#12f00a] mt-1" />

                <p className="text-gray-400">
                  kachiaghasilicampaign@gmail.com
                </p>

              </div>

              <div className="flex gap-4">

                <Phone size={18} className="text-[#12f00a] mt-1" />

                <p className="text-gray-400">
                  +234 812 985 5352
                </p>

              </div>

              <div className="flex gap-4">

                <MapPin size={18} className="text-[#12f00a] mt-1" />

                <p className="text-gray-400">
                  Enugu, Nigeria
                </p>

              </div>

            </div>

          </div>

          {/* Social */}

          <div>

            <h4 className="uppercase tracking-[0.3em] text-[#12f00a] text-sm mb-8">
              Follow
            </h4>

            <div className="flex gap-4">

              {[FaFacebookF, FaInstagram, FaYoutube, FaXTwitter].map(
                (Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-amber-400 hover:bg-white hover:text-black transition duration-300"
                  >
                    <Icon />
                  </a>
                )
              )}

            </div>

          </div>

        </div>

      </section>

      {/* Divider */}

      <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      {/* Bottom */}

      <section className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-6">

        <p className="text-gray-500 text-sm text-center md:text-left">
          © {new Date().getFullYear()} Kachi Aghasili Initiative. All Rights Reserved.
        </p>

        <div className="flex gap-8 text-sm text-gray-500">

          <Link to="/privacy" className="hover:text-white">
            Privacy
          </Link>

          <Link to="/terms" className="hover:text-white">
            Terms
          </Link>

          <Link to="/contact" className="hover:text-white">
            Contact
          </Link>

        </div>

      </section>

    </footer>
  );
}

export default Footer;