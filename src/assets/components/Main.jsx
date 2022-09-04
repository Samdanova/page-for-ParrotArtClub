import React from "react";
import ArtCard from "./ArtCard";

import Artist1 from "../img/Artist1.png";
import Artist2 from "../img/Artist2.png";
import Artist3 from "../img/Artist3.png";
import Artist4 from "../img/Artist4.png";
import Art1 from "../img/Artwork1.png";
import Art2 from "../img/Artwork2.png";
import Art3 from "../img/Artwork3.png";
import Art4 from "../img/Artwork4.png";

const ArtCards = [
    {
        nameArtist: "George Dillan",
        description: "Forest silence",
        artWork: Art1,
        photo: Artist1,
    }, {
        nameArtist: "Peggy Wood",
        description: "Still life V",
        artWork: Art2,
        photo: Artist2,
    }, {
        nameArtist: "Alice Gordan",
        description: "Surrounded",
        artWork: Art3,
        photo: Artist3,
    }, {
        nameArtist: "Timothy Taylor",
        description: "Mountain landscape",
        artWork: Art4,
        photo: Artist4,
    }
]

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
            <div className="main__artWorks">
                {
                    ArtCards.map(
                        (art) => <ArtCard
                            nameArtist={art.nameArtist}
                            description={art.description}
                            artWork={art.artWork}
                            photo={art.photo}></ArtCard>
                    )
                }
            </div>
        </div>
    )
}

export default Main