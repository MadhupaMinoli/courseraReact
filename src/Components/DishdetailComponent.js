import React, { Component } from "react";
import { Card, CardBody, CardText, CardImg, CardTitle } from 'reactstrap'




class Dishdetails extends Component {

    renderDish(dish) {

        if (dish != null) {

            return (
                <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg width="100%" src={dish.image} alt={dish.name} />
                            <CardBody>
                                <CardTitle>{dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {this.renderComments(dish.comments)}
                    </div>

                </div>
                </div>
            );

        }
        else {
            return (
                <div></div>
            );
        }


    }

    renderComments(comments) {

        if (comments != null) {
            const commentList = this.props.dish.comments.map((comm) => {
                return (
                    <ul class="list-unstyled">
                        <li>{comm.comment}</li>
                        <li>-- {comm.author}, {new Intl.DateTimeFormat('en-US',{year: 'numeric', month : 'short',day: '2-digit'}).format(Date.parse(comm.date))}</li>
                    </ul>
                );
            }
            );

            return (
                <div>
                    <h4>Comments</h4>
                    <div>{commentList}</div>
                </div>
            );
        }

        else {
            return (<div></div>);
        }
    }

    render() {
        const dish = this.props.dish;
        
        return (
                    
                        this.renderDish(dish)
                    
                   
            
        );

    }

}

export default Dishdetails;