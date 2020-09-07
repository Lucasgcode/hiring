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
    console.log(form.get('salePrice'));

    console.log(this._validateForm(form))

    if(this._validateForm(form)){

      console.log('form validado')

    } else {
      console.log('form inválido')
    }

  }


  _validateForm(form){
    let salePrice = parseFloat(form.get('salePrice')),
      installments = parseInt(form.get('installments')),
      mdr = parseInt(form.get('mdrValue'))
    
    return salePrice >= 0 && installments >= 0 && mdr >= 0

  }








}


