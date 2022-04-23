import "./styles.css";
import { useState, useEffect } from "react";
export default function App() {
  const url = "https://jsonplaceholder.typicode.com/posts";

  const [list, setList] = useState([]);
  const [show, setShow] = useState(false);
  const [id, setId] = useState("");

  const fetchData = async () => {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    setList(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const expandData = (id) => {
    setId(id);
    setShow(!show);
  };

  return (
    <div>
      hey
      {list.map((element) => {
        return (
          <div key={element.id}>
            {element.title}
            <button
              onClick={() => {
                expandData(element.id);
              }}
            >
              {" "}
              +{" "}
            </button>

            {show ? (
              <>
                {element.id === id ? (
                  <div className="details">
                    <strong>{element.body}</strong>
                  </div>
                ) : (
                  ""
                )}
              </>
            ) : (
              ""
            )}
          </div>
        );
      })}
    </div>
  );
}
