import { observable, action, toJS, extendObservable } from 'mobx';

export default class Options {

  @observable options = {
    showErrorsOnUpdate: true,
    showErrorsOnInit: false,
    validateOnInit: true,
    validateOnChange: true,
    strictUpdate: false,
    strictDelete: true,
    alwaysShowDefaultError: false,
    defaultGenericError: null,
    allowRequired: false,
    autoParseNumbers: false,
    validationDebounceWait: 250,
    validationDebounceOptions: { leading: true },
  };

  get(key = null) {
    if (key) return this.options[key];
    return toJS(this.options);
  }

  @action
  set(options) {
    extendObservable(this.options, options);
  }
}
