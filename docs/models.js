// Load and display models from model.json
async function loadModels() {
    try {
        const response = await fetch('../src/media/model.json');
        const data = await response.json();
        const modelsContainer = document.getElementById('models-container');

        // Sort models by size for better organization
        const sortedModels = sortModelsBySize(data.models);
        
        // Group models by size category
        const modelsByCategory = groupModelsBySize(sortedModels);

        // Clear existing content
        modelsContainer.innerHTML = '';

        // Create sections for each category
        for (const [category, models] of Object.entries(modelsByCategory)) {
            const categorySection = document.createElement('div');
            categorySection.className = 'model-category';
            categorySection.innerHTML = `
                <h3>${category} Models</h3>
                <div class="model-grid">
                    ${models.map(model => createModelCard(model)).join('')}
                </div>
            `;
            modelsContainer.appendChild(categorySection);
        }
    } catch (error) {
        console.error('Error loading models:', error);
        document.getElementById('models-container').innerHTML = '<p>Error loading models. Please try again later.</p>';
    }
}

function sortModelsBySize(models) {
    return models.sort((a, b) => {
        const sizeA = convertSizeToBytes(a.size);
        const sizeB = convertSizeToBytes(b.size);
        return sizeA - sizeB;
    });
}

function convertSizeToBytes(sizeStr) {
    const size = parseFloat(sizeStr);
    if (sizeStr.endsWith('K')) return size * 1024;
    if (sizeStr.endsWith('M')) return size * 1024 * 1024;
    if (sizeStr.endsWith('B')) return size * 1024 * 1024 * 1024;
    return size;
}

function groupModelsBySize(models) {
    const categories = {
        'Tiny': [],    // < 100M
        'Small': [],   // 100M - 500M
        'Medium': [],  // 500M - 1.5B
        'Large': []    // > 1.5B
    };

    models.forEach(model => {
        const sizeInBytes = convertSizeToBytes(model.size);
        if (sizeInBytes < 100 * 1024 * 1024) {
            categories['Tiny'].push(model);
        } else if (sizeInBytes < 500 * 1024 * 1024) {
            categories['Small'].push(model);
        } else if (sizeInBytes < 1.5 * 1024 * 1024 * 1024) {
            categories['Medium'].push(model);
        } else {
            categories['Large'].push(model);
        }
    });

    return categories;
}

function createModelCard(model) {
    const displayName = model.model_name.split('/').pop();
    return `
        <div class="model-card">
            <h4>${displayName}</h4>
            <div class="model-size">${model.size}</div>
            <div class="model-path">${model.model_id}</div>
        </div>
    `;
}

// Load models when the page loads
document.addEventListener('DOMContentLoaded', loadModels);