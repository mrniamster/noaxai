document.addEventListener('DOMContentLoaded', () => {
    // Demo code examples for different operations
    const codeExamples = {
        refactor: {
            code: `// Optimized version with O(n) complexity
function processData(data) {
    const seen = new Set();
    const result = [];
    
    for (const item of data) {
        if (seen.has(item)) {
            result.push(item);
        }
        seen.add(item);
    }
    
    return result;
}`,
            improvements: ['✨ Better Performance', '🎯 O(n) Complexity', '💡 More Readable']
        },
        test: {
            code: `describe('processData', () => {
    test('should find duplicates in array', () => {
        const input = [1, 2, 2, 3, 3, 3];
        const expected = [2, 3, 3];
        expect(processData(input)).toEqual(expected);
    });

    test('should return empty array for no duplicates', () => {
        const input = [1, 2, 3, 4];
        expect(processData(input)).toEqual([]);
    });
});`,
            improvements: ['✅ Complete Test Coverage', '🔍 Edge Cases Handled', '📊 Clear Test Cases']
        },
        fix: {
            code: `function processData(data) {
    if (!Array.isArray(data)) {
        throw new TypeError('Input must be an array');
    }
    
    const seen = new Set();
    const duplicates = new Set();
    
    for (const item of data) {
        if (seen.has(item)) {
            duplicates.add(item);
        }
        seen.add(item);
    }
    
    return Array.from(duplicates);
}`,
            improvements: ['🛡️ Input Validation', '🎯 Duplicate Handling', '🔄 Optimized Logic']
        }
    };

    // Add click handlers for action buttons
    document.querySelectorAll('.action-btn').forEach(button => {
        button.addEventListener('click', () => {
            const action = button.classList[1]; // refactor, test, or fix
            const example = codeExamples[action];
            
            // Update code display
            const responseContent = document.querySelector('.response-content');
            responseContent.innerHTML = `
                <pre><code>${example.code}</code></pre>
                <div class="improvements">
                    ${example.improvements.map(imp => `<span class="tag">${imp}</span>`).join('')}
                </div>
            `;

            // Add animation
            responseContent.style.opacity = '0';
            setTimeout(() => {
                responseContent.style.opacity = '1';
            }, 100);
        });
    });

    // Add copy functionality
    document.querySelectorAll('.code-content, .response-content').forEach(block => {
        block.addEventListener('click', () => {
            const code = block.querySelector('code').textContent;
            navigator.clipboard.writeText(code).then(() => {
                const notification = document.createElement('div');
                notification.className = 'copy-notification';
                notification.textContent = '📋 Copied to clipboard!';
                block.appendChild(notification);
                setTimeout(() => notification.remove(), 2000);
            });
        });
    });

    // Add syntax highlighting
    document.querySelectorAll('pre code').forEach(block => {
        highlightSyntax(block);
    });
});

function highlightSyntax(codeBlock) {
    const keywords = ['function', 'const', 'let', 'var', 'return', 'if', 'for', 'of', 'new'];
    let html = codeBlock.textContent;

    // Highlight keywords
    keywords.forEach(keyword => {
        const regex = new RegExp(`\\b${keyword}\\b`, 'g');
        html = html.replace(regex, `<span class="keyword">${keyword}</span>`);
    });

    // Highlight strings
    html = html.replace(/'[^']*'|"[^"]*"/g, match => `<span class="string">${match}</span>`);

    // Highlight comments
    html = html.replace(/\/\/.*/g, match => `<span class="comment">${match}</span>`);

    codeBlock.innerHTML = html;
}