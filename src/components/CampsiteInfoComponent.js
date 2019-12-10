import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

function RenderCampsite({campsite}) {
    return <div className="col-md-5" >
        <Card >
            <CardImg width="100%" src={campsite.image} alt={campsite.name} />
            {/* <CardImgOverlay> */}
                <CardTitle>{campsite.name}</CardTitle>
            {/* </CardImgOverlay> */}
        </Card>
    </div>
} 

function RenderComments({comments}) {
    console.log(comments)
    if(comments.length){
        return  <div className="col-md-3"><h4>Comments</h4>{comments.map(function(comment){

            return <h1 key={comment.id}>{comment.text}</h1>
        })}</div>
    }  
    return <div>no comments</div>
}



function CampsiteInfo(props) {
    if (props.campsite) {
        return (
            <div className="container">
                <div className="row">
                    <RenderCampsite campsite={props.campsite} />
                    <RenderComments comments={props.campsite.comments} />
                </div>
            </div>
        );
    }
    return <div />;
}

export default CampsiteInfo;