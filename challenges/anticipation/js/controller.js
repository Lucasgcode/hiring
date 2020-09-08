export default class Controller {

  constructor(model, view) {
    this.model = model
    this.view = view
    var self = this

    // var response = this.model.postAnticipationValues(15000, 2, 4)
    // response.then(data => {
    //   console.log(data)
    // })

    this.view.bindFormSubmit(this.handleFormSubmit.bind(this))

  }


  handleFormSubmit(form){
    console.log('handleFormSubmit')

    let payload = {
      amount: parseInt(form.get('amount')),
      installments: parseInt(form.get('installments')),
      mdr: parseInt(form.get('mdrValue'))
    }

    console.log(this._validateForm(payload))

    if(this._validateForm(payload)){

      console.log('form validado')

    } else {
      console.log('form inválido')
    }

  }


  _validateForm(data){
    return data.amount >= 0 && data.installments >= 0 && data.mdr >= 0
  }








}


