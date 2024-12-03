class AIChatHandler {
    constructor() {
        this.chatMessages = document.getElementById('chatMessages');
        this.userInput = document.getElementById('userInput');
        this.sendButton = document.getElementById('sendButton');
        
        this.sendButton.addEventListener('click', () => this.handleSendMessage());
        this.userInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.handleSendMessage();
            }
        });
    }

    handleSendMessage() {
        const message = this.userInput.value.trim();
        if (message) {
            this.addMessage('user', message);
            this.simulateAIResponse(message);
            this.userInput.value = '';
        }
    }

    addMessage(sender, text) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}-message`;
        messageDiv.innerHTML = `
            <div class="message-content">
                <span class="sender">${sender === 'user' ? '您' : 'AI'}</span>
                <p>${text}</p>
            </div>
        `;
        this.chatMessages.appendChild(messageDiv);
        this.chatMessages.scrollTop = this.chatMessages.scrollHeight;
    }

    simulateAIResponse(userMessage) {
        // 这里可以替换为实际的 AI 响应逻辑
        setTimeout(() => {
            const response = `收到您的消息："${userMessage}"。我是一个演示用的 AI 助手。`;
            this.addMessage('ai', response);
        }, 1000);
    }
}

// 初始化聊天处理器
const chatHandler = new AIChatHandler(); 