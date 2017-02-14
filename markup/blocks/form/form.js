let formSendMessage = {
    form: $('.send-message__form'),

    init: function () {
        if (this.form) {
            let that = this;
            that.inputs = that.form.find('input');
            that.submit = that.form.find('button[type=submit]');
            that.inputName = that.form.find('[name*=name]');
            that.inputMail = that.form.find('[name*=email]');
            that.textarea = that.form.find('textarea');

            that.inputName.each(function (i) {
                that.inputName[i].CustomValidation = new that.CustomValidation();
                that.inputName[i].CustomValidation.validityChecks = that.validityChecks.inputName;
            });

            that.inputMail.each(function (i) {
                that.inputMail[i].CustomValidation = new that.CustomValidation();
                that.inputMail[i].CustomValidation.validityChecks = that.validityChecks.inputMail;
            });

            that.textarea.each(function (i) {
                that.textarea[i].CustomValidation = new that.CustomValidation();
                that.textarea[i].CustomValidation.validityChecks = that.validityChecks.textarea;
            });

            that.setUpListeners(this.submit);
        }
    },

    // функция конструктор для проверки валидации поля input, по параметрам в объекте checkValidity
    // добавляет/удаляет класс ошибки и возвращает true/false, если поле валидно/невалидно
    CustomValidation: function () {
        this.validityChecks = [];
        this.checkValidity = function (input, event) {

            for (let i = 0; i < this.validityChecks.length; i++) {

                let isValid = this.validityChecks[i].isValid(input, event);
                if (isValid) {
                    input.classList.remove('field__input_error');
                    return true;
                } else {
                    input.classList.add('field__input_error');
                    return false;
                }
            }
        };
    },

    // объект с параметрами, для праверки на валидность для каждого вида полей input
    validityChecks: {
        inputName: [{
            isValid: function (input, event) {
                let result;

                if (event.type === 'blur' || event.type === 'click') {
                    result = /^[а-яА-ЯёЁa-zA-Z]{4,20}$/.test(input.value);
                } else {
                    result = (input.value.length <= 4) ? /^[а-яА-ЯёЁa-zA-Z]+$/.test(input.value) : /^[а-яА-ЯёЁa-zA-Z]{4,20}$/.test(input.value);
                    console.log(/^[a-zA-Z][a-zA-Z]$/.test(input.value));
                }

                return result;
            },
        }],
        inputMail: [{
            isValid: function (input, event) {
                let result;
                if (event.type === 'blur' || event.type === 'click') {
                    result = /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/.test(input.value);
                }
                return result;
            },
        }],
        textarea: [{
            isValid: function (input, event) {
                let result;
                if (event.type === 'blur' || event.type === 'click') {
                    result = input.value.length > 8;
                } else {
                    result = (input.value.length <= 8) ? true : input.value.length > 8;
                }
                return result;
            }
        }]
    },

    setUpListeners: function () {
        let inputs = this.inputs,
            textareas = this.textarea,
            that = this;

        for (let i = 0; i < inputs.length; i++) {
            inputs[i].addEventListener('keyup', function (event) {
                that.checkInput(inputs[i], event);
            });

            inputs[i].addEventListener('blur', function (event) {
                that.checkInput(inputs[i], event);
            });
        }

        for (let i = 0; i < textareas.length; i++) {
            textareas[i].addEventListener('keyup', function (event) {
                that.checkInput(textareas[i], event);
            });

            textareas[i].addEventListener('blur', function (event) {
                that.checkInput(textareas[i], event);
            });
        }

        that.submit[0].addEventListener('click', function (event) {
            let stopSubmit = false;
            for (let i = 0; i < inputs.length; i++) {
                that.checkInput(inputs[i], event);

                if (that.checkInput(inputs[i], event) === false) {
                    stopSubmit = true;
                }
            }

            for (let i = 0; i < textareas.length; i++) {
                that.checkInput(textareas[i], event);

                if (that.checkInput(textareas[i], event) === false) {
                    stopSubmit = true;
                }
            }

            if (stopSubmit) {
                event.preventDefault();
            }
        });
    },
    //
    // возвращает результат выполнения проверки на валидность
    // true - поле валидно, false - невалидно
    checkInput: function (input, event) {
        return input.CustomValidation.checkValidity(input, event);
    }
};

formSendMessage.init();
