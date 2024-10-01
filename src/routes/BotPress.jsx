function BotPress() {	return (
	<>
		<iframe
			className="fixed bottom-0 h-screen -z-50 pt-24"
			srcDoc="<body><script src='https://cdn.botpress.cloud/webchat/v1/inject.js'></script>
            <script>
              window.botpressWebChat.init({
                  'composerPlaceholder': 'Ask me anything related to VAWC',
                  'botConversationDescription': 'Ask me anything related to VAWC',
                  'botName': 'Law Finder Chatbot',
                  'botId': 'a70c9c59-4515-41eb-b6b2-92539ff9f47d',
                  'hostUrl': 'https://cdn.botpress.cloud/webchat/v0',
                  'messagingUrl': 'https://messaging.botpress.cloud',
                  'clientId': 'a70c9c59-4515-41eb-b6b2-92539ff9f47d',
                  'enableConversationDeletion': true,
                  'showPoweredBy': false,
                  'className': 'webchatIframe',
                  'containerWidth': '100%25',
                  'layoutWidth': '100%25',
                  'hideWidget': true,
                  'showCloseButton': true,
                  'disableAnimations': false,
                  'closeOnEscape': false,
                  'showConversationsButton': true,
                  'enableTranscriptDownload': false,
                  'stylesheet':'https://webchat-styler-css.botpress.app/prod/code/911b5e7e-abdf-4701-b9a4-5fa31a4a24e4/v40206/style.css'
                  
              });
            window.botpressWebChat.onEvent(function () { window.botpressWebChat.sendEvent({ type: 'show' }) }, ['LIFECYCLE.LOADED']);
            </script></body>"
			width="100%"
			height="100%"></iframe>
	</>
);
}

export default BotPress;
