import React, { Component } from 'react';
import axios from 'axios';

export class Create extends Component {
    constructor(props) {
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeDateStarted = this.onChangeDateStarted.bind(this);
        this.onChangeDateCompleted = this.onChangeDateCompleted.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            description: '',
            dateStarted: null,
            dateCompleted: null
        }
    }

onChangeName(e){
    this.setState({
        name: e.target.value
    });
}

onChangeDescription(e){
    this.setState({
        description: e.target.value
    });
}

onChangeDateStarted(e){
    this.setState({
        dateStarted: e.target.value
    });
}

onChangeDateCompleted(e){
    this.setState({
        dateCompleted: e.target.value
    });
}

onSubmit(e){
    e.preventDefault();
    const {history} = this.props;

    let tripObject = {
       // Id: Math.floor(Math.random()*1000),
        name: this.state.name,
        description: this.state.description,
        dateStarted: new Date(this.state.dateStarted).toISOString(),
        dateCompleted: new Date(this.state.dateCompleted).toISOString()
    }
    axios.post("api/Trips/AddTrip", tripObject).then(result => {
        history.push('/trips');
    })
}
    
    render() {

        return (
            <div className="trip-form" >
                <h3>Add a New Trip</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label> Trip Name: </label>
                        <input type="text" name="name" className="form-control" value={this.state.name} onChange={this.onChangeName} />
                    </div>
                    <div className="form-group">
                        <label> Trip Description: </label>
                        <textarea type="text" name="description" className="form-control" value={this.state.description} onChange={this.onChangeDescription} />
                    </div>
                    <div className="row">
                        <div className="col col-md-6 col-sm-6 col-xs-12">
                            <div className="form-group">
                                <label> Date Started: </label>
                                <input type="date" name="dateStarted" className="form-control" value={this.state.dateStarted} onChange={this.onChangeDateStarted}/>
                            </div>
                        </div>
                        <div className="col col-md-6 col-sm-6 col-xs-12">
                            <div className="form-group">
                                <label> Date Completed: </label>
                                <input type="date" name="dateCompleted" className="form-control" value={this.state.dateCompleted} onChange={this.onChangeDateCompleted} />
                            </div>
                        </div>
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Add trip" className="btn-primary" />
                    </div>

                </form>
            </div>
            )
    }
}