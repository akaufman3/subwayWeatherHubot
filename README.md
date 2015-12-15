#What does this bot do?
This bot takes a predefined list of area codes here in New York and returns the temperature and chance of rain for that day. When  `poncho weather [area code]` is entered, the bot will return a weather icon for the day and the weather forecast.

This bot also takes a predefined list of subway lines and returns if the line is experiencing an issue and what time the status of the line was updated. To ask the bot the status of a line, the user can enter `poncho subway [subway line]`.

If at any time the user forgets to specify `[area code]` or `[subway line]` in the prompt, the user will be presented with a random riddle selected from a set list.

Lastly, if at any time the user enter `how will the weather affect my hair`, the word `hair`, `what will my hair be like in this weather` or the word `humidity`, the bot will respond with a link to a website that will be able to tell you how the current weather will affect your hair based on the input area code.

#Approach taken:
In building this bot I decided to use mainly the respond and hear functions that Hubot comes with. I decided for now to work with a set group of data but this bot could be later updated to an API to allow for realtime data to be sent to the bot.

#Unsolved problems:
As regex can be strict, there was some difficulty in crafting a catch all for prompts entered by the user that did not match the built in prompts. What is in the bot now generally works but there are some edge cases that could cause poor UX. 

#Initalizing the bot:

To initalize the bot, first download the zip of the files, then follow the steps in the terminal below:

    - sudo npm install -g hubot coffee-script yo generator-hubot
    - cd subwayWeatherHubot
    - yo hubot
    - npm install hubot-slack --save
    
    To run slackbot every time paste this into the terminal after you had cd into the hubot directory:
    `HUBOT_SLACK_TOKEN=xoxb-15612216326-4qLqo2jY8BpDLwUhb9YaX6dw ./bin/hubot --adapter slack`