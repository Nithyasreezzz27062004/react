import { useState } from "react";
import vijay_home from "./assets/fruit.jpg";
import "./Home.css";

function Home(props) {

    const [count, setCount] = useState(0);
    const [theme, setTheme] = useState("black");
    const [color, setColor] = useState("red");
    const [colorsArr, setColorsArr] = useState([]);

    return (
        <>
            <div className="Home" id="Home">

                <div
                    className="img"
                    style={{ backgroundColor: theme }}
                    onClick={() => {
                        setTheme(theme === "black" ? "white" : "black");
                    }}
                >
                    <img src={vijay_home} alt="Vijay" />
                </div>

                <div className="content">

                    <p className="para">
                        Chandrasekaran Joseph Vijay (born 22 June 1974)
                        {props.summa} is an Indian politician and former
                        actor. He is the founder and president of the
                        political party Tamilaga Vettri Kazhagam (TVK).
                    </p>

                    <button
                        onClick={() => setCount(count + 1)}
                        className="btn btn-danger"
                    >
                        Count : {count}
                    </button>

                    <input
                        type="text"
                        className="input"
                        value={color}
                        onChange={(event) => {
                            setColor(event.target.value);
                        }}
                    />

                    <br />

                    <button
                        className="btn btn-success m-4"
                        onClick={() => {
                            setColorsArr((prev) => {
                                return [...prev, color];
                            });
                        }}
                    >
                        Submit
                    </button>

                    <ol>
                        {
                            colorsArr.map((val, ind) => {
                                return (
                                    <li
                                        style={{ backgroundColor: val }}
                                        key={ind}
                                    >
                                        {val}
                                    </li>
                                );
                            })
                        }
                    </ol>

                </div>
            </div>
        </>
    );
}

export default Home;