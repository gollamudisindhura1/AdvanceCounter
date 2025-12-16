# Lab - Advance Counter App

## Overview

This project demonstrates advanced usage of Hooks, useSatate and useEffect. The app goes beyond a basic counter by adding history tracking, keyboard interactions, auto-saving, and reset functionality.


## Features

1. Display Current Count
   - Shows the current counter value starting from 0 or a previously saved value.
   Increment and Decrement

2. Buttons to increase or decrease the count.
   - Supports a custom step value instead of just incrementing by 1.

3. Custom Step Input
   -  We can define how much the count increases or decreases each time.

4. History Tracking
   - Keeps track of all previous count values.

5. Displays the full history to the user.
   - It auto saves to Local Storage

6. Automatically saves the current count whenever it changes.
   - It loads the saved count when the app starts.

7. Keyboard Controls
   - ArrowUp increments the count.
   - ArrowDown decrements the count.

8. Reset Functionality
   - Resets the count back to 0.

9. Async Functions
   - I used Async functions for loading and saving data from local storage to simulate async behavior.

## Future Improvements

1. Add a toggle to switch between dark mode and light mode.
2. Limit the count history for better performance.

