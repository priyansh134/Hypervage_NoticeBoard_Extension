chrome.runtime.onInstalled.addListener(() => {
    console.log('Extension installed');
  });
  
  // Example of using chrome APIs in Manifest V3
  chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
      target: {tabId: tab.id},
      func: () => {
        document.body.style.backgroundColor = 'red';
      }
    });
  });
  