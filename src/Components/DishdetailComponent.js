import React, { Component } from "react";
import { Card, Modal, Row, ModalBody, Label, ModalHeader, Button, CardBody, CardText, CardImg, CardTitle, BreadcrumbItem, Breadcrumb } from 'reactstrap'
import { Link } from "react-router-dom";
import { LocalForm, Control,Errors } from 'react-redux-form'

const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

class CommentForm extends Component {

    constructor(props) {
        super(props);
        

        this.state = {
            isModalOpen: false
        };
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    handleSubmit(values) {
        console.log('Current State is: ' + JSON.stringify(values));
        alert('Current State is: ' + JSON.stringify(values));
        this.toggleModal();

    }
    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    render() {
        return (
            <div>
                <Button outline color="secondary" onClick={this.toggleModal}><span className="fa fa-pencil"></span>Submit Comment</Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader  toggle={this.toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                        <div className="col-12">
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label style={{fontWeight:'bold'}} htmlFor="rating">Rating</Label>
                                <Control.select model=".rating" name="rating"
                                    className="form-control">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Control.select>
                                
                            </Row>
                            <Row className="form-group">
                                <Label style={{fontWeight:'bold'}} htmlFor="author">Your Name</Label>
                                <Control.text model=".author" id="author" name="author"
                                    placeholder="Your Name"
                                    className="form-control"
                                    validators={{
                                         minLength: minLength(3), maxLength: maxLength(15)
                                    }} />
                                <Errors
                                        className="text-danger"
                                        model=".author"
                                        show="touched"
                                        messages={{
                                            minLength: 'Must be greater than 3 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                     />
                            </Row>
                            <Row className="form-group">
                                <Label style={{fontWeight:'bold'}} htmlFor="comment">Comment</Label>
                                    <Control.textarea model=".comment" id="comment" name="comment"
                                        rows="6"
                                        className="form-control" />    
                            </Row>
                            <Row className="form-group">
                                
                                    <Button type="submit" color="primary">
                                        Submit
                                    </Button>
                                
                            </Row>
                        </LocalForm>
                        </div>
                      
                    </ModalBody>
                </Modal>
            </div>


        )

    }
}



function RenderDish({ dish }) {
    return (

        <div className="col-12 col-md-5 m-1">
            <Card>
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        </div>
    );

}

function RenderComments({ comments }) {

    if (comments != null) {
        const commentList = comments.map((comm) => {
            return (
                <ul class="list-unstyled">
                    <li>{comm.comment}</li>
                    <li>-- {comm.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(Date.parse(comm.date))}</li>
                </ul>
            );
        }
        );

        return (
            <div className="col-12 col-md-5 m-1">
                <h4>Comments</h4>
                <div>{commentList}</div>

                <CommentForm />
            </div>

        );
    }

    else {
        return (<div></div>);
    }
}

const Dishdetails = (props) => {

    if (props.dish != null) {
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <RenderDish dish={props.dish} />
                    <RenderComments comments={props.comments} />
                </div>
            </div>
        );
    }

    else {

        return (<div></div>);
    }

}



export default Dishdetails;