import React from "react";
import '../styles/main.scss';
import { Avatar, Card } from 'antd';
import Trash from "../img/Delete.png"
const { Meta } = Card;



const ArtCard = (props) => (
    <div className="artCard_container">
        <div className="artCard_trash" ><img className="artCard_trash" src={Trash} alt="trash" /></div>
        <Card
            style={{ width: 330 }}
            cover={
                <img
                    alt="example"
                    src={props.artWork}
                />
            }
        >
            <Meta
                avatar={<Avatar src={props.photo} />}
                title={props.nameArtist}
                description={props.description}
            />
        </Card>
    </div>
)

export default ArtCard;