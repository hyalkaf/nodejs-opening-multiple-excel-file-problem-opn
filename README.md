# nodejs-opening-multiple-excel-file-problem-opn
This repo was created to show an error that happens with opening multiple excel files

To recreate the problem, you need to clone/fork this repo. Then do `npm install` to download all the necessary packages.

The program will prompt you to provide a path to an excel file. To reproudce the problem, make sure you have at least one other excel file open. You will see that the console prints out the message **'This message will be printed to the console after file was closed'** before closing the file you just opened. The correct behaviour is to wait until you close the file.
