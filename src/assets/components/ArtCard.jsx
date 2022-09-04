import React from "react";
import { Avatar, Card } from 'antd';

const { Meta } = Card;

const ArtCard = (props) => (
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

)

export default ArtCard;