import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

const contact = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <section className="contact-page">
        <article className="contact-form">
          <h3>kom i kontakt </h3>
          <form action="https://formspree.io/f/xqkgerbg" method="POST">
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="namn"
                className="form-control"
              />
              <input
                type="email"
                placeholder="email"
                name="email"
                className="form-control"
              />
              <textarea
                name="message"
                rows="5"
                placeholder="meddalnde"
                className="form-control"
              ></textarea>
            </div>
            <button type="submit" className="submit-btn btn">
              skicka
            </button>
          </form>
        </article>
      </section>
    </Layout>
  )
}

export default contact