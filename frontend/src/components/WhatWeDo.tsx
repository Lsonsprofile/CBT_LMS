import './WhatWeDo.css'

const WhatWeDo = () => {
  return (
    <section className="kt-wwd" id="what-we-do" aria-labelledby="kt-wwd-heading">
      <span className="kt-wwd__blob kt-wwd__blob--top" aria-hidden="true" />
      <span className="kt-wwd__blob kt-wwd__blob--bottom" aria-hidden="true" />

      <div className="kt-wwd__container">
        <div className="kt-wwd__intro">
          <p className="kt-wwd__eyebrow">
            <span aria-hidden="true" />
            What We Do
          </p>

          <h2 className="kt-wwd__title" id="kt-wwd-heading">
            Practical technology skills for
            <span> tomorrow’s innovators.</span>
          </h2>

          <p className="kt-wwd__description">
            Our Mobile ICT Program is designed to equip pupils with essential
            digital skills for the future through practical, engaging,
            technology-based learning.
          </p>

          <div className="kt-wwd__programme">
            <div className="kt-wwd__programme-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <rect x="3" y="4" width="18" height="13" rx="2" />
                <path d="M8 21h8M12 17v4M7 9h10M7 12h6" />
              </svg>
            </div>
            <div>
              <h3>Learning that comes to schools</h3>
              <p>
                Our team visits schools with <strong>100 laptops (one hundred)</strong>
                to deliver hands-on learning experiences.
              </p>
            </div>
          </div>
        </div>

        <div className="kt-wwd__services" aria-label="Mobile ICT Program learning areas">
          <article className="kt-wwd__card kt-wwd__card--blue">
            <div className="kt-wwd__icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="m8 8-4 4 4 4M16 8l4 4-4 4M14 5l-4 14" />
              </svg>
            </div>
            <div>
              <h3>Coding &amp; Graphics Design</h3>
              <p>Build problem-solving skills and bring creative ideas to life.</p>
            </div>
          </article>

          <article className="kt-wwd__card kt-wwd__card--purple">
            <div className="kt-wwd__icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M9 3h6M12 3v3M5 8l2 2M19 8l-2 2M7 14a5 5 0 1 1 10 0c0 2-1 3-2 4H9c-1-1-2-2-2-4ZM9 21h6M10 18v3M14 18v3" />
              </svg>
            </div>
            <div>
              <h3>Scratch Programming</h3>
              <p>Learn coding concepts by creating stories, games and animations.</p>
            </div>
          </article>

          <article className="kt-wwd__card kt-wwd__card--purple">
            <div className="kt-wwd__icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M12 3 14 9l6 2-6 2-2 6-2-6-6-2 6-2 2-6Z" />
                <path d="m19 15 1 2 2 1-2 1-1 2-1-2-2-1 2-1 1-2Z" />
              </svg>
            </div>
            <div>
              <h3>Artificial Intelligence</h3>
              <p>Discover AI, automation and how smart technology can help us.</p>
            </div>
          </article>

          <article className="kt-wwd__card kt-wwd__card--blue">
            <div className="kt-wwd__icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <rect x="3" y="4" width="18" height="16" rx="2" />
                <path d="M7 9h10M7 13h4M7 16h7M16 13h1" />
              </svg>
            </div>
            <div>
              <h3>More Essential ICT Skills</h3>
              <p>Explore relevant digital tools and skills for a changing world.</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

export default WhatWeDo
