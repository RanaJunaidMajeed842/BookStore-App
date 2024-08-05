
# BookStore App

The **BookStore App** is a console application developed in TypeScript. It serves as the backend for a future front-end interface, currently in the testing phase. The app provides basic functionality for managing a bookstore, including operations to add new books, order books, and complete orders.

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Development](#development)
- [Build](#build)
- [Contributing](#contributing)
- [License](#license)

## Description

The BookStore App is designed to facilitate basic bookstore operations. Users can:

- **Add a New Book**: Input book details to add to the inventory.
- **Order a Book**: Place an order for a book from the inventory.
- **Complete an Order**: Mark an order as completed once fulfilled.

This console-based application is currently in the testing phase, with plans to develop a front-end interface for a complete user experience.

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/bookstore-app.git
   cd bookstore-app
   ```

2. **Install dependencies:**

   Ensure you have [Node.js](https://nodejs.org/) installed. Then, install the project dependencies by running:

   ```bash
   npm install
   ```

## Usage

### Running the Project

To run the BookStore App, you have a couple of options:

1. **Using `ts-node` (for development):**

   Run the TypeScript files directly without compiling them:

   ```bash
   npx ts-node src/index.ts
   ```

   Ensure you have `ts-node` installed globally:

   ```bash
   npm install -g ts-node
   ```

2. **Compiling to JavaScript and Running:**

   Compile the TypeScript files to JavaScript and then run the compiled code:

   ```bash
   npx tsc
   node dist/index.js
   ```

   The TypeScript code in the `src` directory will be compiled, and the resulting JavaScript files will be output to the `dist` directory.

## Development

### Watch Mode

During development, you can watch for file changes and automatically recompile the TypeScript code:

```bash
npx tsc --watch
```

This command watches for changes in the TypeScript files and recompiles them as needed.

### Project Structure

- `src/`: Contains the TypeScript source files.
- `dist/`: Contains the compiled JavaScript files (generated after running `tsc`).
- `node_modules/`: Contains the project dependencies.

### Configuration

The project uses a `tsconfig.json` file to configure TypeScript. Customize it according to your project's needs.

## Build

To build the project, compile the TypeScript files to JavaScript:

```bash
npx tsc
```

The compiled JavaScript files will be output to the `dist` directory.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

