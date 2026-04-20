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
              102C Cống Quỳnh, Phường Bến Thành, Thành Phố Hồ Chí Minh, Việt Nam
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
              <a href="mailto:namsaigonbason@gmail.com">
                namsaigonbason@gmail.com
              </a>
            </p>
          </div>
          <div className="addressItem">
            <h3>LOCATION</h3>
            <iframe
              title="Bản đồ vị trí"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5573.18938683177!2d106.68807717636703!3d10.764839189383194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f1706aa5555%3A0x5e96ec20419bd0b3!2zMTAyQyDEkC4gQ-G7kW5nIFF14buzbmgsIFBoxrDhu51uZyBQaOG6oW0gTmfFqSBMw6NvLCBC4bq_biBUaMOgbmgsIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e1!3m2!1svi!2s!4v1776326431135!5m2!1svi!2s"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
