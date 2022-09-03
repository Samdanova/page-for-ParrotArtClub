import React from "react";


function Main() {
    return (
        <div className="main_container">
            <div className="main__h1">Artworks</div>
            <select name="category" className="main__category">
                <option value="Sculpture">Sculpture</option>
                <option value="Architecture">Architecture</option>
                <option value="Landscape">Landscape</option>
                <option value="Graphic">Graphic arts</option>
                <option value="Portrait">Portrait</option>
            </select>
            <input type="text" placeholder="Start type a name" />

        </div>
    )
}

export default Main