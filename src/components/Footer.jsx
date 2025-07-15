import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Facebook, Linkedin, Twitter, Mail, Phone, Clock, Youtube } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const contactSection = document.querySelector('section[class*="ContactUs"], section:has([class*="contact"])')?.closest('section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-lms-primary pt-16 pb-8">
      <div className="section-container">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap className="h-7 w-7 text-white" />
              <span className="font-bold text-xl text-white">Athena</span>
            </div>
            <p className="text-white/90 mb-6 max-w-xs">
              Transforming education through technology and innovation. Our platform empowers learners to achieve their goals.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.youtube.com/redirect?event=channel_description&redir_token=QUFFLUhqbkZhbWVJWC1lNkpWUVB4ZnhMTVROVUJPUHJyUXxBQ3Jtc0tseF9vOENWaF9pOFdzdmZGcnkzeFB3alFMMVVTYjdLUnNJdklIaGQzaExVNk9uNWpVSUVzR05ZZHlHay1iNVZKdDFHd1FrY0lzU056Vnh5RHlvdS00Q0pfTXp5aWpPVm00UVZoNERpLVJrY0FTTUFjOA&q=https%3A%2F%2Fwww.facebook.com%2Fgroups%2F1455118361753321%2F"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
              >
                <Facebook className="h-5 w-5 text-white" />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="https://www.youtube.com/redirect?event=channel_description&redir_token=QUFFLUhqbGp0WG1CSmNBc2h6VHp6SkNOVTlJcXU1dGFId3xBQ3Jtc0tsRC1lOTlUdHhnam1LTUE4RmNjUnE3T2xFa3BVSHRldzk3dVItNVdrdTRPeHJzVmpBWEIwSkdjcWVuZTRLVk9mVUdobFliV1ByeEtVczBRNEcwd1VZYVAzc3FYM1d5T0NFUjNuZ3VVNmotaE02XzRJSQ&q=https%3A%2F%2Fx.com%2FCreditorAcademy"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
              >
                <Twitter className="h-5 w-5 text-white" />
                <span className="sr-only">Twitter</span>
              </a>
              <a
                href="https://www.linkedin.com/company/creditor-academy/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
              >
                <Linkedin className="h-5 w-5 text-white" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="https://www.youtube.com/@CreditorAcademy"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
              >
                <Youtube className="h-5 w-5 text-white" />
                <span className="sr-only">YouTube</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Company</h3>
            <ul className="space-y-3 text-white/80">
              <li><Link to="/about" className="hover:text-white transition-colors" onClick={scrollToTop}>About Us</Link></li>
              <li><button onClick={scrollToContact} className="hover:text-white transition-colors text-left">Contact</button></li>
              <li><Link to="/return-refund-policy" className="hover:text-white transition-colors" onClick={scrollToTop}>Return and Refund</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-white transition-colors" onClick={scrollToTop}>Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="hover:text-white transition-colors" onClick={scrollToTop}>Terms of Service</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Contact</h3>
            <ul className="space-y-3 text-white/80">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:counselor@creditoracademy.com" className="hover:text-white transition-colors">
                  counselor@creditoracademy.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a href="tel:425-400-9246" className="hover:text-white transition-colors">
                  (425-400-9246)
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="h-4 w-4 mt-0.5" />
                <span>9:00 AM to 5:00 PM EST</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/80 text-sm">
            © 2025 Athena. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="text-white/80 text-sm hover:text-white" onClick={scrollToTop}>Privacy Policy</Link>
            <Link to="/terms-of-service" className="text-white/80 text-sm hover:text-white" onClick={scrollToTop}>Terms of Service</Link>
            <a href="#" className="text-white/80 text-sm hover:text-white">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;