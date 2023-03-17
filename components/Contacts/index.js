import React from "react";
import {
  faFacebook,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEarthAsia, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "../Card";
import PageLayout from "../PageLayout";
import ContactForm from "./ContactForm";

export default function () {
  return (
    <PageLayout id="contacts">
      <h2 className="text-slate-500 text-4xl">Contact Me</h2>
      <div className="p-4 relative h-full flex flex-col lg:flex-row mt-4">
        <div className="flex-1 p-8 py-0">
          <p className="text-slate-500 mb-8 font-light">
            Please feel free to reach out to me through below!
          </p>
          <Card
            icon={<FontAwesomeIcon size="xl" icon={faEnvelope} />}
            label="E-mail"
            value="j.tsendayush@gmail.com"
          />
          <Card
            className="mt-4"
            icon={<FontAwesomeIcon size="xl" icon={faEarthAsia} />}
            label="Based In"
            value="Japan, Tokyo"
          />
          <Card
            className="mt-4"
            label="Socials"
            value={
              <div className="flex mt-2">
                <a
                  href="https://www.linkedin.com/in/tsend-ayush-junai-2aa731b7/#"
                  className="block p-2 rounded transition-all hover:bg-slate-700"
                >
                  <FontAwesomeIcon size="2x" icon={faLinkedin} />
                </a>
                <a
                  href="https://github.com/tseenee"
                  className="block p-2 rounded transition-all hover:bg-slate-700"
                >
                  <FontAwesomeIcon size="2x" icon={faGithub} />
                </a>
                {/* <a
                  href="#"
                  className="block p-2 rounded transition-all hover:bg-slate-700"
                >
                  <FontAwesomeIcon size="2x" icon={faFacebook} />
                </a> */}
              </div>
            }
          />
        </div>
        <ContactForm />
      </div>
    </PageLayout>
  );
}
