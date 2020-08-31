export default class View {
  constructor() {

    this.app = this.getElement('#root')

    this.divSimulation1 = this.createElement('div', null, 'simulation1')

    this.divSimulationInfo = this.createElement('div', null, 'simulationInfo')
    this.divSimulation1.append(this.divSimulationInfo)

    this.title = this.createElement('span', 'simulation')
    this.title.textContent = 'Simule sua Antecipação'
    this.divSimulationInfo.append(this.title)

    // Start Form Simulation
    this.formSimulation = this.createElement('form')

    this.divPart1 = this.createElement('div', 'formPart')

    this.labelInformSalePrice = this.createElement('label')
    this.labelInformSalePrice.setAttribute('for', 'salePrice')
    this.labelInformSalePrice.innerText = 'Informe o valor da venda *'

    this.inputSalePrice = this.createElement('input', null, 'salePrice')
    this.inputSalePrice.type = 'text'
    this.inputSalePrice.setAttribute('name', 'salePrice')

    this.divPart1.append(this.labelInformSalePrice, this.inputSalePrice)
    this.formSimulation.append(this.divPart1)

    this.divPart2 = this.createElement('div', 'formPart')

    this.labelInstallments = this.createElement('label')
    this.labelInstallments.setAttribute('for', 'installments')
    this.labelInstallments.innerText = 'Em quantas parcelas *'
    this.divPart2.append(this.labelInstallments)

    this.inputInstallments = this.createElement('input', null, 'installments')
    this.inputInstallments.type = 'number'
    this.inputInstallments.setAttribute('name', 'installments')
    this.divPart2.append(this.inputInstallments)

    this.spanMaxInstallments = this.createElement('span', 'maxInstallments')
    this.spanMaxInstallments.innerText = "Máximo de 12 parcelas"
    this.divPart2.append(this.spanMaxInstallments)

    this.formSimulation.append(this.divPart2)

    this.divPart3 = this.createElement('div', 'formPart')
    this.labelInformMdr = this.createElement('label')
    this.labelInformMdr.setAttribute('for', 'mdrValue')
    this.labelInformMdr.innerText = 'Informe o percentual de MDR *'
    this.divPart3.append(this.labelInformMdr)

    this.inputMdrValue = this.createElement('input', null, 'mdrValue')
    this.inputMdrValue.type = 'number'
    this.inputMdrValue.setAttribute('name', 'mdrValue')
    this.divPart3.append(this.inputMdrValue)

    this.formSimulation.append(this.divPart3)

    // End Form Simulation
    this.divSimulationInfo.append(this.formSimulation)

    // Start Anticipation Info

    this.divAnticipationInfo = this.createElement('div', null, 'anticipationInfo')
    this.divSimulation1.append(this.divAnticipationInfo)

    this.divReceive1 = this.createElement('div', 'receive')

    this.spanYouReceive = this.createElement('span', 'youReceive')
    this.spanYouReceive.innerText = "VOCÊ RECEBERÁ"
    this.divReceive1.append(this.spanYouReceive)

    this.divReceive2 = this.createElement('div', 'receive')

    this.spanTomorrow = this.createElement('span')
    this.spanTomorrow.innerText = "Amanhã:"
    this.divReceive2.append(this.spanTomorrow)

    this.spanTomorrowValue = this.createElement('span', 'anticipationValue')
    this.spanTomorrowValue.innerText = "R$ "
    this.divReceive2.append(this.spanTomorrowValue)

    this.divReceive3 = this.createElement('div', 'receive')

    this.span15days = this.createElement('span')
    this.span15days.innerText = "Em 15 dias:"
    this.divReceive3.append(this.span15days)

    this.span15daysValue = this.createElement('span', 'anticipationValue')
    this.span15daysValue.innerText = "R$ "
    this.divReceive3.append(this.span15daysValue)

    this.divReceive4 = this.createElement('div', 'receive')

    this.span30days = this.createElement('span')
    this.span30days.innerText = "Em 30 dias:"
    this.divReceive4.append(this.span30days)

    this.span30daysValue = this.createElement('span', 'anticipationValue')
    this.span30daysValue.innerText = "R$ "
    this.divReceive4.append(this.span30daysValue)


    this.divReceive5 = this.createElement('div', 'receive')

    this.span90days = this.createElement('span', '')
    this.span90days.innerText = "Em 90 dias:"
    this.divReceive5.append(this.span90days)

    this.span90daysValue = this.createElement('span', 'anticipationValue')
    this.span90daysValue.innerText = "R$ "
    this.divReceive5.append(this.span90daysValue)

    this.divAnticipationInfo.append(this.divReceive1, this.divReceive2, this.divReceive3, this.divReceive4, this.divReceive5)

    // End Anticipation Info


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
