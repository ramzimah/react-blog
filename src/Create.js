import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("ramzi");
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };
    setIsPending(true);
    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("new blog added");
      setIsPending(false);
      history.push("/");
    });
  };
  return (
    <div className="create">
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          required
        ></input>
        <label>Blog body:</label>
        <textarea
          value={body}
          onChange={(e) => {
            setBody(e.target.value);
          }}
          required
        ></textarea>
        <label>Blog author:</label>
        <select
          value={author}
          onChange={(e) => {
            setAuthor(e.target.value);
          }}
        >
          <option value="ramzi"> ramzi</option>
          <option value="ramzimh">ramzimh</option>
        </select>
        {!isPending && <button>add blog</button>}
        {isPending && <button>adding blog...</button>}
      </form>
    </div>
  );
};

export default Create;
