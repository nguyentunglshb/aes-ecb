import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faExclamationCircle,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";

function App() {
  const [keyType, setKeyType] = useState(128);
  const [keyString, setKeyString] = useState("");
  // const [trueKey, setTrueKey] = useState(false);

  const keyRef = useRef();
  const keyStringRef = useRef();

  useEffect(() => {
    keyRef.current.value = "";
    keyRef.current.maxLength = 16 + (keyType - 128) / 8;
    keyStringRef.current.classList = "form-control";
  }, [keyType]);

  useEffect(() => {
    console.log(keyRef.current.value.length, keyString.length);

    if (keyType === 128) {
      keyString.length === 16
        ? (keyStringRef.current.classList = "form-control success")
        : (keyStringRef.current.classList = "form-control error");
    } else if (keyType === 192) {
      keyString.length === 24
        ? (keyStringRef.current.classList = "form-control success")
        : (keyStringRef.current.classList = "form-control error");
    } else {
      keyString.length === 32
        ? (keyStringRef.current.classList = "form-control success")
        : (keyStringRef.current.classList = "form-control error");
    }
  }, [keyString]);

  const onKeyChange = (e) => {
    const { value } = e.target;
    setKeyType(parseInt(value));
  };

  const onKeyStringChange = (e) => {
    const { value } = e.target;
    setKeyString(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Submited");
  };

  return (
    <div className="App">
      <div className="container">
        <div className="header">
          <h2>Encrypt/Decrypt AES-ECB</h2>
        </div>
        <form id="form" className="form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="keyType">Choose Key type </label>
            {/* <input type="text" placeholder="florinpop17" id="username" /> */}
            <select name="keyType" id="keyType" onChange={onKeyChange}>
              <option value="128">128</option>
              <option value="192">192</option>
              <option value="256">256</option>
            </select>
            <FontAwesomeIcon
              className="icon check-circle"
              icon={faCheckCircle}
            />
            <FontAwesomeIcon
              className="icon exclamation-circle"
              icon={faExclamationCircle}
            />

            <small>Error message</small>
          </div>
          <div className="form-control" ref={keyStringRef}>
            <label htmlFor="keyString">Key String</label>
            <input
              ref={keyRef}
              type="text"
              placeholder="Enter your Key here..."
              id="keyString"
              onChange={onKeyStringChange}
            />
            <FontAwesomeIcon
              className="icon check-circle"
              icon={faCheckCircle}
            />
            <FontAwesomeIcon
              className="icon exclamation-circle"
              icon={faExclamationCircle}
            />
            <small>Error Key</small>
          </div>
          <div className="form-control">
            <label htmlFor="username">Input String</label>
            <input
              type="text"
              placeholder="Enter your String here..."
              id="password"
            />
            <FontAwesomeIcon
              className="icon check-circle"
              icon={faCheckCircle}
            />
            <FontAwesomeIcon
              className="icon exclamation-circle"
              icon={faExclamationCircle}
            />
            <small>Error message</small>
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default App;
