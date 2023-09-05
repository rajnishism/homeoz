import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ContentChange = () => {
  const [diseases, setDiseases] = useState([]);
  const [testinomials, setTestinomials] = useState([]);
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch("../contents/contacts")
      .then((response) => response.json())
      .then((contacts) => {
        setContacts(contacts);
      });
  }, []);

  useEffect(() => {
    fetch("../contents/diseases")
      .then((response) => response.json())
      .then((diseases) => {
        setDiseases(diseases);
      });
  }, [diseases]);

  useEffect(() => {
    fetch("../contents/testinomials")
      .then((response) => response.json())
      .then((testinomial) => {
        setTestinomials(testinomial);
        console.log(testinomial);
      });
  }, []);

  const [faqs, setFaqs] = useState([]);
  useEffect(() => {
    fetch("../contents/faq")
      .then((response) => response.json())
      .then((faqs) => {
        setFaqs(faqs);
      });
  }, [faqs]);

  const updateDisease = (event, disease) => {
    const id = disease._id;
    console.log(disease._id);
    const newName = document.getElementById(disease._id).value;
    const requestOptions = {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: newName,
        image: "hair_and_skin.png",
      }),
    };
    console.log(id);
    const url = "../contents/disease/" + id;
    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((data) => this.setState({ postId: data.id }));
    window.location.reload(false);
  };

  const updateContact = (event, contactId) => {
    console.log(contactId);
    const newDetail = document.getElementById(contactId).value;
    const requestOptions = {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        details: newDetail,
      }),
    };

    const url = "../contents/contacts/" + contactId;
    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((data) => this.setState({ postId: data.id }));
    window.location.reload(false);
  };
  const deleteDisease = (event, disease) => {
    const id = disease._id;
    const url = "../contents/diseases/" + id;
    console.log(url);
    fetch(url, { method: "DELETE" }).then(() => console.log("done"));
  };

  const updateTestinomial = (event, testinomialId) => {
    const newTestinomialId = testinomialId + "testinomial";
    console.log(newTestinomialId);
    const newTestinomial = document.getElementById(newTestinomialId).value;

    console.log(newTestinomial);
    const newPersonId = testinomialId + "person";
    console.log(newPersonId);
    const newPerson = document.getElementById(newPersonId).value;
    console.log(newPerson);

    const requestOptions = {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        testinomial: newTestinomial,
        person: newPerson,
      }),
    };

    const url = "../contents/testinomials/" + testinomialId;
    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((data) => this.setState({ postId: data.id }));
    window.location.reload(false);
  };

  const deleteTestinomial = (event, testinomialId) => {
    const url = "../contents/testinomials/" + testinomialId;
    console.log(url);
    fetch(url, { method: "DELETE" }).then(() => console.log("done"));
    window.location.reload(false);
  };

  const updateFaq = (event, faqId) => {
    console.log(faqId);
    const questionId = faqId + "question";
    const answerId = faqId + "answer";
    const newQuestion = document.getElementById(questionId).value;
    const newAnswer = document.getElementById(answerId).value;
    console.log(newQuestion);
    console.log(newAnswer);
    const requestOptions = {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        question: newQuestion,
        answer: newAnswer,
      }),
    };

    const url = "../contents/faq/" + faqId;
    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((data) => this.setState({ postId: data.id }));
    window.location.reload(false);
  };

  const deleteFaq = (event, faqId) => {
    const url = "../contents/faq/" + faqId;
    console.log(url);
    fetch(url, { method: "DELETE" }).then(() => console.log("done"));
  };

  const addDisease = () => {
    const diseaseName = document.getElementById("addDisease").value;
    if (!diseaseName) {
      alert("Please fill the disease name field");
    } else {
      console.log(diseaseName);
      const url = "../contents/diseases/";
      console.log(url);
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: diseaseName, image: "hair_and_skin.png" }),
      };
      fetch(url, requestOptions)
        .then((response) => response.json())
        .then(console.log("done"));

      window.location.reload(false);
    }
  };

  const addTestinomial = () => {
    const newTestinomial = document.getElementById("addTestinomial").value;
    const newTestinomialPerson = document.getElementById(
      "addTestinomialPerson"
    ).value;
    if (!newTestinomial) {
      alert("testinomial field is empty !");
    } else if (!newTestinomialPerson) {
      alert("person field is empty");
    } else {
      console.log(newTestinomial);
      console.log(newTestinomialPerson);
      const url = "../contents/testinomials/";
      console.log(url);
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          testinomial: newTestinomial,
          person: newTestinomialPerson,
        }),
      };
      fetch(url, requestOptions)
        .then((response) => response.json())
        .then(console.log("done"));

      window.location.reload(false);
    }
  };

  const addFaq = () => {
    const newQuestion = document.getElementById("addQuestion").value;
    const newAnswer = document.getElementById("addAnswer").value;
    if (!newQuestion) {
      alert("please enter a question ");
    } else if (!newAnswer) {
      alert("please add answer");
    } else {
      console.log(newQuestion);
      console.log(newAnswer);
      const url = "../contents/faq/";
      console.log(url);
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          question: newQuestion,
          answer: newAnswer,
        }),
      };
      fetch(url, requestOptions)
        .then((response) => response.json())
        .then(console.log("done"));

      window.location.reload(false);
    }
  };

  return (
    <div>
      <div className="px-10 sm:flex items-center justify-between">
        <div className="flex items-center">
          <img src="/images/logo.png" className="w-20 inline-block"></img>
          <h2 className="inline text-3xl font-semibold">Homeoz</h2>
        </div>
        <div className="flex items-center ">
          <div className="flex items-center bg-secondary py-2 px-4 mr-2">
            <h2 className="">
              {" "}
              <span className="font-bold text-xl"> &larr;</span> Back to main
              Website
            </h2>
          </div>

          <div className="bg-secondary  p-2 hover:bg-primary hover:text-white">
            Logout
          </div>
        </div>
      </div>

      <div className="w-80 h-10 flex  sm:mx-auto mx-10 my-10 sm:my-0">
        <Link to="../dashboard/contentUpdate">
          <div className="w-28 h-10 bg-secondary  hover:bg-primary mr-2 text-xs justify-center flex items-center">
            {" "}
            <div> Contents Update</div>
          </div>
        </Link>
        <Link to="../dashboard/blogs">
          <div className="w-20 h-10 bg-secondary  hover:bg-primary mr-2 text-xs justify-center flex items-center">
            Blogs
          </div>
        </Link>
        <Link to="../dashboard/appointments">
          <div className="w-28 h-10 bg-secondary hover:bg-primary mr-2 text-xs justify-center flex items-center">
            Appointment
          </div>
        </Link>
      </div>
      <div className="mx-10 mt-4 border-b-2 border-primary  font-bold text-lg ">
        <div>Website Content Update</div>
      </div>

      <div className="mx-10 my-4 py-2 inline-block border-b-2 border-primary">
        <div className="text-xs">Edit and Update </div>
        <div className="text-lg font-bold">DISEASES</div>
      </div>
      <div className="flex items-center te justify-between mx-10 my-4">
        <div className="text-black">
          <input
            className=" border-2 p-2 border-black "
            defaultValue=""
            placeholder="Add new Disease"
            id="addDisease"
          ></input>
        </div>
        <div
          className="bg-yellow-400 p-4 text-sm "
          onClick={() => addDisease()}
        >
          submit <span className="text-2xl font-bold">+</span>
        </div>
      </div>

      <table className="mx-10">
        <tr className="">
          <th className="border p-2">Disease Name </th>
          <th className="border p-2">Update </th>
          <th className="border p-2">Delete </th>
        </tr>

        {diseases.map((disease) => (
          <tr>
            <td className="border p-2 w-full">
              <textarea
                className="border-2	rounded-sm textarea"
                type="text"
                id={disease._id}
                name=""
                defaultValue={disease.name}
              ></textarea>
            </td>
            <td className="border p-2">
              <button
                className="bg-green-600 text-center p-2 text-sm text-white rounded-sm hover:shadow-md"
                onClick={(e) => updateDisease(e, disease)}
              >
                <div className="" type="submit" value="update">
                  Update
                </div>
              </button>{" "}
            </td>
            <td className="border p-2">
              {" "}
              <button
                className="bg-red-600 p-2 text-sm text-white rounded-sm"
                onClick={(e) => deleteDisease(e, disease)}
                id={disease._id}
              >
                Delete
              </button>{" "}
            </td>
          </tr>
        ))}
        <tr>
          <td className="border p-2 ">{}</td>
          <td className="border p-2">
            <div className="bg-green-600 text-center p-2 text-sm text-white rounded-sm">
              Update
            </div>{" "}
          </td>
          <td className="border p-2">
            {" "}
            <div className="bg-red-600 p-2 text-sm text-white rounded-sm">
              Delete
            </div>{" "}
          </td>
        </tr>
      </table>
      <hr></hr>
      <div className="flex items-center te justify-between mx-10 my-4">
        <div>
          <input
            className="border-2 p-2 border-black w-94"
            defaultValue=""
            placeholder="Add new Testinomial"
            id="addTestinomial"
          ></input>
          <input
            className=" border-2 p-2 border-black mx-2 w-72"
            defaultValue=""
            placeholder="Person Name"
            id="addTestinomialPerson"
          ></input>
        </div>
        <div
          className="bg-yellow-400 p-4 text-sm "
          onClick={() => addTestinomial()}
        >
          Add New Testinomials <span className="text-2xl font-bold">+</span>
        </div>
      </div>
      <table className="mx-10 border-collapse">
        <tr className="">
          <th className="border p-2 ">Tesinomials Name </th>
          <th className="border p-2 ">Person Details </th>
          <th className="border p-2 ">Update </th>
          <th className="border p-2 ">Delete </th>
        </tr>
        <h1>{testinomials.length}</h1>
        {testinomials.map((testinomial) => (
          <tr>
            <td className="border p-2">
              <textarea
                className="border-2	rounded-sm textarea h-full"
                type="text"
                id={testinomial._id + "testinomial"}
                name=""
                defaultValue={testinomial.testinomial}
              ></textarea>
            </td>
            <td className="border p-2 w-full h-full">
              <textarea
                className="border-2	rounded-sm textarea w-full"
                type="text"
                id={testinomial._id + "person"}
                name=""
                defaultValue={testinomial.person}
              ></textarea>
            </td>
            <td className="border p-2">
              <button
                className="bg-green-600 text-center p-2 text-sm text-white rounded-sm hover:shadow-md"
                onClick={(e) => updateTestinomial(e, testinomial._id)}
              >
                <div className="" type="submit" value="update">
                  Update
                </div>
              </button>
            </td>
            <td className="border p-2">
              {" "}
              <button
                className="bg-red-600 p-2 text-sm text-white rounded-sm"
                onClick={(e) => deleteTestinomial(e, testinomial._id)}
              >
                Delete
              </button>{" "}
            </td>
          </tr>
        ))}
      </table>
      <hr></hr>
      <div className="flex items-center te justify-between mx-10 my-4">
        <div>
          <input
            className="border-2 p-2 border-black mr-2"
            defaultValue=""
            placeholder="add new Question"
            id="addQuestion"
          ></input>
          <input
            className=" border-2 p-2 border-black"
            placeholder="add new Answer"
            defaultValue=""
            id="addAnswer"
          ></input>
        </div>
        <div className="bg-yellow-400 p-4 text-sm " onClick={() => addFaq()}>
          Add New FAQ <span className="text-2xl font-bold">+</span>
        </div>
      </div>
      <div className="">
        <table className="mx-10 ">
          <tr className="">
            <th className="border p-2 w-1/3">Question </th>
            <th className="border p-2 w-full ">Answer </th>
            <th className="border p-2">Update </th>
            <th className="border p-2">Delete </th>
          </tr>

          {faqs.map((faq) => (
            <tr>
              <td className="border p-2">
                <textarea
                  className="border-2	rounded-sm textarea w-full p-2 h-auto"
                  type="text"
                  id={faq._id + "question"}
                  name=""
                  defaultValue={faq.question}
                ></textarea>
              </td>
              <td className="border p-2">
                <textarea
                  className="border-2	rounded-sm textarea w-full p-2 h-auto"
                  type="text"
                  id={faq._id + "answer"}
                  name=""
                  defaultValue={faq.answer}
                ></textarea>
              </td>
              <td className="border p-2">
                <button
                  className="bg-green-600 text-center p-2 text-sm text-white rounded-sm hover:shadow-md"
                  onClick={(e) => updateFaq(e, faq._id)}
                >
                  <div className="" type="submit" value="update">
                    Update
                  </div>
                </button>
              </td>
              <td className="border p-2">
                {" "}
                <button
                  className="bg-red-600 p-2 text-sm text-white rounded-sm"
                  onClick={(e) => deleteFaq(e, faq._id)}
                >
                  Delete
                </button>{" "}
              </td>
            </tr>
          ))}
        </table>
      </div>

      <hr></hr>
      <table className="mx-10 my-10">
        <tr className="">
          <th className="border p-2">Mode of Communication </th>
          <th className="border p-2">Contacts </th>
          <th className="border p-2">Update </th>
        </tr>

        {contacts.map((contact) => (
          <tr>
            <td className="border p-2">
              <div
                className="	rounded-sm textarea  p-2 h-auto"
                type="text"
                id={"question"}
                name=""
                defaultValue={contact.mode}
              >
                {contact.mode}
              </div>
            </td>
            <td className="border p-2 w-full">
              <textarea
                className="border-2	 textarea w-full p-2 h-auto"
                type="text"
                id={contact._id}
                name=""
                defaultValue={contact.details}
              ></textarea>
            </td>
            <td className="border p-2">
              <button
                className="bg-green-600 text-center p-2 text-sm text-white rounded-sm hover:shadow-md"
                onClick={(e) => updateContact(e, contact._id)}
              >
                <button className="" type="submit" value="update">
                  Update
                </button>
              </button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default ContentChange;
