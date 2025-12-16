document.getElementById('collect-feedback').addEventListener('click', () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, { action: 'collectFeedback' });
  });
});

document.getElementById('view-dashboard').addEventListener('click', () => {
  chrome.tabs.create({ url: 'http://localhost:3000/dashboard' });
});
