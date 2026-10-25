import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { brands, getCarsByBrand } from "../data/carData";

const faqs = [
  {
    question: "How do I book a car?",
    answer:
      'Choose your preferred car from our collection and click the "Book Now" button. Follow the booking instructions to complete your reservation.',
  },
  {
    question: "What documents are required?",
    answer:
      "Customers may be required to provide a valid driving licence, identity proof and other documents depending on the booking requirements.",
  },
  {
    question: "Can I cancel my booking?",
    answer:
      "Yes. Cancellation is subject to the cancellation policy applicable to your booking.",
  },
  {
    question: "How can I contact VELORA?",
    answer:
      "You can contact our support team using the phone number or email address provided below.",
  },
  {
    question: "What types of cars are available?",
    answer:
      "VELORA offers a range of vehicles including luxury cars, sports cars, electric vehicles and everyday vehicles.",
  },
];


function BotpressWidget() {
  useEffect(() => {
    const scripts = [
      "https://cdn.botpress.cloud/webchat/v5.0/inject.js",
      "https://files.bpcontent.cloud/2026/09/09/09/20260909093722-98A9HEYG.js",
    ];

    const added = [];

    scripts.forEach((src, index) => {
      if (document.querySelector(`script[src="${src}"]`)) return;
      const script = document.createElement("script");
      script.src = src;
      script.async = index === 1;
      document.body.appendChild(script);
      added.push(script);
    });

    return () => {
      // Botpress manages its own UI. We intentionally leave the loaded widget in place
      // while navigating so the chat session is not unexpectedly reset.
      void added;
    };
  }, []);

  return null;
}

