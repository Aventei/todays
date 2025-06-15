// Father's Day Website JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling for all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add hover effect for image cards
    const imageCards = document.querySelectorAll('.image-card');
    imageCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.15)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
        });
    });

    // Add a heartbeat animation to heart symbols
    const hearts = document.querySelectorAll('.gratitude-list li::before');
    hearts.forEach(heart => {
        setInterval(() => {
            heart.style.transform = 'scale(1.2)';
            setTimeout(() => {
                heart.style.transform = 'scale(1)';
            }, 300);
        }, 2000);
    });

    // Add a special Father's Day message that appears after a delay
    setTimeout(() => {
        const messageContainer = document.createElement('div');
        messageContainer.className = 'special-message';
        messageContainer.innerHTML = `
            <div class="message-content">
                <h3>Happy Father's Day!</h3>
                <p>You can't beat me in a basketball 1v1 though</p>
                <button id="close-message"></button>
            </div>
        `;
        document.body.appendChild(messageContainer);
        
        // Style the message
        const style = document.createElement('style');
        style.textContent = `
            .special-message {
                position: fixed;
                bottom: 20px;
                right: 20px;
                background-color: #3498db;
                color: white;
                padding: 20px;
                border-radius: 10px;
                box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
                z-index: 1000;
                animation: slideIn 0.5s ease-out forwards;
            }
            
            @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            
            .message-content {
                max-width: 300px;
            }
            
            .message-content h3 {
                color: white;
                margin-top: 0;
            }
            
            #close-message {
                background: none;
                border: none;
                color: white;
                font-size: 1.5rem;
                cursor: pointer;
                padding: 5px;
                margin-top: 10px;
                transition: transform 0.3s ease;
            }
            
            #close-message:hover {
                transform: scale(1.2);
            }
        `;
        document.head.appendChild(style);
        
        // Add close functionality
        document.getElementById('close-message').addEventListener('click', function() {
            messageContainer.style.animation = 'slideOut 0.5s ease-in forwards';
            
            const slideOutStyle = document.createElement('style');
            slideOutStyle.textContent = `
                @keyframes slideOut {
                    from { transform: translateX(0); opacity: 1; }
                    to { transform: translateX(100%); opacity: 0; }
                }
            `;
            document.head.appendChild(slideOutStyle);
            
            setTimeout(() => {
                messageContainer.remove();
            }, 500);
        });
    }, 3000);

    // Add a subtle background animation
    const body = document.querySelector('body');
    let position = 0;
    
    function updateBackground() {
        position += 0.2;
        body.style.backgroundImage = `
            linear-gradient(
                ${position % 360}deg,
                rgba(236, 240, 241, 0.8) 0%,
                rgba(249, 249, 249, 0.8) 100%
            )
        `;
        requestAnimationFrame(updateBackground);
    }
    
    // Uncomment the line below to enable the subtle background animation
    // requestAnimationFrame(updateBackground);
});
