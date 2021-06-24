export default class FormValidator {
    constructor(selectorName, form) {
        this.selectorName = selectorName;
        this.form = form;
    }

    _checkInputValidity(input) {
        if (!input.validity.valid) {
            this._showInputError(input, 'ERROR');
        }
        else {
            this._hideInputError(input);
        }
    }

    _showInputError(input, message) {
        let spanElement = input.nextSibling.nextSibling;
        spanElement.textContent = message;
        spanElement.classList.add('modal__input-error_shown');
    }

    _hideInputError(input) {
        let spanElement = input.nextSibling.nextSibling;
        spanElement.textContent = '';
        spanElement.classList.remove('modal__input-error_shown');
    }

    _hasInvalidInput() {
        return [...this.inputs].some((element) => element.validity.valid === false);
    }

    _toggleButtonState() {
        if (this._hasInvalidInput()) {
            this.saveButton.setAttribute('disabled', 'disabled');
        }
        else {
            this.saveButton.removeAttribute('disabled');
        }
    }

    _setEventListeners() {
        this.form.addEventListener('submit', (event) => {
            event.preventDefault();
        })
        for (let input of this.inputs) {
            input.addEventListener('input', (event) => {
                console.log(input.validity.valid);
                this._toggleButtonState();
                this._checkInputValidity(event.target);
            })
        }
        this._toggleButtonState();
    }

    enableValidation() {
        this.inputs = this.form.querySelectorAll(this.selectorName);
        this.saveButton = this.form.querySelector('.modal__save-button');
        this._setEventListeners();
    }
}