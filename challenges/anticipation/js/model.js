import axios from "axios";

export default class Model {


  constructor() {

    this.simulations = [
      {
        id: 1,
        sellValue: null,
        installments: null,
        mdr: null,
        1: null,
        15: null,
        30: null,
        90: null
    }
    ]
  }

  postAnticipationValues(amount, installments, mdr ){

    let payload = {
      amount,
      installments,
      mdr
    }

    return new Promise((resolve, reject) => {
      axios.post('https://hash-front-test.herokuapp.com/', payload).then(response => {
        resolve(response.data);
      }).catch(error => {
        reject(error);
      });
    })

  }



}
