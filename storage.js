(function () {
  const KEY = 'guestbook_entries';

  function loadEntries() {
    const saved = localStorage.getItem(KEY);
    if (!saved) return [];
    try { return JSON.parse(saved); } catch (e) { console.error('Storage: parse error', e); return []; }
  }

  function saveEntry(entry) {
    const entries = loadEntries();
    entries.push(entry);
    try { localStorage.setItem(KEY, JSON.stringify(entries)); }
    catch (e) { console.error('Storage: save error', e); }
  }

  window.Storage = { loadEntries, saveEntry };
})();
