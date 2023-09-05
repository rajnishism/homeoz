import React, { useState, useEffect } from "react";

const FAQuestion = () => {
  const [faqs, setFaqs] = useState([]);
  useEffect(() => {
    fetch("contents/faq")
      .then((response) => response.json())
      .then((faqs) => {
        setFaqs(faqs);
      });
  }, [faqs]);

  return (
    <div>
      <div>
        <div className="text-center mt-10">
          <p className="text-primary font-medium">Frequently Asked Qusetions</p>
          <p className="font-bold text-xl"> Get Your General Answer</p>
        </div>
        <div className="flex justify-between md:p-10 items-center flex-col md:flex-row">
          <div className="md:w-1/3 w-8/12  py-10 md:py-0">
            <img
              src="/images/faq.png"
              className="rounded-md drop-shadow-md"
            ></img>
          </div>
          <div className=" bg-gray  md:w-2/3 px-10 h-full flex-col md:items-center  self-start">
            {faqs?.map((fa) => (
              <div className="mt-2">
                <br></br>

                <b className="question">{fa.question}</b>

                <p className="answer">
                  <br></br>
                  {fa.answer}
                  <br></br>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQuestion;
