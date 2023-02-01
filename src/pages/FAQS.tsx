import { useState } from "react";
import Button from "../components/button/CustomButton";
import arrowIcon from "../assets/icon-arrow.svg";

const Faqs: React.FC = () => {
    const [question1, setQuestion1] = useState(false);
    const [question2, setQuestion2] = useState(false);
    const [question3, setQuestion3] = useState(false);
    const [question4, setQuestion4] = useState(false);
  
    const handleQuestion1 = () => {
      setQuestion1(!question1);
    };
  
    const handleQuestion2 = () => {
      setQuestion2(!question2);
    };
  
    const handleQuestion3 = () => {
      setQuestion3(!question3);
    };
  
    const handleQuestion4 = () => {
      setQuestion4(!question4);
    };

  return (
    <main className="flex flex-col justify-center items-center pt-24 px-6 lg:px-0">
      <h1 className="text-3xl lg:text-2xl font-bold text-center leading-10">
        Frequently Asked Questions
      </h1>
      <p className="px-2 text-center w-96 lg:w-Downwidth lg:text-base lg:leading-9 py-6 leading-8 text-text text-base">
        Here are some of our FAQs. If you have any other questions you'd like
        answered please feel free to email us.
      </p>
      <ul className="pt-6 lg:w-Extensionwidth w-96 px-4 lg:text-sm cursor-pointer">
        <section className="flex flex-col border-b-2 lg:border-t-2">
          <li
            className="flex justify-between items-center py-4"
            onClick={handleQuestion1}
          >
            What is Bookmark?
            <span>
              <img src={arrowIcon} alt="arrow" />
            </span>
          </li>
          <section>
            <p className=" w-full leading-8 text-sm">{question1 ? "Sometimes referred to as favorites or saved links" : null}</p>
          </section>
        </section>

        <section className="flex flex-col border-b-2">
          <li
            className="flex justify-between items-center py-4"
            onClick={handleQuestion2}
          >
            How can I request a new browser?
            <span>
              <img src={arrowIcon} alt="arrow" />
            </span>
          </li>
          <section>
            <p className="w-full text-sm leading-8">{question2 ? "Check out our documentation to get a full description on how to use our products" : null}</p>
          </section>
        </section>

        <section className="flex flex-col border-b-2">
          <li
            className="flex justify-between items-center py-4"
            onClick={handleQuestion3}
          >
            Is there a mobile app?
            <span>
              <img src={arrowIcon} alt="arrow" />
            </span>
          </li>
          <section>
            <p className="w-full leading-8 text-sm">{question3 ? "Yes of course! The mobile application can be accessed from Google playstore or Applestore" : null}</p>
          </section>
        </section>

        <section className="flex flex-col border-b-2">
          <li
            className="flex justify-between items-center py-4"
            onClick={handleQuestion4}
          >
            What about other Chromium browsers?
            <span>
              <img src={arrowIcon} alt="arrow" />
            </span>
          </li>
          <section>
            <p className="w-full leading-8 text-sm">{question4 ? "We can't say, but we know for sure that our product can meet all your needs." : null}</p>
          </section>
        </section>
      </ul>
      <section className="pt-14">
        <Button text="More Info" />
      </section>
    </main>
  );
};
export default Faqs;