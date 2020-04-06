import React, { Component } from "react";
import { Card, CardBody, CardImgOverlay, CardText, CardImg, CardTitle } from 'reactstrap'




class Dishdetails extends Component {

    // constructor(props) {
    //     super(props);


    // }

    renderDish(dish) {

        if (dish != null) {
            
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            <Card>
                                <CardImg top src={dish.image} alt={dish.name} />
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
                        <li>-- {comm.author}, {comm.date}</li>
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

            else{
                return(<div></div>);
            }
            
            
        
    }






    render() {

        const Comments = this.renderComments(this.props.dish);
        return (


            this.renderDish(this.props.dish)


        );

    }

}

export default Dishdetails;