import React from "react";
import ArtCard from "./ArtCard";
import '../styles/main.scss';

import Artist1 from "../img/Artist1.png";
import Artist2 from "../img/Artist2.png";
import Artist3 from "../img/Artist3.png";
import Artist4 from "../img/Artist4.png";
import Art1 from "../img/Artwork1.png";
import Art2 from "../img/Artwork2.png";
import Art3 from "../img/Artwork3.png";
import Art4 from "../img/Artwork4.png";
import usePagination from "./usePagination";

const ArtCards = [
    {
        nameArtist: "George Dillan",
        description: "Forest silence",
        artWork: Art1,
        photo: Artist1
    }, {
        nameArtist: "Peggy Wood",
        description: "Still life V",
        artWork: Art2,
        photo: Artist2
    }, {
        nameArtist: "Alice Gordan",
        description: "Surrounded",
        artWork: Art3,
        photo: Artist3
    }, {
        nameArtist: "Timothy Taylor",
        description: "Mountain landscape",
        artWork: Art4,
        photo: Artist4
    }, {
        nameArtist: "George Dillan",
        description: "Forest",
        artWork: Art1,
        photo: Artist1
    }, {
        nameArtist: "Peggy Wood",
        description: "Still",
        artWork: Art2,
        photo: Artist2
    }, {
        nameArtist: "Alice Gordan",
        description: "Surrounded version2",
        artWork: Art3,
        photo: Artist3
    }, {
        nameArtist: "Timothy Taylor",
        description: "Mountain",
        artWork: Art4,
        photo: Artist4
    }
]

function Main() {

    const {
        firstContentIndex,
        lastContentIndex,
        nextPage,
        prevPage,
        page,
        setPage,
        totalPages
    } = usePagination({ contentPerPage: 4, count: ArtCards.length });
    return (
        <div className="main_container">
            <div className="main__header">
                <div className="main__h1">Artworks</div>
                <div className="main__h1">588</div>
            </div>
            <select name="category" className="main__category">
                <option disabled="disabled">Category</option>
                <option value="Sculpture">Sculpture</option>
                <option value="Architecture">Architecture</option>
                <option value="Landscape">Landscape</option>
                <option value="Graphic">Graphic arts</option>
                <option value="Portrait">Portrait</option>
            </select>
            <input className="main__name" type="text" placeholder="Start type a name" />
            <div className="main__artWorks">
                {
                    ArtCards
                        .slice(firstContentIndex, lastContentIndex)
                        .map(
                            (art) => <ArtCard
                                key={art.description}
                                nameArtist={art.nameArtist}
                                description={art.description}
                                artWork={art.artWork}
                                photo={art.photo}>
                            </ArtCard>
                        )
                }
            </div>

            <div className="pagination">

                <button onClick={prevPage} className="page">
                    &lt;
                </button>
                {
                    [...Array(totalPages).keys()].map((el) => (
                        <button
                            onClick={() => setPage(el + 1)}
                            key={el}
                            className={`page ${page === el + 1
                                ? "active"
                                : ""}`}>
                            {el + 1}
                        </button>
                    ))
                }
                <button onClick={nextPage} className="page">
                    &gt;
                </button>
                <p className="text">
                    {firstContentIndex + 1}
                    - {lastContentIndex}
                    of {ArtCards.length}
                    Results
                </p>
            </div>
        </div>
    )
}

export default Main