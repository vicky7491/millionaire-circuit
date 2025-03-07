import { motion } from 'framer-motion';
import './MillionaireCircuit.css';
import '/assets/profile1.jpg';
import '/assets/profile2.jpg';
import  '/assets/profile3.jpg';
import '/assets/profile4.jpg';
import  '/assets/profile5.jpg';
import  '/assets/profile6.jpg';
export default function MillionaireCircuit() {
  // Fake testimonials data
  const testimonials = [
    {
      id: 1,
      name: 'Robert Martinez',
      role: 'Freelancer',
      quote: 'This course changed my life! I went from $0 to $10,000/month in just 3 months. Highly recommend!',
      avatar: '/assets/profile1.jpg',
    },
    {
      id: 2,
      name: 'James Wilson',
      role: 'Entrepreneur',
      quote: 'The AI automation strategies are mind-blowing. I’ve never seen such results before. Worth every penny!',
      avatar: '/assets/profile2.jpg',
    },
    {
      id: 3,
      name: 'John Carter',
      role: 'Digital Marketer',
      quote: 'The Millionaire Circuit is a game-changer. It’s like having a money-printing machine on autopilot!',
      avatar: '/assets/profile3.jpg',
    },
    {
      id: 4,
      name: 'Sarah Lee',
      role: 'E-commerce Owner',
      quote: 'I doubled my revenue in just 2 months using the strategies from this course. Absolutely incredible!',
      avatar: '/assets/profile4.jpg',
    },
    {
      id: 5,
      name: 'Emily Davis',
      role: 'Investor',
      quote: 'The ROI from this course is insane. I’ve already made back 10x my investment. Thank you!',
      avatar: '/assets/profile5.jpg',
    },
    {
      id: 6,
      name: 'Michael Thompson',
      role: 'Content Creator',
      quote: 'This course gave me the tools to automate my business and focus on what I love. Life-changing!',
      avatar: '/assets/profile6.jpg',
    },
  ];

  return (
    <div className="container">
      {/* Landing Page Section */}
      <motion.div
        className="content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="title"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Unlock the <span className="highlight">Millionaire Circuit</span>
        </motion.h1>
        <motion.p
          className="description"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          The Proven AI Automation System That Generates <span className="highlight">$10,000/Month</span> on Autopilot
        </motion.p>
        <motion.div
          className="cta-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <button className="join-button">
            <span className="button-text">Secure Your Spot Now</span>
            <span className="button-price">— $997</span>
          </button>
          <p className="spots-info">
            🚨 Only <span className="highlight">47 Spots</span> Left — Enrollment Closes Soon!
          </p>
        </motion.div>
        <motion.div
          className="trust-badges"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <div className="badge">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="icon"
              viewBox="0 0 16 16"
            >
              <path d="M5.338 1.59a61 61 0 0 0-2.837.856.48.48 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.7 10.7 0 0 0 2.287 2.233c.346.244.652.42.893.533q.18.085.293.118a1 1 0 0 0 .101.025 1 1 0 0 0 .1-.025q.114-.034.294-.118c.24-.113.547-.29.893-.533a10.7 10.7 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.8 11.8 0 0 1-2.517 2.453 7 7 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7 7 0 0 1-1.048-.625 11.8 11.8 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 63 63 0 0 1 5.072.56" />
              <path d="M10.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0" />
            </svg>
            <span>100% Secure Payment</span>
          </div>
          <div className="badge">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="icon"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M11 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8m5-4a5 5 0 1 1-10 0 5 5 0 0 1 10 0"
              />
              <path d="M9.438 11.944c.047.596.518 1.06 1.363 1.116v.44h.375v-.443c.875-.061 1.386-.529 1.386-1.207 0-.618-.39-.936-1.09-1.1l-.296-.07v-1.2c.376.043.614.248.671.532h.658c-.047-.575-.54-1.024-1.329-1.073V8.5h-.375v.45c-.747.073-1.255.522-1.255 1.158 0 .562.378.92 1.007 1.066l.248.061v1.272c-.384-.058-.639-.27-.696-.563h-.668zm1.36-1.354c-.369-.085-.569-.26-.569-.522 0-.294.216-.514.572-.578v1.1zm.432.746c.449.104.655.272.655.569 0 .339-.257.571-.709.614v-1.195z" />
              <path d="M1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.083q.088-.517.258-1H3a2 2 0 0 0-2-2V3a2 2 0 0 0 2-2h10a2 2 0 0 0 2 2v3.528c.38.34.717.728 1 1.154V1a1 1 0 0 0-1-1z" />
              <path d="M9.998 5.083 10 5a2 2 0 1 0-3.132 1.65 6 6 0 0 1 3.13-1.567" />
            </svg>
            <span>30-Day Money-Back Guarantee</span>
          </div>
          <div className="badge">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="icon"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M10.354 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708 0"
              />
              <path d="m10.273 2.513-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944 1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92.016-1.32a1.89 1.89 0 0 0-1.912-1.911z" />
            </svg>
            <span>Trusted by 5,000+ Students</span>
          </div>
        </motion.div>
      </motion.div>

      {/* Testimonials Section */}
      <motion.section
  className="testimonials"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 1 }}
>
  <h2 className="testimonials-title">What Our Students Say</h2>
  <div className="testimonials-grid">
    {testimonials.map((testimonial) => (
      <motion.div
        key={testimonial.id}
        className="testimonial-card"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: testimonial.id * 0.2 }}
      >
        <div className="verified-badge">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M23 12l-2.44-2.79.34-3.69-3.61-.82-1.89-3.2L12 2.96 8.6 1.5 6.71 4.69 3.1 5.5l.34 3.7L1 12l2.44 2.79-.34 3.7 3.61.82 1.89 3.2L12 21.04l3.4 1.47 1.89-3.2 3.61-.82-.34-3.7L23 12zm-10 5.25l-4.55-4.54 1.41-1.41 3.14 3.14 6.59-6.59 1.41 1.41-8 8z" />
          </svg>
          <span>Verified</span>
        </div>
        <div className="testimonial-header">
          <img src={testimonial.avatar} alt={testimonial.name} className="testimonial-avatar" />
          <div className="testimonial-info">
            <h3 className="testimonial-name">{testimonial.name}</h3>
            <p className="testimonial-role">{testimonial.role}</p>
            <div className="testimonial-rating">
              {[...Array(5)].map((_, i) => (
                <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              ))}
            </div>
          </div>
        </div>
        <p className="testimonial-quote">"{testimonial.quote}"</p>
      </motion.div>
    ))}
  </div>
</motion.section>
    </div>
  );
}