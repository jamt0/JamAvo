import React, { Component } from 'react'

export default class Formulario extends Component {
    render() {
        return (
            <div className="container">
                <form>
                    <div class="form-group">
                        <label for="exampleFormControlInput1">Esta empresa va a quebrar</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlSelect1"></label>
                        <select class="form-control" id="exampleFormControlSelect1">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlSelect2">vas a ver pirobo!</label>
                        <select multiple class="form-control" id="exampleFormControlSelect2">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlTextarea1">Example area texto</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                </form>
            </div>
        )
    }
}
