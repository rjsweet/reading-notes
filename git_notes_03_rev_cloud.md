# Notes on Git from Class 03 "Revisions and the Cloud"

## Terms to remember:

1 Version control system (VCS) - a system to manage different versions of the same created file.
1 Centralized Version Control System (CVCS) - a remote server or other form of database that maintains copies of each versions of modified files, which can be accessed by different (and multiple) users at the same time.
1 Distributed Version Control System (DVCS) - maintains a shared remote server, but allows for local copies of the different versions of the files. Allows for back up redundancy.
1 Git - A DVCS you can install on your local system, allowing for local modification and later sharing with others on the remote server.

## The Three states of Git

1 Committed - the local database is storing a copy of the file.
1 Modified - There have been changes made to the file, but these have not been saved to the local or remote database
1 Staged - A file has been flagged to be committed in the next "snapshot" or copied and saved version of the file sent to the database.

## Creating a local copy or "Cloning"
You can make a local copy of your project from the remote server's "repository" with the repository's url and the "clone" command. Cloning a repository creates a localized copy of all versions of the repository. There are three components in the local repository:

1 Working directory: The folder where the files are stored.
1 Index: The staging area.
1 Head: The most recent commit will be found here.

## A.C.P. (Add, Commit, Push)

The standard sequence of commands to send locally created files and their updated versions to the remote server's copy of the repository.

1 "add" add one file command example (git add git_notes.md)
1 "add" add all files in a directory, command example (git add.)
1 "commit" commit the changes, command example (git commit -m "your message of why you made a change here")
1 "push" export the local copy of your file or repository to the remote server, or "push" it towards it. command example (git push origin main)

### Back to Notes Main page

[Reading Notes Main](README.md)