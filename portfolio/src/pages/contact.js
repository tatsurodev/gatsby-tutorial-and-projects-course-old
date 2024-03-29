import React from "react"
import Layout from "../components/Layout"

const contact = () => {
  return (
    <Layout>
      <section className="contact-page">
        <article className="contact-form">
          <h3>get in touch</h3>
          <form method="POST" action="https://formspree.io/f/xrgoydko">
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="name"
                className="form-control"
              />
              <input
                type="email"
                name="email"
                placeholder="email"
                className="form-control"
              />
              <textarea
                name="message"
                rows="10"
                placeholder="message"
                className="form-control"
              ></textarea>
            </div>
            <button className="submit-btn btn">submit here</button>
          </form>
        </article>
      </section>
    </Layout>
  )
}

export default contact
