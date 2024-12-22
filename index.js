const jsonfile = require('jsonfile');
const moment = require('moment');
const simpleGit = require('simple-git');

const path = "./data.json";

// Create a reusable Git instance
const git = simpleGit();

// Function to generate a random integer between min and max
const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// Function to generate a random date between two dates (2023-01-01 to 2024-12-31)
const getRandomDate = () => {
  // Define the start and end dates
  const start = moment("2023-01-01").valueOf();  // Start date (January 1, 2023)
  const end = moment("2024-12-31").valueOf();  // End date (December 31, 2024)

  // Generate a random timestamp between start and end
  const randomTime = randomInt(start, end); // Random timestamp between 2023 and 2024
  return moment(randomTime).format();  // Format as ISO string
};

// Function to write data and commit it
const writeAndCommit = async (date) => {
  const data = { date: date };
  try {
    // Write the date to the file
    await jsonfile.writeFile(path, data);
    console.log(`Data written: ${JSON.stringify(data)}`);

    // Add the file to the Git index
    await git.add([path]);
    console.log("File added to Git index");

    // Commit the file with the generated date
    await git.commit(date, { "--date": date });
    console.log(`Commit created with date: ${date}`);
  } catch (err) {
    console.error("Error in writeAndCommit:", err);
  }
};

// Function to create multiple commits
const makeCommits = async (n) => {
  if (n === 0) {
    console.log("All commits completed! Pushing changes...");
    await git.push();
    return;
  }

  // Generate a random date between January 1, 2023, and December 31, 2024
  const date = getRandomDate();

  console.log(`Generated date: ${date}`);
  await writeAndCommit(date);

  // Recursive call for remaining commits
  await makeCommits(n - 1);
};

// Start the process with 100 commits
makeCommits(100).then(() => console.log("All operations completed successfully!"));
