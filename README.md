# Random Commit Generator

This project generates random commits for a Git repository with dates spanning from **January 1, 2023**, to **December 31, 2024**. It writes random date data into a `data.json` file and commits it to the repository using the [simple-git](https://www.npmjs.com/package/simple-git) library.

The goal is to create multiple commits with varied commit timestamps, allowing you to simulate a history of changes over a period of time.

## Features

- Generates random commit dates between **2023 and 2024**.
- Writes data to a `data.json` file.
- Commits changes to Git with the generated dates.
- Pushes all changes to a remote GitHub repository.

## Setup

Follow these steps to set up and run the project:

### 1. **Clone the Repository**
   Clone the repository to your local machine using the following command:

   ```bash
   git clone https://github.com/yourusername/random-commit-generator.git
   cd random-commit-generator
   ```

### 2. **Install Dependencies**

   This project requires `jsonfile`, `moment`, and `simple-git` for its functionality. Install them using the following command:

   ```bash
   npm install
   ```

### 3. **Configure Git User**

   Make sure your Git username and email are set up globally for committing to the repository:

   ```bash
   git config --global user.name "Your Name"
   git config --global user.email "you@example.com"
   ```

### 4. **Run the Script**

   To generate random commits, simply run the following command:

   ```bash
   node index.js
   ```

   This will generate the specified number of random commits (default is 100) and push them to the repository.

## How It Works

- The `index.js` script generates random dates between **January 1, 2023**, and **December 31, 2024**.
- Each date is written to the `data.json` file.
- The file is added to Git, and a commit is created with the date as the commit message.
- Once all commits are created, the changes are pushed to the remote GitHub repository.

## Example Output

When you run the script, the following output will be shown in the console:

```
Generated date: 2023-06-15T08:43:12+05:30
Data written: {"date":"2023-06-15T08:43:12+05:30"}
File added to Git index
Commit created with date: 2023-06-15T08:43:12+05:30
...
All commits completed! Pushing changes...
All operations completed successfully!
```

## Contributing

If you'd like to contribute to this project, feel free to fork the repository, create a branch, and submit a pull request. Please make sure to write tests and document your changes appropriately.

## Disclaimer

Please use this tool responsibly, as creating random commits can clutter the Git history. It's best used for testing purposes or simulating a commit history.
