import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Button, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderCampsite({campsite}) {
    return <div className="col-md-5" >
        <Card >
            <CardImg width="100%" src={campsite.image} alt={campsite.name} />
             <CardImgOverlay> 
                <CardTitle>{campsite.name}</CardTitle>
             </CardImgOverlay> 
        </Card>
    </div>
} 

return (
    <div className="container">
        <div className="row">
            <div className="col">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/directory">Directory</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.campsite.name}</BreadcrumbItem>
                </Breadcrumb>
                <h2>{props.campsite.name}</h2>
                <hr />
            </div>
        </div>
        <div className="row">
            <RenderCampsite campsite={props.campsite} />
            <RenderComments comments={props.comments} />
        </div>
    </div>
);

function RenderComments({comments}) {
    console.log(comments)
    if(comments.length){
        return  <div className="col-md-3"><h4>Comments</h4>{comments.map(function(comment){

            return <h1 key={comment.id}>{comment.text}</h1>
        })}</div>
    }  
    return <div>no comments</div>
}

class CommentForm extends React.Component{
    render(){
        return(
           <div> 
                <Button className='primary'><i class="fas fa-pencil-alt">Submit Comment</i></Button>
            </div>
        );
    }
}

function CampsiteInfo(props) {
    if (props.campsite) {
        return (
            <div className="container">
                <div className="row">
                <div className="row">
                    <div className="col">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/directory">Directory</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.campsite.name}</BreadcrumbItem>
                    </Breadcrumb>
                        <h2>{props.campsite.name}</h2>
                        <hr />
                    </div>
                </div>
                    <RenderCampsite campsite={props.campsite} />
                    <RenderComments comments={props.campsite.comments} />
                    <CommentForm />
                </div>
            </div>
        );
    }
    return <div />;
}

export default CampsiteInfo;