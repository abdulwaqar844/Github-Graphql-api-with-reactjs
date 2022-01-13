import React from "react";
import { useQuery, useMutation } from "@apollo/client";
import { GET_ISSUE_FOR_REPO } from "./GetIssueQuery";
import { useParams } from "react-router-dom";
import Modal from "react-modal";
import { CREATE_ISSUE_FOR_REPO } from "./CreateIssueQuery";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
Modal.setAppElement("#root");
export default function GetIssues() {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [title, setTitle] = React.useState("");
  const [body, setBody] = React.useState("");

  function openModal() {
    setIsOpen(true);
  }
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }
  const { userID, repo } = useParams();
  // console.log(params)
  console.log(userID, repo);
  const { data, loading, error } = useQuery(GET_ISSUE_FOR_REPO, {
    // skip: userName || repoName === "" ? true : false,
    variables: {
      owner: userID ? userID : "",
      name: repo ? repo : "",
    },
  });
  const [mutateFunction] = useMutation(CREATE_ISSUE_FOR_REPO, {
    variables: {
      repositoryId: data?.repository.id,
      title: title ? title : "",
      body: body ? body : "",
    },
  });
  if (error) return <h1>Error</h1>;
  if (!data) {
    <h2>No Data Found</h2>;
  }
  if (loading) {
    return <h1>Loading</h1>;
  }
  console.log("DATA", data);
  // if (data.repository.issues.nodes.length < 1) {
  //   <h2>No Issue Found</h2>;
  // }
  return (
    <div>
      <div
        style={{
          display: "flex ",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1>Issue </h1>
        <div>
          <button onClick={openModal}>Create New Issue</button>
          <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Create Issue</h2>
            <form
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "4px",
                margin: "6px",
              }}
              onSubmit={() => mutateFunction()}
            >
              <input
                style={{
                  padding: "6px 3px",
                  margin: "6px 0px ",
                  border: "2px solid grey",
                  borderRadius: "10px",
                }}
                placeholder="Write Your Issue Title"
                type="text"
                onChange={(e) => setTitle(e.target.value)}
              />{" "}
              <textarea
                style={{
                  padding: "8px 3px",
                  margin: "6px 0px ",
                  border: "2px solid grey",
                  borderRadius: "10px",
                }}
                placeholder="Write Your Issue Here"
                onChange={(e) => setBody(e.target.value)}
              />
              <button
              
              >
                Create Issue
              </button>
            </form>
          </Modal>
        </div>
      </div>
      {data ? (
        data.repository.issues.nodes.map((issue, i) => (
          <div
            key={i}
            style={{
              display: "flex ",

              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <p>{issue.title}</p>
            <p>{new Date(issue.createdAt).toDateString()}</p>
          </div>
        ))
      ) : (
        <h2> No Issue found</h2>
      )}
    </div>
  );
}
