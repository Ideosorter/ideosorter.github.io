## Submitting a new translation
To add a new translation the recommended procedure is:
 - Fork this repository 
 - Go to your new fork and clone it to your machine (using `git clone`, github desktop, VS code's Github menu, etc.)
 - Run the `makelang.js` file inside the tools folder (node.js is required), indicating the language prefix for the new language.
 - Open the `scrips/i18n` folder and load the new language json in your text editor of choice.
 - Translate the fields from the `<lang>`.json, in the translator fields add your Github name and profile link.
 - Submit these changes to github (running `git add -A && git commit -m "Your commit message" && git push`, using github desktop, etc.)
 - Go to the github page of your cloned repository, and assuming you see your new submitted files (otherwise go back to the previous step), click the `Pull requests` tab and press the `New pull request` button, followed by `Create pull request`, add a suitable title and description and select the `Create pull request` button to finalize.

## Updating a translation
To complete an unfinished translation follow the same procedure as the one to add a new translation just skipping the 3rd step (making a new language).

To fix an issue with an already established translation open an issue in this repo's issues tab describing the issue as detailed as possible.
