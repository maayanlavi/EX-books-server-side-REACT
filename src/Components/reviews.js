import React, { Component } from 'react';
import Review from './review';
import AddReviewForm from './AddReviewForm';

class Reviews extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name:'name',
            text:'text',
            stars:0,
            button:'Save',
            id: -1,
            reviews: [ ]
        }
        this.eachReview = this.eachReview.bind(this);
        this.delete = this.delete.bind(this);
        this.update = this.update.bind(this);
        this.add = this.add.bind(this);
        //this.addJson = this.addJson.bind(this);
        this.nextId = this.nextId.bind(this);
        this.handleName = this.handleName.bind(this);
        this.handleText = this.handleText.bind(this);
        this.handleStars = this.handleStars.bind(this);
    }

    // componentDidMount() {
    //     deliveriesData.map(item => this.addJson({id: item.id, Date: item.date, Name: item.name, City: item.city}));
    // }

    // addJson({id = null, Date = 'default date', Name = 'ploni', City = 'default city'}) {
    //     this.setState(prevState => ({
            
    //         deliveries: [
    //             ...prevState.deliveries, {
    //                 id: this.nextId(prevState.deliveries),
    //                 date: Date, 
    //                 name: Name,
    //                 city: City
    //             }
    //         ]
    //     }))
    // }

    eachReview(item, i) {
        return <Review key={i} index={item.id} onDelete={this.delete} onUpdate={this.update}>{item.name} <br/> {item.text} <br/> {item.stars} </Review>
    }

    handleName(e) {
        this.setState({name: e.target.value});
    }

    handleText(e) {
        this.setState({text: e.target.value});
    }

    handleStars(e) {
        this.setState({stars: e.target.value});
    }
     
    add() {

        if (this.state.button === 'Save') {
            this.setState(prevState => ({
                
                reviews: [
                    ...prevState.reviews, {
                        id: this.nextId(prevState.reviews),
                        name: this.state.name !== 'name' ?  this.state.name : 'anonymous',   
                        text: this.state.text !== 'text' ? this.state.text : 'nothing to say',
                        stars: this.state.stars !== 'stars' ? this.state.stars : 5
                    }
                ]
            }))
    }
    else {
        this.setState(prevState => ({
            reviews: prevState.reviews.map(
                review => review.id !== this.state.id ? review : {...review,
                name: this.state.name,  
                text: this.state.text,
                stars: this.state.stars
            }
            )
        }))
    }

    this.setState(() => ({
        name:'name',
        text:'text',
        stars:0,
        button:'Save',
    })) 
}

    nextId(reviews =[]) {
        let max = reviews.reduce((prev, curr) => prev.id > curr.id ? prev.id : curr.id , 0);
        return ++max;
    }

    delete(id) {
        this.setState(prevState => ({
            reviews: prevState.reviews.filter(name => name.id !== id),
            
        }))
    }
    update(id) {
        this.setState(() => ({
            name: this.state.reviews.filter(name2 => name2.id === id)[0].name,
            text: this.state.reviews.filter(name2 => name2.id === id)[0].text,
            stars: this.state.reviews.filter(name2 => name2.id === id)[0].stars,
            id:id,
            button:'Update',
        }))
    }

    reviewStyle = {
        backgroundColor: 'white',
        position: 'absolute',
        width: '100%',
        borderRadius: '13px',
        left: '0',
        right:'0',
        height: '557px',
        maxHeight: '557px',
        overflow:'scroll',
        
    }

    formStyle = {
        position:"absolute",
        top:'500px',
        right:'0',
        left:'0',
        width:'50%',

    }

    render() {
        return(
            <>
            <div className="review" style={this.reviewStyle}>
                {this.state.reviews.map(this.eachReview)}
            </div>
            <div className="form" style={this.formStyle}>
                <AddReviewForm name={this.state.name} text={this.state.text} stars={this.state.stars} button={this.state.button} onSubmitForm= {this.add} handleName={this.handleName} handleText={this.handleText} handleStars={this.handleStars} />
            </div>
            </>
        )
    }
}

export default Reviews;