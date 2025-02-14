# NoaxAI 🌠 - Your Local AI Coding Assistant (HF ONNX Runtime)

<div align="center">

[![GitHub stars](https://img.shields.io/github/stars/mrniamster/noaxai.svg?style=social&label=Star&maxAge=2592000)](https://github.com/mrniamster/noaxai)
[![VS Code Marketplace](https://img.shields.io/visual-studio-marketplace/v/mrniamster.noaxai.svg?style=flat-square)](https://marketplace.visualstudio.com/items?itemName=mrniamster.noaxai)
[![Downloads](https://img.shields.io/visual-studio-marketplace/d/mrniamster.noaxai.svg?style=flat-square)](https://marketplace.visualstudio.com/items?itemName=mrniamster.noaxai)
[![Rating](https://img.shields.io/visual-studio-marketplace/r/mrniamster.noaxai.svg?style=flat-square)](https://marketplace.visualstudio.com/items?itemName=mrniamster.noaxai)
[![License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](LICENSE)

[Star on GitHub](https://github.com/mrniamster/noaxai) • [Report Bug](https://github.com/mrniamster/noaxai/issues) • [Request Feature](https://github.com/mrniamster/noaxai/issues)

</div>

> Run Hugging Face models locally in VS Code! Code with AI assistance completely offline using ONNX runtime.

NoaxAI brings the power of large language models directly into your editor - no cloud services required. Download models once, then work completely offline with AI-powered coding assistance.

## Why NoaxAI? 🤔

- 🔒 **Privacy First**: All AI operations run locally on your machine
- 💨 **Fast & Efficient**: Uses ONNX optimized models for quick responses
- 🌐 **Offline Ready**: No internet needed after initial model download
- 🎯 **Code Focused**: Built specifically for programming workflows
- 💰 **Free Forever**: No subscriptions or API costs

## Features

### 🤖 Model Management

- Explore and manage AI models through the "Explore Models" panel
- Install multiple models locally
- Switch between different models for various tasks
- Supports ONNX optimized models for efficient local execution

### 💬 AI Chat

- Interactive chat interface with AI assistant
- Context-aware responses based on your codebase
- Stream responses in real-time
- Export generated code directly to files
- Pin files to provide context to the AI

### 🛠️ Code Operations

- **Refactor Code**: Improve code quality and efficiency
- **Generate Unit Tests**: Automatically create tests for your code
- **Fix Bugs**: Get suggestions for bug fixes
- **Document Code**: Generate comprehensive documentation
- **Custom Operations**: Use inline editing for custom code transformations

### 📝 Documentation Generation

- Generate comprehensive documentation for entire folders
- Create user guides and technical documentation
- Generate ASCII diagrams for code structure
- Export to markdown format
- Support for mkdocs configuration

### 🖥️ REPL Integration

- AI-powered command-line helper
- Get suggestions for terminal commands
- Execute suggested commands directly
- Interactive command selection

## Installation

1. Install [NoaxAI](https://marketplace.visualstudio.com/items?itemName=mrniamster.noaxai)  extension from VS Code marketplace 
2. Open VS Code
3. Open the "Explore Models" panel in the sidebar
4. Click on a model to install it locally
5. Wait for the model to download and install
6. Select the installed model for use

## Usage

### Model Selection

1. Open the "Explore Models" panel
2. Click on the cloud icon to install a model
3. Once installed, click on the model to select it for use
4. The selected model will be marked with a checkmark

### Chat Interface

1. Click the chat icon in the status bar or use command palette
2. Type your question or request
3. (Optional) Pin relevant files for context
4. Press Enter or click Send
5. View streamed responses in real-time

### Code Operations

Select code and right-click to access:

- `NoaxAI: Refactor Code`
- `NoaxAI: Generate Unit Test`
- `NoaxAI: Fix Bug`
- `NoaxAI: Edit Inline`

### Documentation Generation

1. Right-click on a folder in the explorer
2. Select `NoaxAI: Document This Folder`
3. Enter site name and description
4. Documentation will be generated in markdown format

### REPL Helper

1. Open command palette
2. Type `NoaxAI: REPL`
3. Ask for command suggestions
4. Select and execute suggested commands

## Keyboard Shortcuts

- `Ctrl+N`: Apply last AI suggestion when text is selected

## Requirements

- VS Code ^1.94.0
- Internet connection for initial model download
- Sufficient disk space for local models

## Extension Settings

This extension contributes the following settings:

- `NoaxAI.cacheDirPath`: Path to store downloaded models
- `NoaxAI.selectedModel`: Currently selected model for operations

## Known Issues

- Initial model download may take time depending on your internet connection
- Model switching may have a brief delay

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](LICENSE)

## Credits

- Models provided by Hugging Face
- ONNX Runtime for model execution
- Various open-source contributors

## Performance 📊

| Model        | Size  | Speed    | Memory Usage |
| ------------ | ----- | -------- | ------------ |
| SmolLM2-135M | 135MB | Fast     | ~300MB RAM   |
| Llama-3.2-1B | 1.1GB | Standard | ~2GB RAM     |

## 🌟 Request New Models

Need a specific model? We're constantly expanding our model support!

### How to Request:

1. Check if the model is ONNX compatible
2. [Create a Model Request](https://github.com/mrniamster/noaxai/issues/new?assignees=&labels=model-request&template=model_request.md&title=%5BMODEL%5D+) on GitHub
3. Provide the following information:
   - Model name and Hugging Face link
   - Use case/scenario
   - Expected benefits

Current model priorities:

- 🚀 Small & fast models (< 500MB)
- 💻 Code-specialized models
- 🔧 Task-specific models

[Request a Model Now →](https://github.com/mrniamster/noaxai/issues/new?assignees=&labels=model-request&template=model_request.md&title=%5BMODEL%5D+)

## Support & Community 👥

<!-- - Follow [@mrniamster](https://twitter.com/mrniamster) for updates
- Join our [Discord Community](https://discord.gg/yourdiscord) -->
- Star the repo to show support! ⭐
