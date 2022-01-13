# Ideosorter
Ideosorter is a flowchart based interactive political quiz that attempts to bring a different approach to political quizzes.

## Ideosorter 3 requirements
 - A browser that supports ECMAScript 2017, including promises, async/await and the [fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) (most browsers released after mid-2017)
 - **Back button requirements**:
   - A browser that supports ECMAScript 2022, in particular the [Array.prototype.at()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/at) method, currently supported by the latest version of all major browsers but Safari (Currently only available in TP).

## Submitting a new translation
To add a new translation the recommended procedure is:
 - Fork this repository 
 - Go to your new fork and clone it to your machine (using `git clone`, github desktop, VS code's Github menu, etc.)
 - Run the `makelang` file inside the tools folder for your platform (.bat for windows cmd, .ps1 for powershell, .sh for bash, .fish for fish), indicating the language prefix for the new language.
 - Open the cloned folder in your text editor of choice and edit the files in the new folder just created by the script inside the `json` folder
 - Translate the "text" fields from the `buttons` json, the "question" fields from the `questions` json, the result and desc fields from the `results` json and all fields deemed necessary from the `ui` json, finally edit the `langs.json` in the `json` folder, adding a new object with the new language ID, name and your Github name and profile link.
 - Submit these changes to github (running `git push`, using github desktop, etc.)
 - Go to the github page of your cloned repository, and assuming you see your new submitted files (otherwise go back to the previous step), click the `Pull requests` tab and press the `New pull request` button, followed by `Create pull request`, add a suitable title and description and select the `Create pull request` button to finalize.