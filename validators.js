(function () {
  function validateEntry(entry) {
    if (!entry) return false;
    if (typeof entry.name !== 'string' || typeof entry.learn !== 'string') return false;
    if (entry.name.trim() === '' || entry.learn.trim() === '') return false;
    return true;
  }

  function validateName(name) {
    return typeof name === 'string' && name.trim().length > 0 && name.trim().length <= 100;
  }

  function validateLearn(learn) {
    return typeof learn === 'string' && learn.trim().length > 0 && learn.trim().length <= 300;
  }

  window.Validators = { validateEntry, validateName, validateLearn };
})();
