chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'collectFeedback') {
    const feedback = prompt('Please provide your feedback:');
    if (feedback) {
      fetch('http://localhost:5001/api/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          userId: 'user123', // Mock user ID
          content: feedback,
          timestamp: new Date(),
          url: window.location.href
        })
      });
    }
  }
});
