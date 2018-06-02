# MadLib
In this project, you will explore handling input events and submission by creating a [Mad Lib](https://en.wikipedia.org/wiki/Mad_Libs) game.

This is a [Stage 2](https://github.com/Ada-Developers-Academy/pedagogy/blob/master/rule-of-three.md#stage-2) individual project. You will be submitting a PR for this project at the end.

## Learning Goals
- Practice using events
- Pass custom information to an event handler function
- Dynamically construct components based on data
- Extend code provided

## Scaffolding
The data structure that drives the UI is `madlibs/MadLibs.js`. **You do not need to modify this file**, but you will need to read through it to understand its structure.

The data in this file is an array of Madlib objects. A MadLib object has three properties that you'll utilize:
- `title` - the title of the Madlib
- `words` - an array of fill-in-the-blank 'word' objects. Each object contain a `key`, `label`, and `value` property. You will fill in the values
- `getText()` - a function that returns the Madlib text with each word filled in

## Requirements

### Baseline
As a starting point, review the code that has been provided to you.

To work through the analysis of the existing code, determine how to modify the application to load a **random** MadLib, instead of loading the first one which it currently does by default.

### Wave 1
1. Create a new component which will render a `<form>` with an `<input>` element for each word in the puzzle.
    - You should utilize the `selectedMadLib` variable stored in the `App` component's `state` to gather the words you need.
    - You may want to use the `placeholder` HTML attribute to include the `label` property for each word.
1. Tie each input to an event handler that will modify the state of the `selectedMadLib`.
    - You will need to pass not only the input's value but also information about _which_ input has changed through this event handler.
1. Modify `App.js` to only render the `Story` component once the form has been submitted.

#### Tips
The form component needs to be generic enough to support all of the different MadLibs from our data file. This can be challenging to get right when you haven't had a chance to interact with the data being used.

For this reason we suggest that you try first implementing the form with a single word from the first MadLib. Once that is working and the Story component's text is properly filled out with that single word, move on to supporting all of the words needed for the MadLib.

### Wave 2 (Optional)
Instead of selecting a random MadLib puzzle for the user, allow the user to choose from a dropdown which puzzle they want to play.
- Create a dropdown menu that allows a user to switch the selected MadLib to play (this should be a new component)
- Gather the titles from the MadLibs object, and display those as the dropdown options
- Using the `onChange` event, set the `selectedMadLib` object in the `App` component's state to the selected MadLib

**Questions:**
- If the form has already been submitted, should you continue to display the new story?
- What should happen to the existing words when you switch stories?

## What We're Looking For
You can look [here](./feedback.md) for what your instructors will look for in your submission.
