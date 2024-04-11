<!-- [X] First homework will be dedicated to initializing our project and adding our first screen with a couple of reusable UI components. Our application is a Quiz app, in which users configure their quiz settings, then we get the required amount of questions from API and start the quiz. We also show results at the end and save user statistics locally to show them later on a separate screen. First screen, which is a quiz configuration screen should include following components:

[X] Number input for “number of questions”. Value have to be from 5 to 15 Select input for “category” 
[X] Select input for “difficulty” 
[X] Select input for “type” 
[X] Select input for “time” with values: 1m, 2m, 5m 
[X] “Start quiz” button 
[X] “See my stats” button -->

<!-- [X] ha2 in this homework we are creating a quiz results screen. This screen will after users finish their quiz, either by answering all the questions or running out of time. For now we can just put this new screen as the root screen of our application, because we don’t have navigation yet. Results screen should include following components:

[X] General result text like “Thank you for completing this quiz. Here are your results” Result in numbers of correct answers. For example “You answered 5 out of 10 questions correctly”. Quiz configuration, type, category, time and difficulty Text indicating how much time user took to answer all the questions 
[X] A button “Restart” which will restart this same quiz with same configuration from the start 
[X] A button “Choose another quiz” which will navigate the user to quiz configuration screen

For now we only focus on creating the UI part without any actual logic, we will add it later on -->


[X] ha3 In this homework we will add navigation to our app. Firstly we need to create a new empty screen, which later will be a Statistics screen (not adding anything there for now). After that we need to add navigation to our app. For now we are adding following navigation actions:

[X] Upon pressing the “Start quiz” button from the first screen we navigate to the main quiz screen. (With mock data for now) 
[X] Upon pressing the “End quiz” button on the main quiz screen we should see a modal window with some text and 2 buttons - “Cancel” and “Confirm”. 
[X] Upon pressing “Cancel” button, we just close this modal window 
[X] Upon pressing “Confirm” button we need to navigate user back to configuration screen 
[-] After answering the last question or if timer ends on the main quiz screen, we need to navigate users to the result screen 
[X] On the result screen upon pressing the “Choose another quiz” button we need to navigate users to quiz configuration screen 
[-] On the result screen upon pressing the “Restart quiz” button we need to navigate users to main quiz screen and restart current quiz (with mock data for now) 
[X] On the configuration scream upon pressing the “See my statistics” button we need to navigate to the newly created empty statistics screen