export default function Home() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [openFaq, setOpenFaq] = useState(null);
  const [questionForm, setQuestionForm] = useState({ name: "", email: "", question: "" });

  useEffect(() => {
    if (window.location.hash) {
      requestAnimationFrame(() => {
        document.getElementById(window.location.hash.slice(1))?.scrollIntoView({ behavior: "smooth" });
      });
    }
  }, []);

  const filteredBrands = brands.filter((brand) =>
    brand.name.toLowerCase().includes(search.toLowerCase().trim())
  );

  const submitQuestion = (event) => {
    event.preventDefault();
    const { name, email, question } = questionForm;

    if (!name.trim() || !email.trim() || !question.trim()) {
      alert("Please fill in all the fields.");
      return;
    }

    alert(`Thank you, ${name.trim()}!\n\nYour question has been submitted to VELORA.`);
    setQuestionForm({ name: "", email: "", question: "" });
  };

  return (
    <>
      <BotpressWidget />

      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <p className="small-heading">PREMIUM CAR BOOKING</p>
            <h1>
              Your Journey.
              <br />
              <span>Your Car.</span>
            </h1>
            <p className="hero-text">
              Discover your perfect ride with VELORA. From everyday comfort to premium luxury,
              book the car that matches your journey.
            </p>
            <div className="hero-buttons">
              <button
                type="button"
                className="primary-btn"
                onClick={() => document.getElementById("brands")?.scrollIntoView({ behavior: "smooth" })}
              >
                Explore Cars
              </button>
              <button type="button" className="secondary-btn" onClick={() => window.dispatchEvent(new CustomEvent("velora:open-login"))}>
                Get Started
              </button>
            </div>
          </div>

          <div className="hero-image">
            <img
              src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80"
              alt="Luxury Car"
            />
          </div>
        </section>

        <section className="brands-section" id="brands">
          <div className="section-heading">
            <p>OUR BRANDS</p>
            <h2>Explore Our <span>Brands</span></h2>
            <p className="section-description">
              Choose from some of the world's most trusted automobile brands.
            </p>
            <div className="search-box">
              <input
                type="text"
                placeholder="Search for a car company..."
                autoComplete="off"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
              />
            </div>
          </div>

          <div className="car-container">
            {filteredBrands.map((brand) => {
              const presentation = {
                category: brand.category.toUpperCase(),
                logo: brand.logo,
              };

              return (
                <article
                  className="car-card"
                  key={brand.name}
                  onClick={() => navigate(`/cars?brand=${encodeURIComponent(brand.name)}`)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      navigate(`/cars?brand=${encodeURIComponent(brand.name)}`);
                    }
                  }}
                >
                  <div className="car-image logo-image">
                    {presentation.logo ? (
                      <img src={presentation.logo} alt={`${brand.name} Logo`} />
                    ) : (
                      <span className="brand-logo-fallback" aria-label={`${brand.name} logo`}>
                        {brand.name
                          .split(/\s+/)
                          .map((part) => part[0])
                          .join("")
                          .slice(0, 3)
                          .toUpperCase()}
                      </span>
                    )}
                  </div>
                  <div className="car-info">
                    <p className="brand-category">{presentation.category}</p>
                    <span className={`brand-status ${getCarsByBrand(brand.name).length ? "live" : ""}`}>
                      {getCarsByBrand(brand.name).length ? `${getCarsByBrand(brand.name).length} models` : "Models coming soon"}
                    </span>
                    <h3>{brand.name}</h3>
                    <p>{brand.tagline}</p>
                    <button
                      type="button"
                      onClick={(event) => {
                        event.stopPropagation();
                        navigate(`/cars?brand=${encodeURIComponent(brand.name)}`);
                      }}
                    >
                      Explore Cars →
                    </button>
                  </div>
                </article>
              );
            })}

            {filteredBrands.length === 0 && (
              <div className="no-results">
                No car company found for "<strong>{search.trim()}</strong>"
              </div>
            )}
          </div>
        </section>

        <section className="about-section" id="about">
          <div className="about-content">
            <p className="small-heading">WHY VELORA?</p>
            <h2>
              Drive More.
              <br />
              <span>Worry Less.</span>
            </h2>
            <p>
              VELORA makes car booking simple, convenient and enjoyable. Whether you need a
              luxury car for a special occasion or a comfortable vehicle for your next trip,
              we have something for everyone.
            </p>
          </div>

          <div className="features">
            <div className="feature">
              <div className="feature-icon">🚗</div>
              <h3>Wide Selection</h3>
              <p>Choose from multiple premium brands.</p>
            </div>
            <div className="feature">
              <div className="feature-icon">⚡</div>
              <h3>Quick Booking</h3>
              <p>Book your car in just a few clicks.</p>
            </div>
            <div className="feature">
              <div className="feature-icon">🔒</div>
              <h3>Safe &amp; Secure</h3>
              <p>Your booking experience is our priority.</p>
            </div>
          </div>
        </section>

        <section className="faq-section" id="faq">
          <div className="section-heading">
            <p>NEED HELP?</p>
            <h2>Frequently Asked <span>Questions</span></h2>
            <p className="section-description">Find answers to some common questions.</p>
          </div>

          <div className="faq-container">
            {faqs.map((faq, index) => {
              const active = openFaq === index;
              return (
                <div className={`faq-item ${active ? "active" : ""}`} key={faq.question}>
                  <button
                    type="button"
                    className="faq-question"
                    onClick={() => setOpenFaq(active ? null : index)}
                  >
                    {faq.question}
                    <span>{active ? "−" : "+"}</span>
                  </button>
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section className="question-section">
          <div className="section-heading">
            <p>HAVE A QUESTION?</p>
            <h2>Ask Us <span>Anything</span></h2>
            <p className="section-description">
              Can't find the answer you're looking for? Send us your question and our team will help.
            </p>
          </div>

          <form className="question-form" onSubmit={submitQuestion}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="questionName">Name</label>
                <input
                  id="questionName"
                  type="text"
                  value={questionForm.name}
                  onChange={(event) => setQuestionForm((current) => ({ ...current, name: event.target.value }))}
                  placeholder="Your name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="questionEmail">Email</label>
                <input
                  id="questionEmail"
                  type="email"
                  value={questionForm.email}
                  onChange={(event) => setQuestionForm((current) => ({ ...current, email: event.target.value }))}
                  placeholder="you@example.com"
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="userQuestion">Your Question</label>
              <textarea
                id="userQuestion"
                rows="5"
                value={questionForm.question}
                onChange={(event) => setQuestionForm((current) => ({ ...current, question: event.target.value }))}
                placeholder="Write your question..."
              />
            </div>
            <button className="account-button" type="submit">Send Question</button>
          </form>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-container">
            <div className="contact-info">
              <p className="small-heading">CONTACT US</p>
              <h2>We're Here To Help.</h2>
              <p>Have questions about a booking? Our support team is ready to assist you.</p>
            </div>
            <div className="contact-details">
              <div className="contact-box">
                <div className="contact-icon">📞</div>
                <div><h3>Call Us</h3><p>+91 98765 43210</p></div>
              </div>
              <div className="contact-box">
                <div className="contact-icon">✉️</div>
                <div><h3>Email</h3><p>support@velora.com</p></div>
              </div>
              <div className="contact-box">
                <div className="contact-icon">📍</div>
                <div><h3>Office</h3><p>Punjab, India</p></div>
              </div>
            </div>
          </div>
        </section>

        <section className="policies-section" id="policies">
          <div className="section-heading">
            <p>VELORA</p>
            <h2>Company <span>Policies</span></h2>
          </div>
          <div className="policies-container">
            <div className="policy-card">
              <h3>Privacy Policy</h3>
              <p>
                We respect your privacy and are committed to protecting your personal information.
                Information provided during registration and booking is used only for providing our services.
              </p>
            </div>
            <div className="policy-card">
              <h3>Cancellation Policy</h3>
              <p>
                Bookings can be cancelled from the booking details page until delivery. Cancel within
                24 hours for a full refund of the booking amount; after that, 90% is refunded within
                7 days, 75% within 14 days and 50% later, less a ₹500 processing fee.
              </p>
            </div>
            <div className="policy-card">
              <h3>Booking Policy</h3>
              <p>
                Customers must provide accurate information while making a booking. VELORA reserves
                the right to verify booking information before confirmation.
              </p>
            </div>
            <div className="policy-card">
              <h3>Terms &amp; Conditions</h3>
              <p>
                By using VELORA, customers agree to follow our booking rules, payment requirements
                and vehicle usage guidelines.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-logo">VELORA</div>
        <div className="footer-links">
          <button type="button" onClick={() => document.getElementById("home")?.scrollIntoView({ behavior: "smooth" })}>Home</button>
          <button type="button" onClick={() => document.getElementById("brands")?.scrollIntoView({ behavior: "smooth" })}>Cars</button>
          <button type="button" onClick={() => document.getElementById("faq")?.scrollIntoView({ behavior: "smooth" })}>FAQ</button>
          <button type="button" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>Contact</button>
        </div>
        <p>© 2026 VELORA. All Rights Reserved.</p>
      </footer>
    </>
  );
}
