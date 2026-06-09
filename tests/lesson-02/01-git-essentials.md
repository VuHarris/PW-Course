\-- mkdir <project\_name>

\-- cd <project\_name>

\-- git init

Initialize a Git repository which organizes files into 03 main areas:

&#x09;+ Working Directory (**Untracked/Modified** - Active workspace)

&#x09;+ Staging Area (**Index** - Waiting room)

&#x09;+ Local Repository (**.git folder** - Holding the complete history \& snapshots)
Quiz: What is "snapshot"? 

Answer: A comprehensive record of the exact state of your entire project's file structure at a specific point in time





\-- git add <file\_name>

Stages **a specific file**



\-- git add .

Stages **all new, modified, and deleted files** in the current director



\-- git add -A

Stages **all changes across** the entire repository



\-- git diff --staged

Shows **the exact code line changes** that have been staged



\-- git status

Shows your current active branch name \& check **the current state** of the repository:

&#x09;+ Untracked (Identifies newly created files in your directory that Git is not monitoring yet)

&#x09;+ Modified (Displays existing tracked files that have been modified or deleted locally but are not yet added to the staging area)

&#x09;+ Staged (Lists modified or new files successfully moved to the staging area via "git add" command. These are prepared for the next snapshot)





