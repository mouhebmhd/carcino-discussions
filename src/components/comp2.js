import React from "react";
import "../styles/comp2.css";
function NumberSection()
{
    return(
        <section className="numbers">
        <h2>Carcino-Disc by the numbers</h2>
        <p>Carcino-Disc is a growing family of millions of diverse people sharing the things they care about most.</p>
        <p className="date">As of December, 2024</p>
        <div className="stats">
            <div className="stat-box">
                <h3>101M+</h3>
                <p>Daily active uniques</p>
            </div>
            <div className="stat-box">
                <h3>379M+</h3>
                <p>Weekly active uniques</p>
            </div>
            <div className="stat-box">
                <h3>100K+</h3>
                <p>Active communities</p>
            </div>
            <div className="stat-box">
                <h3>22B+</h3>
                <p>Posts & comments</p>
            </div>
        </div>
        <button className="press-btn">Carsino-Disc press</button>
    </section>
    );
};
export default NumberSection;