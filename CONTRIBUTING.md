## Submitting a new translation
To add a new translation the recommended procedure is:
 - Fork this repository 
 - Go to your new fork and clone it to your machine (using `git clone`, github desktop, VS code's Github menu, etc.)
 - Run the `makelang` file inside the tools folder for your platform (.bat for windows cmd, .ps1 for powershell, .sh for bash, .fish for fish), indicating the language prefix for the new language.
 - Open the cloned folder in your text editor of choice and edit the files in the new folder just created by the script inside the `json` folder
 - Translate the "text" fields from the `buttons` json, the "question" fields from the `questions` json, the result and desc fields from the `results` json and all fields deemed necessary from the `ui` json, finally edit the `langs.json` in the `json` folder, adding a new object with the new language ID, name and your Github name and profile link.
 - Submit these changes to github (running `git push`, using github desktop, etc.)
 - Go to the github page of your cloned repository, and assuming you see your new submitted files (otherwise go back to the previous step), click the `Pull requests` tab and press the `New pull request` button, followed by `Create pull request`, add a suitable title and description and select the `Create pull request` button to finalize.

## Updating a translation
To complete an unfinished translation follow the same procedure as the one to add a new translation just skipping the 3rd step (making a new language) and only adding your name to the `langs.json`

To fix an issue with an already established translation open an issue in this repo's issues tab describing the issue as detailed as possible.
