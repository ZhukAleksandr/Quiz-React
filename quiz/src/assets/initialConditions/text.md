<!-- [X] First homework will be dedicated to initializing our project and adding our first screen with a couple of reusable UI components. Our application is a Quiz app, in which users configure their quiz settings, then we get the required amount of questions from API and start the quiz. We also show results at the end and save user statistics locally to show them later on a separate screen. First screen, which is a quiz configuration screen should include following components:

[X] Number input for “number of questions”. Value have to be from 5 to 15 Select input for “category” 
[X] Select input for “difficulty” 
[X] Select input for “type” 
[X] Select input for “time” with values: 1m, 2m, 5m 
[X] “Start quiz” button 
[X] “See my stats” button -->

[-] ha2 in this homework we are creating a quiz results screen. This screen will after users finish their quiz, either by answering all the questions or running out of time. For now we can just put this new screen as the root screen of our application, because we don’t have navigation yet. Results screen should include following components:

[-] General result text like “Thank you for completing this quiz. Here are your results” Result in numbers of correct answers. For example “You answered 5 out of 10 questions correctly”. Quiz configuration, type, category, time and difficulty Text indicating how much time user took to answer all the questions 
[-] A button “Restart” which will restart this same quiz with same configuration from the start 
[-] A button “Choose another quiz” which will navigate the user to quiz configuration screen

For now we only focus on creating the UI part without any actual logic, we will add it later on

