document.addEventListener('DOMContentLoaded', () => {
  const list = document.getElementById('guest-list');
  const nameInput = document.getElementById('nameInput');
  const learnInput = document.getElementById('learnInput');
  const signBtn = document.getElementById('signBtn');

  function loadEntries() {
    if (!window.Storage) return;
    const entries = Storage.loadEntries();
    entries.forEach(entry => renderEntry(entry.name, entry.learn));
  }

  function addEntry() {
    const name = nameInput.value.trim();
    const learn = learnInput.value.trim();
    const entry = { name: Security ? Security.sanitize(name) : name, learn: Security ? Security.sanitize(learn) : learn };
    if (window.Validators && !Validators.validateEntry(entry)) {
      alert('Please fill in both fields!');
      return;
    }
    renderEntry(entry.name, entry.learn);
    if (window.Storage) Storage.saveEntry(entry);
    nameInput.value = '';
    learnInput.value = '';
    nameInput.focus();
  }

  function renderEntry(name, learn) {
    const li = document.createElement('li');
    li.className = 'guest-entry';
    const info = document.createElement('div');
    info.className = 'guest-info';
    const strong = document.createElement('strong');
    strong.textContent = name;
    const span = document.createElement('span');
    span.textContent = `Learned: ${learn}`;
    info.appendChild(strong);
    info.appendChild(span);
    li.appendChild(info);
    list.appendChild(li);
  }

  // storage handled by storage.js

  signBtn.addEventListener('click', addEntry);
  loadEntries();
});
