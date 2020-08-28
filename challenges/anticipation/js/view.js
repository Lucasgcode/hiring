export default class View {
  constructor() {

    this.app = this.getElement('#root')

    this.divSimulation1 = this.createElement('div', null, 'simulation1')

    this.divSimulationInfo = this.createElement('div', null, 'simulationInfo')
    this.divSimulation1.append(this.divSimulationInfo)

    this.title = this.createElement('span')
    this.title.textContent = 'Simule sua Antecipação'
    this.divSimulationInfo.append(this.title)

    // Start Form Simulation
    this.formSimulation = this.createElement('form')

    this.labelInformSalePrice = this.createElement('label')
    this.labelInformSalePrice.setAttribute('for', 'salePrice')
    this.labelInformSalePrice.innerText = 'Informe o valor da venda *'
    this.formSimulation.append(this.labelInformSalePrice)

    this.inputSalePrice = this.createElement('input', null, 'salePrice')
    this.inputSalePrice.type = 'text'
    this.inputSalePrice.setAttribute('name', 'salePrice')
    this.formSimulation.append(this.inputSalePrice)

    this.labelInstallments = this.createElement('label')
    this.labelInstallments.setAttribute('for', 'installments')
    this.labelInstallments.innerText = 'Em quantas parcelas *'
    this.formSimulation.append(this.labelInstallments)

    this.inputInstallments = this.createElement('input', null, 'installments')
    this.inputInstallments.type = 'number'
    this.inputInstallments.setAttribute('name', 'installments')
    this.formSimulation.append(this.inputInstallments)

    this.spanMaxInstallments = this.createElement('span', 'maxInstallments')
    this.spanMaxInstallments.innerText = "Máximo de 12 parcelas"
    this.formSimulation.append(this.spanMaxInstallments)

    this.labelInformMdr = this.createElement('label')
    this.labelInformMdr.setAttribute('for', 'mdrValue')
    this.labelInformMdr.innerText = 'Informe o percentual de MDR *'
    this.formSimulation.append(this.labelInformMdr)

    this.inputMdrValue = this.createElement('input', null, 'mdrValue')
    this.inputMdrValue.type = 'number'
    this.inputMdrValue.setAttribute('name', 'mdrValue')
    this.formSimulation.append(this.inputMdrValue)

    // End Form Simulation
    this.divSimulationInfo.append(this.formSimulation)

    // Start Anticipation Info

    this.divAnticipationInfo = this.createElement('div', null, 'anticipationInfo')
    this.divSimulation1.append(this.divAnticipationInfo)

    this.spanYouReceive = this.createElement('span')
    this.spanYouReceive.innerText = "VOCÊ RECEBERÁ"
    this.divAnticipationInfo.append(this.spanYouReceive)

    this.spanTomorrow = this.createElement('span')
    this.spanTomorrow.innerText = "Amanhã:"
    this.divAnticipationInfo.append(this.spanTomorrow)

    this.spanTomorrowValue = this.createElement('span', 'anticipationValue')
    this.spanTomorrowValue.innerText = "R$ 0,00"
    this.divAnticipationInfo.append(this.spanTomorrowValue)

    this.span15days = this.createElement('span')
    this.span15days.innerText = "Em 15 dias:"
    this.divAnticipationInfo.append(this.span15days)

    this.span15daysValue = this.createElement('span', 'anticipationValue')
    this.span15daysValue.innerText = "R$ 0,00"
    this.divAnticipationInfo.append(this.span15daysValue)

    this.span30days = this.createElement('span')
    this.span30days.innerText = "Em 30 dias:"
    this.divAnticipationInfo.append(this.span30days)

    this.span30daysValue = this.createElement('span', 'anticipationValue')
    this.span30daysValue.innerText = "R$ 0,00"
    this.divAnticipationInfo.append(this.span30daysValue)

    this.span90days = this.createElement('span')
    this.span90days.innerText = "Em 90 dias:"
    this.divAnticipationInfo.append(this.span90days)

    this.span90daysValue = this.createElement('span', 'anticipationValue')
    this.span90daysValue.innerText = "R$ 0,00"
    this.divAnticipationInfo.append(this.span90daysValue)



    // All elements unite
    this.app.append(this.divSimulation1)

  }

  createElement(tag, className = null, id = null) {
    let element = document.createElement(tag)

    if(className) {
      element.classList.add(className)
    }

    if(id) {
      element.id = id
    }

    return element
  }

  getElement(selector) {
    let element = document.querySelector(selector)
    return element
  }



}
