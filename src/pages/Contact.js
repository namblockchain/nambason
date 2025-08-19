import React from "react";
import TopMenu from "../components/TopMenu";

const Contact = () => {
  return (
    <div id="contact">
      <TopMenu data={true} />
      <div className="content">
        <form action="">
          <h3>Leave us your info</h3>
          <div className="inputItem">
            <input type="text" placeholder="Your Name" />
          </div>
          <div className="inputItem">
            <input type="text" placeholder="Your Email" />
          </div>
          <div className="inputItem">
            <textarea name="" id="" placeholder="Your Message"></textarea>
          </div>
          <button type="button">SUBMIT</button>
        </form>
        <div className="address">
          <div className="addressItem">
            <h3>ADDRESS</h3>
            <p>
              1 Nguyễn Cơ Thạch, An Lợi Đông Ward, Ho Chi Minh City, Vietnam
            </p>
          </div>
          <div className="addressItem">
            <h3>PHONE</h3>
            <p>
              <a href="tel:+84903052135">+84 903 052 135</a>
            </p>
          </div>
          <div className="addressItem">
            <h3>EMAIL</h3>
            <p>
              <a href="mailto:namihome.saigon@gmail.com">
                namihome.saigon@gmail.com
              </a>
            </p>
          </div>
          <div className="addressItem">
            <h3>LOCATION</h3>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.586137507486!2d106.72354837605421!3d10.766344889381815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317525f5294176b9%3A0x9bb6aa25263cf0f1!2zMSBOZ3V54buFbiBDxqEgVGjhuqFjaCwgQW4gTOG7o2kgxJDDtG5nLCBUaOG7pyDEkOG7qWMsIEjhu5MgQ2jDrSBNaW5oLCBWaWV0bmFt!5e0!3m2!1sen!2s!4v1753421207332!5m2!1sen!2s"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
